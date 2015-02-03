<?php
use Carbon\Carbon;

class Notification extends Model {

    protected $table = 'notifications';
    public $timestamp = true;

    protected $fillable = ['notification', 'type', 'type_id', 'sent_id', 'user_id'];

    protected static $rules = [
    'notification' => 'required',
    'type' => 'required',
    'user_id' => 'required',
    ];

    /* BOOT */

    public static function boot()
    {
        parent::boot();

        static::created(function($notification){   
            switch ($notification->type) {
                case 'new_prospect':
                    $prospect = Prospect::find($notification->type_id);
                    $user = User::find($notification->user_id);

                    Clickatell::send("Nuevo Interesado en ".$prospect->type." - Nombre: ".$prospect->name." Email: ".$prospect->email." Tel.: ".$prospect->phone, $user->phone);

                    $data = ['name' => $prospect->name, 'email' => $prospect->email, 'phone' => $prospect->phone];
                    Mail::queue('emails.notify.new-prospect', $data, function($message) use ($user)
                    {
                        $message->from('noreply@mlmfunnel.com', 'MLMfunnel');
                        $message->to($user->email, $user->full_name)->subject('Nuevo prospecto! - MLMfunnel');
                    });
                break;

            }
        });       
    }

    /* Reltaionships */

    public function user()
    {
        return $this->belongsTo('User');
    }

    public function customer()
    {
        return $this->hasOne('Customer', 'id', 'type_id');
    }

    public function scopeUnread($query)
    {
        return $query->where('is_read', '=', 0)->where('user_id', Auth::user()->id)->orderBy('created_at', 'DESC');
    }

    public function scopeCurrent($query)
    {
        return $query->where('user_id', Auth::user()->id)->orderBy('created_at', 'DESC');
    }

    public function scopeCustomer($query, $id)
    {
        return $query->where('type', '=', "new_customer")->where('type_id', $id);
    } 

    public function getClass()
    {
        switch ($this->type) {
            case 'question':
            return "fa-question c-blue";
            break;
            
            default:
                # code...
            break;
        }
    }

    public function getIcon(){
        if($this->sent_id){
            return '<img src="' . User::find($this->sent_id)->getProfilePicture() .  '" alt="">';
        }else{
            return '<i class="fa p-r-10 f-18 '. $this->getClass() .'"></i>';
        }
    }

    public function getLink()
    {
        switch ($this->type) {
            case 'question':
            return "/panel/question/" . $this->type_id . "?ref=notify&n=" . $this->id;
            break;

            case 'new_prospect':
            return "/dashboard/prospect/?ref=notify&n=" . $this->id;
            break;

            case 'assigned':
            return "/customer/" . $this->type_id . "?ref=notify&n=" . $this->id;
            break;
            
            default:
                # code...
            break;
        }
    }

    public function getReminder(){
        if($this->sent_id){
            return '<strong>' . User::find($this->sent_id)->full_name .  '</strong>';
        }
    }

    public function getHumanDate()
    {
        $txt = 'carbon.timediff.';
        $isNow = true;
        $other = Carbon::now();
        $delta = abs($other->diffInSeconds($this->created_at));

        $divs = array(
         'second' => Carbon::SECONDS_PER_MINUTE,
         'minute' => Carbon::MINUTES_PER_HOUR,
         'hour'   => Carbon::HOURS_PER_DAY,
         'day'    => 30,
         'month'  => Carbon::MONTHS_PER_YEAR
         );

        $unit = 'year';
        foreach ($divs as $divUnit => $divValue) {
            if ($delta < $divValue) {
                $unit = $divUnit;
                break;
            }

            $delta = floor($delta / $divValue);
        }

        if ($delta == 0) {
            $delta = 1;
        }

        $txt .= $unit;
        return Lang::choice($txt, $delta, compact('delta'));
    }

    public function read()
    {
        $this->is_read = 1;
        return $this->save();
    }

    /* */

    public function getDay()
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->day;
    }

    public function getMonth()
    {
        $m = Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->month;
        $meses = array('','Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
        return $meses[$m];
    }

    public function getYear()
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->year;
    }

    public function getNameDay()
    {
        $d = Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at)->dayOfWeek;
        $dias = array('Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sábado');
        return $dias[$d];
    }

}