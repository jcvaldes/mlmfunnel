<?php

Route::group(['prefix' => 'auth'], function () {
    Route::get('/login',  ['as' => 'login', 'uses' => 'AuthController@showLogin']);
    Route::get('/logiin',  ['as' => 'logiin', 'uses' => 'AuthController@showLogiin']);
    Route::post('/login', ['as' => 'login', 'uses' => 'AuthController@login']);

    Route::get('/register',  ['as' => 'register', 'uses' => 'AuthController@showRegister']);
    Route::post('/register', ['as' => 'register', 'uses' => 'AuthController@register']);

    Route::get('/forgot',  ['as' => 'forgot','uses' => 'AuthController@showForgot']);
    Route::post('/forgot', ['as' => 'forgot','uses' => 'RemindersController@postRemind']);

    Route::get('/forgot/{token}', ['uses' => 'RemindersController@getReset']);
    Route::post('/forgot/reset',  ['uses' => 'RemindersController@postReset']);

    Route::get('/logout', ['uses' => 'AuthController@logout']);
});