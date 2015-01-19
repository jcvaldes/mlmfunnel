<?php

Route::group(array('before' => 'auth'), function()
{
	Route::get('/', ['uses' => 'UserController@dashboard']);

	/* Property */
	Route::resource('landing', 'LandingController');

	/* Branch */
	Route::resource('branch', 'BranchController', array('only' => array('index', 'show')));

	/* User */
	Route::resource('user', 'UserController', array('only' => array('index')));

	/* Customer */
	Route::resource('customer', 'CustomerController');
	Route::post('/verify-email', ['uses' => 'CustomerController@verify']);

});