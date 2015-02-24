<?php

class Setting extends Model {

	protected $table = 'settings';
	public $timestamp = true;

    protected $fillable = ['key', 'value'];

    protected static $rules = [
        'key' => 'required',
    ];


    public static function boot()
    {
        parent::boot();

        static::creating(function($meta)
        {             
           
        });
        
    }
    
    public function scopeKey($query, $key)
    {    	
        if( count(Setting::where('key', '=', $key)->get()) == 0){
            $setting = Setting::firstOrNew(['key' => $key]);
            $setting->value = '';
            $setting->save();
        }

        return $query->where('key', '=', $key);
        
    }

}