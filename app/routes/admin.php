<?php

Route::group(array('before' => 'auth', 'prefix' => 'dashboard'), function()
{
	Route::get('/', ['uses' => 'UserController@dashboard']);
	Route::get('/stats/{page}', ['uses' => 'UserController@dashboard_stats']);

	/* Landing */
	Route::resource('user', 'UserController');

});