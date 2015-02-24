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
});


/* Validar Email */	
	Route::post('/verify-email', ['uses' => 'CustomerController@verify']);

/* Users API*/
	Route::get('/api/user/{type}', ['uses' => 'UserController@api_type']);
	Route::get('/api/user-current/{type}', ['uses' => 'UserController@api_current_type']);