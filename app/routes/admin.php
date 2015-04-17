<?php

Route::group(array('before' => 'auth', 'prefix' => 'dashboard'), function()
{
	Route::get('/', ['uses' => 'AdminController@dashboard']);
	Route::get('/stats/{page}', ['uses' => 'UserController@dashboard_stats']);

	Route::get('/settings', ['uses' => 'AdminController@settings']);
	Route::post('/settings', ['uses' => 'AdminController@settings_post']);

	Route::get('/users-status/{status}', ['as' => 'users-status', 'uses' => 'UserController@status']);

	/* Landing */
	Route::resource('user', 'UserController');

	/* Avatar de usuario al editar */
	Route::post('admin-avatar/{id}', ['uses' => 'AdminController@post_avatar']);
	Route::get('admin-avatar/{id}', ['uses' => 'AdminController@get_avatar']);
	Route::any('admin-avatar/crop/{id}', ['uses' => 'AdminController@post_avatar_crop']);
	Route::any('admin-avatar/rotate/{id}', ['uses' => 'AdminController@post_avatar_rotate']);


	Route::post('logo', ['uses' => 'UploadController@post_logo']);
	Route::get('logo', ['uses' => 'UploadController@get_logo']);

	/* Notifications */
	Route::get('notifications', ['uses' => 'NotificationController@index']);

	Route::get('/notifications/emails/{type}/{key}', ['as' => 'emails', 'uses' => 'NotificationController@emails']);
	Route::get('/notifications/emails/{type}/{key}/preview', ['as' => 'emails-p', 'uses' => 'NotificationController@emails_preview']);
	Route::post('/emails', ['uses' => 'NotificationController@emails_post']);

	Route::get('/notifications/sms/{type}/{key}', ['as' => 'sms', 'uses' => 'NotificationController@sms']);
	Route::get('/notifications/sms/{type}/{key}/preview', ['as' => 'sms-p', 'uses' => 'NotificationController@sms_preview']);
	Route::post('/sms', ['uses' => 'NotificationController@sms_post']);

});