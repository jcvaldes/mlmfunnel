<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;
use Carbon\Carbon;

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

    protected $fillable = ['full_name', 'phone', 'picture', 'description', 'email', 'password', 'type', 'username', 'status', 'notif_email', 'notif_phone', 'subscription_ends_at', 'ref_id', 'subscription_cost', 'uniqid'];

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

    /* NOTIFY

    :NOTIFY */

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

        static::created(function($user){
            /* Add first Month */
                $user->subscription_ends_at = Carbon::now()->addMonth();
                $user->save();
            /* Send Email */
            $key = 'email-new-prospect';

            $title = Setting::key($key.':title')->first()->value;
            $body = Setting::key($key.':body')->first()->value;

            $title = str_replace('%name%', $user->full_name, $title);
            $title = str_replace('%email%', $user->email, $title);
            $title = str_replace('%phone%', $user->phone, $title);
            $title = str_replace('%url%', Setting::key('app_url')->first()->value, $title);
            $title = str_replace('%system%', Setting::key('app_name')->first()->value, $title);

            $body = str_replace('%name%', $user->full_name, $body);
            $body = str_replace('%email%', $user->email, $body);
            $body = str_replace('%phone%', $user->phone, $body);
            $body = str_replace('%url%', Setting::key('app_url')->first()->value, $body);
            $body = str_replace('%system%', Setting::key('app_name')->first()->value, $body);

            $body = nl2br($body);

            $data = ['title' => $title, 'body' => $body, 'id' => $user->id];
            try{
                Mail::queue('emails.notify.layout', $data, function($message) use ($user, $title)
                {
                    $message->from(Setting::key('app_mail')->first()->value, Setting::key('app_name')->first()->value);
                    $message->to($user->email, $user->full_name)->subject($title);
                });
            }catch(Exception $e){

            }

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

    public function scopeClient($query)
    {
        return $query->where('type', 'user');
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
        return Payment::select('subscription_id', 'payerid', 'description', 'total', 'commission', 'created_at' )->where('user_uniqid', $this->uniqid)->where('status', 'approved')->get();
    }
}
