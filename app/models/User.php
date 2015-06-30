<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;
use Carbon\Carbon;
use Funnel\Mailers\UserMailer as Mailer;
use Funnel\Mailers\UserTexter as Texter;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = array('password', 'remember_token');

    protected $fillable = ['full_name', 'phone', 'picture', 'description', 'email', 'password', 'type', 'username', 'status', 'notif_email', 'notif_phone', 'subscription_ends_at', 'ref_id', 'subscription_cost', 'uniqid', 'commission_way', 'commission_value', 'aweber'];

    public static $rules = [
    'full_name' => 'required',
    'phone' => 'required',
    'description' => 'required',
    'username' => 'required|unique:users',
    'email' => 'required|email|unique:users',
    'password' => 'required',
    ];

    //Use this for custom messages
    public static $messages = [
    'full_name.required' => 'El nombre es obligatorio.',
    'email.required' => 'El correo es obligatorio.',
    'email.email' => 'Formato de correo invalido.',
    'email.unique' => 'El correo ya esta registrado en nuestra base de datos.',
    'username.required' => 'El usuario es obligatorio.',
    'username.unique' => 'El usuario no esta disponible.',
    'password.required' => 'La contraseña es obligatoria.',
    'password.confirmed' => 'Las contraseñas deben coincidir.',
    'password_confirmation.required' => 'La confirmación de contraseña es obligatoria.',
    'phone.required' => 'El teléfono es obligatorio.',
    'description.required' => 'La descripcion es obligatoria.',
    ];

    public static function boot()
    {
        parent::boot();

        static::saving(function($user)
        {
            if (Hash::needsRehash($user->password))
            {
                $user->password = \Hash::make($user->password);
            }
        });

        static::updating(function($user)
        {
            $mailer = new Mailer();
            $texter = new Texter();
            $original = $user->getOriginal();

            if ((isset($original['status'])) && ($original['status'] != $user->status))
            {
                if($user->status == 'belated'){
                    $mailer->nextSuspension($user);// Send Email
                    $texter->nextSuspension($user);// Send Text
                }else if($user->status == 'suspended'){
                    $mailer->suspension($user);// Send Email
                    $texter->suspension($user);// Send Text
                }else if($user->status == 'inactive'){
                    $mailer->deactivation($user);// Send Email
                    $texter->deactivation($user);// Send Text
                }else if($user->status == 'active'){
                    $mailer->reactivation($user);// Send Email
                    $texter->reactivation($user);// Send Text
                }
            }
        });

        static::created(function($user){
            /* Add first Month */
                $user->subscription_ends_at = Carbon::now()->addMonth();
                $user->save();
            /* Send Email */

        });

        static::deleting(function($user)
        {
            $prospects = Prospect::owner($user->id)->get();

            foreach ($prospects as $key => $p) {
                Prospect::destroy($p->id);
            }

            $statistics = Statistic::owner($user->id)->get();

            foreach ($statistics as $key => $s) {
                Statistic::destroy($s->id);
            }

            if(File::exists( public_path() . $user->picture )){
                Croppa::delete($user->picture);
            }
        });
    }
    /* Relationships */


    /* Scopes */

    public function scopeUsername($query, $username)
    {
        return $query->where('username', $username);
    }

    public function scopeUniqid($query, $uniqid)
    {
        return $query->where('uniqid', $uniqid);
    }

    public function scopeClient($query)
    {
        return $query->where('type', 'user');
    }

    public function scopeAdmin($query)
    {
        return $query->where('type', 'admin');
    }

    public function scopeActive($query)
    {
        $now = Carbon::now();
        return $query->where('status', 'active')->where('type', 'user')->where('subscription_ends_at', '>', $now);
    }

    public function scopeBelated($query)
    {
        $now = Carbon::now();
        return $query->where('status', 'active')->where('type', 'user')->where('subscription_ends_at', '<', $now);
    }

    public function scopeSuspended($query)
    {
        $mesPasado = Carbon::now()->subMonth();
        return $query->where('status', 'belated')->where('type', 'user')->where('subscription_ends_at', '<', $mesPasado);
    }

    public function scopeInactive($query)
    {
        $hace3meses = Carbon::now()->subMonths(3);
        return $query->where('status', 'suspended')->where('type', 'user')->where('subscription_ends_at', '<', $hace3meses);
    }

    public function scopeWithReferer($query)
    {
        return $query->where('ref_id', '<>', '');
    }

    /* functions */

	public function name(){
        return explode( ' ', $this->full_name)[0];
    }

    public function isAdmin()
    {
        return $this->type == 'admin';
    }

    public function getProfilePicture($width = 200)
    {
    	if($this->picture){
    		return Croppa::url($this->picture,$width);
    	}else{
    		return Identicon::getImageDataUri($this->id, $width);
            //return "";
    	}

    }

    public function getHumanDate()
    {
        $txt = 'carbon.timediff.'; $isNow = true; $other = Carbon::now(); $delta = abs($other->diffInSeconds($this->created_at)); $divs = array('second' => Carbon::SECONDS_PER_MINUTE, 'minute' => Carbon::MINUTES_PER_HOUR, 'hour'   => Carbon::HOURS_PER_DAY, 'day'    => 30, 'month'  => Carbon::MONTHS_PER_YEAR ); $unit = 'year'; foreach ($divs as $divUnit => $divValue) {if ($delta < $divValue) {$unit = $divUnit; break; } $delta = floor($delta / $divValue); } if ($delta == 0) {$delta = 1; } $txt .= $unit; return Lang::choice($txt, $delta, compact('delta'));
    }

    public function getComputerDate(){
        return explode(' ', $this->created_at)[0];
    }

    public function getStatus()
    {
        switch ($this->status) {
            case 'active':
                return '<span class="label label-success">Activo</span>';
                break;

            case 'belated':
                return '<span class="label label-warning">Atrasado</span>';
                break;

            case 'suspended':
                return '<span class="label label-danger">Suspendido</span>';
                break;

            case 'inactive':
                return '<span class="label label-default">Inactivo</span>';
                break;
        }
    }

    public function setStatus($status)
    {
        $this->status = $status;
        return $this->save();
    }

    public function getType()
    {
        switch ($this->type) {
            case 'user':
                return '<span class="label label-success">Usuario</span>';
                break;

            case 'admin':
                return '<span class="label label-primary">Administrador</span>';
                break;
        }
    }

    public function isSuspended()
    {
        return ($this->status == 'suspended');
    }

    public function getExpirationDate()
    {
        return "";
    }

    public function renewSubscription()
    {
        $this->subscription_ends_at = Carbon::createFromTimestamp(strtotime($this->subscription_ends_at))->addMonth();
        if(!$this->dateBelated()){
            $this->status = 'active';
        }
        return $this->save();
    }

    public function getSubscriptionEnds()
    {
        $date = date_create($this->subscription_ends_at);
        return date_format($date, 'd/m/Y');
    }

    public function getCreatedAt()
    {
        $date = date_create($this->created_at);
        return date_format($date, 'd/m/Y');
    }

    public function dateActive()
    {
        $now = Carbon::now();
        $end = Carbon::createFromTimestamp(strtotime($this->subscription_ends_at));

        return ($now < $end) ? true : 0;
    }

    public function dateBelated()
    {
        $now = Carbon::now();
        $end = Carbon::createFromTimestamp(strtotime($this->subscription_ends_at));

        return ($end < $now) ? true : 0;
    }

    public function dateSuspended()
    {
        $now = Carbon::now()->subMonth();
        $end = Carbon::createFromTimestamp(strtotime($this->subscription_ends_at));

        return ($end < $now) ? true : 0;
    }

    public function dateInactive()
    {
        $now = Carbon::now()->subMonths(3);
        $end = Carbon::createFromTimestamp(strtotime($this->subscription_ends_at));

        return ($end < $now) ? true : 0;
    }

    public function getPayments()
    {
        return Payment::select('id','subscription_id', 'payerid', 'description', 'total', 'commission', 'status_pay', 'created_at' )->where('user_uniqid', $this->uniqid)->where('status', 'approved')->get();
    }

    public function getCommissionR($total)
    {
        $commission = -1;

        if($this->cr_way == 'percent'){
            $percent = (($total/100) * $this->cr_value);
            if($total < $percent){
                $commission = $percent;
            }

        }else if($this->cr_way == 'numeric'){
            $commission = $this->cr_value;
        }

        return $commission;
    }

    public function getCommissionS($total)
    {
        $commission = -1;

        if($this->cs_way == 'percent'){
            $percent = (($total/100) * $this->cs_value);
            if($total < $percent){
                $commission = $percent;
            }

        }else if($this->cs_way == 'numeric'){
            $commission = $this->cs_value;
        }

        return $commission;
    }

    public function getSubscriptionId(){
        $payments = Payment::select('id','subscription_id', 'payerid', 'description', 'total', 'commission', 'status_pay', 'created_at' )->where('user_uniqid', $this->uniqid)->where('status', 'approved')->get();

        foreach ($payments as $key => $p) {
            if($p->subscription_id){
                return $p->subscription_id;
            }
        }
        return false;
    }

    public function aweber(){
        $this->aweber = true;
        return $this->save();
    }
}
