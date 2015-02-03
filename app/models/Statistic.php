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


    /* Function */
    
}