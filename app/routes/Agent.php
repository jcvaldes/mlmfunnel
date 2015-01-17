<?php

Route::group(array('before' => 'auth'), function()
{
	Route::get('/', ['uses' => 'AgentController@dashboard']);

	/* Customer */
	Route::get('/customer', 'AgentController@customer');
	Route::any('/customer/finish/md', ['uses' => 'CustomerController@finish']);
	Route::any('/customer/negotiate/now', ['uses' => 'CustomerController@negotiate']);
	Route::get('/customer/{id}', 'CustomerController@show');

	
	/* Branch */
	Route::get('/branch', 'AgentController@branch');

	/* User */
	Route::get('/user', 'AgentController@user');

	/* Property */
	Route::resource('property', 'PropertyController', array('only' => array('index', 'show')));
	Route::post('/property/image', ['uses' => 'PropertyController@add_image']);


	/* Avatar de usuario */
	Route::post('upload', ['uses' => 'UploadController@post_upload']);
	Route::get('upload', ['uses' => 'UploadController@get_upload']);	
	Route::any('upload/crop', ['uses' => 'UploadController@post_upload_crop']);
	Route::any('upload/rotate', ['uses' => 'UploadController@post_upload_rotate']);

	/* imagen de inmueble */
	Route::post('/property/image/{id}', ['uses' => 'PropertyController@post_image']);
	Route::get('/property/image/{id}', ['uses' => 'PropertyController@get_image']);	
	Route::any('/property/image/{id}/crop', ['uses' => 'PropertyController@image_crop']);
	
});