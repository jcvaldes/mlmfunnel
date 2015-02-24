<?php

class AweberList extends Model {

    protected $table = 'aweberlist';
    public $timestamp = true;

    protected $fillable = ['meta_web_form_id','listname','page', 'user_id'];


	protected static $rules = [
        'meta_web_form_id' => 'required',
		'listname' => 'required',
        'page' => 'required',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function($aweberlist)
        {
            $aweberlist->user_id = Auth::user()->id;
        });
        
    }

    /* Scopes */
    

    /* Relationships */
    public function scopeCurrent($query)
    {
        return $query->where('user_id', Auth::user()->id);
    }

     public function scopeUser($query, $id)
    {
        return $query->where('user_id', $id);
    }

    public function scopePage($query, $page)
    {
        return $query->where('page', $page);
    }
   
    /* Function */ 
    
}