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

    protected $fillable = ['full_name', 'phone', 'picture', 'description', 'email', 'password', 'type', 'username'];

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
    }

    /* Scopes */       

    public function scopeUsername($query, $username)
    {
        return $query->where('username', $username);
    }

     public function scopeClient($query)
    {
        return $query->where('type', 'user');
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

    public function getComputerDate(){
        return explode(' ', $this->created_at)[0];
    }
}
