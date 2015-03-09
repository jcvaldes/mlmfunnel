<?php

Route::group(array('before' => 'auth', 'prefix' => 'dashboard'), function()
{
	Route::get('/', ['uses' => 'AdminController@dashboard']);
	Route::get('/stats/{page}', ['uses' => 'UserController@dashboard_stats']);

	Route::get('/settings', ['uses' => 'AdminController@settings']);
	Route::post('/settings', ['uses' => 'AdminController@settings_post']);

	Route::get('/emails', ['uses' => 'AdminController@emails']);
	Route::get('/emails/{key}', ['uses' => 'AdminController@emails_edit']);
	Route::post('/emails', ['uses' => 'AdminController@emails_post']);

	Route::get('/emails/{key}/preview', ['uses' => 'AdminController@emails_preview']);


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