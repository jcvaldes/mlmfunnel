<?php

class Statistic extends Model {

    protected $table = 'statistics';
    public $timestamp = true;

    protected $fillable = ['type','ip','user_id', 'page'];


	protected static $rules = [
        'type' => 'required',
		'ip' => 'required',
        'page' => 'required',
		'user_id' => 'required',   
    ];

    /* Scopes */
    

    /* Relationships */
    public function scopeCurrent($query)
    {
        return $query->where('user_id', Auth::user()->id);
    }

    public function scopeOwner($query, $user_id)
    {
        return $query->where('user_id', $user_id);
    }

    public function scopePage($query, $page)
    {
        return $query->where('page', $page);
    }

    public function scopeType($query, $type)
    {
        return $query->where('type', $type);
    }

    public function scopeDates($query, $start, $end)
    {
        if(!isset($start) || !isset($end)){
            return;
        }
        return $query->whereBetween('created_at', array($start, $end));
    }


    /* Function */

    public static function stats($page, $start = null, $end = null)
    {
        $statistics = Statistic::current()->type($page)->get(); 

        $data = [];
       
        $data['visit'] = Statistic::current()->page($page)->type('visit')->dates($start, $end)->get()->count();
        $data['unique'] = Statistic::current()->page($page)->groupBy('ip')->dates($start, $end)->get()->count();
        $data['prospect'] = Prospect::current()->type($page)->dates($start, $end)->get()->count();
        $data['convertion'] = ($data['unique']==0) ? 0 : ($data['prospect'] / $data['unique']) * 100; 
        return $data;           
    }
    
}