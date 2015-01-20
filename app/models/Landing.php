<?php

class Landing extends Model {

    protected $table = 'landings';
    public $timestamp = true;

    protected $fillable = ['name', 'link', 'user_id'];


	protected static $rules = [
        'name' => 'required',
		'link' => 'required',
        'user_id' => 'required',
    ];

    //Use this for custom messages
    protected static $messages = [
        'name.required' => 'Campo obligatorio.',
        'link.required' => 'Campo obligatorio.',
	];

  
    /* Scopes */
    
    public function scopeCurrent($query)
    {
        return $query->where('user_id', Auth::user()->id);
    }

    public function scopeUnique($query, $link)
    {
        return $query->where('link', $link);
    }

    /* Relationships */
    
    public function user()
    {
        return $this->belongsTo('User');
    }

    /* Function */
    
}