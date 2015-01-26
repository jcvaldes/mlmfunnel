<?php
use Carbon\Carbon;
class Prospect extends Model {

    protected $table = 'prospects';
    public $timestamp = true;

    protected $fillable = ['name', 'email', 'phone', 'type', 'ip', 'confirmed', 'user_id'];

	protected static $rules = [
        'name' => 'required',
		'email' => 'required',
        'phone' => 'required',
        'type' => 'required',
        'user_id' => 'required',
    ];

    //Use this for custom messages
    protected static $messages = [
        'name.required' => 'Campo obligatorio.',
        'email.required' => 'Campo obligatorio.',
        'phone.required' => 'Campo obligatorio.',
        'type.required' => 'Campo obligatorio.',
        'user_id.required' => 'Campo obligatorio.',
	];
  
    /* Scopes */
    
    public function scopeCurrent($query)
    {
        return $query->where('user_id', Auth::user()->id);
    }
    
    /* Relationships */
    
    public function user()
    {
        return $this->belongsTo('User');
    }

    /* Function */
    public function getInitialWord(){
        return strtoupper($this->name[0]);
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
}