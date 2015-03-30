<?php
use Carbon\Carbon;
class Payment extends Model {

    protected $table = 'payments';
    public $timestamp = true;

    protected $fillable = ['paymentid', 'token', 'payerid', 'status', 'response', 'ip', 'description', 'total', 'user_id', 'commission'];

	protected static $rules = [
        'token' => 'required',
		'ip' => 'required',
        'user_id' => 'required',
        'status' => 'required',
    ];

    public function getTokenAttribute($value)
    {
        if($value){
            return "XX-XXXXXXXXXXX" . substr($value, -6);
        }
    }

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
    public function getId(){
        return (isset($this->paymentid)) ? @explode('-', $this->paymentid)[1] : "";
    }

    public function getStatus()
    {
        switch ($this->status) {
            case 'approved':
                return '<span class="label label-success w-300">Aprobado</span>';
                break;

            case 'rejected':
                return '<span class="label label-warning w-300">Rechazado</span>';
                break;

            case 'canceled':
                return '<span class="label label-default w-300">Cancelado</span>';
                break;
        }
    }


    public function getComputerDate(){

        return date("d/m/Y",strtotime($this->created_at));
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