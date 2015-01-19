<?php

class Landing extends Model {

    protected $table = 'landings';
    public $timestamp = true;

    protected $fillable = ['name', 'link', 'template_id'];


	protected static $rules = [
        'name' => 'required',
		'link' => 'required',
		'template_id' => 'required',
    ];

    //Use this for custom messages
    protected static $messages = [
        'name.required' => 'Campo obligatorio.',
        'link.required' => 'Campo obligatorio.',
        'template_id.required' => 'Campo obligatorio.',
	];

    public static function boot()
    {
        parent::boot();
        static::deleting(function($landing)
        {   
                      
        });
    }

    /* Scopes */
    
    public function scopeCurrent($query)
    {
        return $query->where('user_id', Auth::user()->id);
    }

    /* Relationships */
    

    /* Function */
    
}