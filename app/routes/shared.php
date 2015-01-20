<?php

Route::any('product/{id}/question', ['uses' => 'QuestionController@store']);

/* Panel */
Route::group(array('before' => 'auth', 'prefix' => 'dashboard'), function()
{
	Route::get('profile', ['uses' => 'SharedController@profile']);
	Route::post('profile', ['uses' => 'SharedController@post_profile']);

	Route::get('notifications', ['uses' => 'SharedController@notifications']);
	
	/* Avatar de usuario */
	Route::post('avatar', ['uses' => 'UploadController@post_avatar']);
	Route::get('avatar', ['uses' => 'UploadController@get_avatar']);	
	Route::any('avatar/crop', ['uses' => 'UploadController@post_avatar_crop']);
	Route::any('avatar/rotate', ['uses' => 'UploadController@post_avatar_rotate']);

	/* Avatar de empresa */
	Route::post('picture', ['uses' => 'UploadController@post_picture']);
	Route::get('picture', ['uses' => 'UploadController@get_picture']);	
	Route::any('picture/crop', ['uses' => 'UploadController@post_picture_crop']);

	/* Cover de empresa */
	Route::post('cover', ['uses' => 'UploadController@post_cover']);
	Route::get('cover', ['uses' => 'UploadController@get_cover']);
	Route::any('cover/crop', ['uses' => 'UploadController@post_cover_crop']);
});

/* API */
	Route::get('/api/country', ['uses' => 'UbicationController@country_index']);
	Route::post('/api/country', ['uses' => 'UbicationController@country_store']);
	Route::delete('/api/country/{id}', ['uses' => 'UbicationController@country_destroy']);

	Route::get('/api/country/{id}', ['uses' => 'UbicationController@estate_index']);
	Route::post('/api/estate', ['uses' => 'UbicationController@estate_store']);
	Route::delete('/api/estate/{id}', ['uses' => 'UbicationController@estate_destroy']);

	Route::get('/api/estate/{id}', ['uses' => 'UbicationController@city_index']);
	Route::post('/api/city', ['uses' => 'UbicationController@city_store']);
	Route::delete('/api/city/{id}', ['uses' => 'UbicationController@city_destroy']);

/* API Property */
	Route::get('/api/property', ['uses' => 'PropertyController@api_index']);
/* Validar Email */	
	Route::post('/verify-email', ['uses' => 'CustomerController@verify']);

/* Users API*/
	Route::get('/api/user/{type}', ['uses' => 'UserController@api_type']);
	Route::get('/api/user-current/{type}', ['uses' => 'UserController@api_current_type']);