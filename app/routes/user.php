<?php

Route::group(array('before' => 'auth', 'prefix' => 'dashboard'), function()
{
	Route::get('/', ['uses' => 'UserController@dashboard']);
	Route::get('/{page}', ['uses' => 'UserController@dashboard_stats']);

	/* Landing */
	Route::resource('landing', 'LandingController');

	Route::resource('prospect', 'ProspectController');

});


Route::group(array('before' => 'auth', 'prefix' => 'api'), function()
{
	Route::post('/prospect/{id}', ['uses' => 'ApiController@prospect']);
	Route::post('/prospect/{id}/edit', ['uses' => 'ApiController@prospect_edit']);	
	Route::post('/prospect/{id}/delete', ['uses' => 'ApiController@prospect_delete']);
});