<?php

Route::group(array('before' => 'auth', 'prefix' => 'dashboard'), function()
{
	Route::get('/', ['uses' => 'UserController@dashboard']);

	/* Landing */
	Route::resource('landing', 'LandingController');

	Route::resource('prospect', 'ProspectController');

});