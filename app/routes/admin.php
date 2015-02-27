<?php

Route::group(array('before' => 'auth', 'prefix' => 'dashboard'), function()
{
	Route::get('/', ['uses' => 'UserController@dashboard']);
	Route::get('/stats/{page}', ['uses' => 'UserController@dashboard_stats']);

	Route::get('/settings', ['uses' => 'AdminController@settings']);
	Route::post('/settings', ['uses' => 'AdminController@settings_post']);

	/* Landing */
	Route::resource('user', 'UserController');


	/* Avatar de usuario al editar */
	Route::post('admin-avatar/{id}', ['uses' => 'AdminController@post_avatar']);
	Route::get('admin-avatar/{id}', ['uses' => 'AdminController@get_avatar']);	
	Route::any('admin-avatar/crop/{id}', ['uses' => 'AdminController@post_avatar_crop']);
	Route::any('admin-avatar/rotate/{id}', ['uses' => 'AdminController@post_avatar_rotate']);


	Route::post('logo', ['uses' => 'UploadController@post_logo']);
	Route::get('logo', ['uses' => 'UploadController@get_logo']);

});