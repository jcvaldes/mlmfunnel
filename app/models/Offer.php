<?php

class Offer extends Model {

    protected $table = 'offers';
    public $timestamp = true;

    protected $fillable = ['name', 'register', 'subscription', 'type'];

	protected static $rules = [
        'name' => 'required',
		'register' => 'required',
        'subscription' => 'required',
        'type' => 'required',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function($aweberlist)
        {

        });

    }
    /* Scopes */
    /* Relationships */
    /* Function */

    public function getType()
    {
        switch ($this->type) {
            case 'monthly':
                return '<span class="label label-info w-300">Mensual</span>';
                break;

            case 'threemonth':
                return '<span class="label label-warning w-300">Trimestral</span>';
                break;

            case 'sixmonth':
                return '<span class="label label-success w-300">Semestral</span>';
                break;

            case 'yearly':
                return '<span class="label label-danger w-300">Anual</span>';
                break;
        }
    }
}