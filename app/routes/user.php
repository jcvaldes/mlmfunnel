<?php

Route::group(array('before' => 'auth', 'prefix' => 'dashboard'), function()
{


Route::group(array('before' => 'active'), function()
{
	Route::get('/', ['uses' => 'UserController@dashboard']);
	
	Route::get('/stats/{page}', ['uses' => 'UserController@dashboard_stats']);
	Route::resource('landing', 'LandingController');
	Route::post('/setup-page', ['uses' => 'UserController@page_setup']);
	Route::get('/delete-list/{page}', ['uses' => 'UserController@delete_list']);
});

	Route::get('/suspended', ['uses' => 'UserController@suspended']);

	Route::get('/payments', ['as' => 'payments', 'uses' => 'UserController@payments']);

	/* Landing */
	

	Route::resource('prospect', 'ProspectController');

});


Route::group(array('before' => 'auth', 'prefix' => 'api'), function()
{
	Route::post('/prospect/{id}', ['uses' => 'ApiController@prospect']);
	Route::post('/prospect/{id}/edit', ['uses' => 'ApiController@prospect_edit']);	
	Route::post('/prospect/{id}/delete', ['uses' => 'ApiController@prospect_delete']);
});