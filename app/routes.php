<?php
/* Si no hay usuario logueado redirecciona a la página de login*/
if(!isset(Auth::user()->id)){
	Route::get('/', function(){
		return Redirect::to('/auth/login');
	});	
}

/* -------------------------------------------------- */
/* Auth Links */

Route::get('/auth/login', ['as' => 'login', 'uses' => 'AuthController@showLogin']);
Route::post('/auth/login', ['as' => 'login', 'uses' => 'AuthController@login']);

Route::get('/auth/forgot', ['uses' => 'AuthController@showForgot']);
Route::post('/auth/forgot', ['uses' => 'RemindersController@postRemind']);

Route::get('/auth/forgot/{token}', ['uses' => 'RemindersController@getReset']);
Route::post('/auth/forgot/reset', ['uses' => 'RemindersController@postReset']);

Route::get('logout', ['uses' => 'AuthController@logout']);

/* :Auth Links */
/* -------------------------------------------------- */

// Paneles
Route::group(['before' => 'auth'], function () {

	if(Auth::user()){
		require (__DIR__ . '/routes/' . Auth::user()->type . '.php');
		require (__DIR__ . '/routes/shared.php');
	}   

});

// Error Handle

App::missing(function($exception)
{
	if(Auth::user()){
		//return Redirect::to('/panel')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un extraño error, intenta de nuevo.']);
	}else{
		return Redirect::to('/auth/login')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un extraño error, intenta de nuevo.']);
	}
    
});

/* API Statistic */
Route::any('/api/statistic/{id}/{type}', ['uses' => 'StatisticController@store']);
Route::any('/api/statistic/{id}', ['uses' => 'StatisticController@show']);
Route::any('/api/statistics', ['uses' => 'StatisticController@statistics']);