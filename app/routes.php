<?php
/* Si no hay usuario logueado redirecciona a la página de login*/
if(!isset(Auth::user()->id)){
	Route::get('/dashboard', function(){
		return Redirect::to('/auth/login');
	});	
}

Route::get('/', function(){
	return Redirect::to('/auth/login');
});	

Route::get('/aweber', function(){
	return View::make('aweber');
});	

/* DEPLOY */

if (file_exists(__DIR__.'/controllers/Server.php')) {
    Route::get('/deploy', 'Server@deploy');
}

/* API Statistic */
Route::any('/api/statistic/{id}/{page}/{type}', ['uses' => 'StatisticController@store']);
Route::any('/api/statistic/{id}', ['uses' => 'StatisticController@show']);
Route::any('/api/statistics', ['uses' => 'StatisticController@statistics']);

/* -------------------------------------------------- */
/* Auth Links */

Route::get('/auth/login', ['as' => 'login', 'uses' => 'AuthController@showLogin']);
Route::post('/auth/login', ['as' => 'login', 'uses' => 'AuthController@login']);

Route::get('/auth/register', ['as' => 'register', 'uses' => 'AuthController@showRegister']);
Route::post('/auth/register', ['as' => 'register', 'uses' => 'AuthController@register']);

Route::get('/auth/forgot', ['uses' => 'AuthController@showForgot']);
Route::post('/auth/forgot', ['uses' => 'RemindersController@postRemind']);

Route::get('/auth/forgot/{token}', ['uses' => 'RemindersController@getReset']);
Route::post('/auth/forgot/reset', ['uses' => 'RemindersController@postReset']);

Route::get('/auth/logout', ['uses' => 'AuthController@logout']);

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
		//return Redirect::to('/auth/login')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un extraño error, intenta de nuevo.']);
	}
    
});

/* Funnel */
Route::get('{landing}/{user}', ['uses' => 'HomeController@landing']);
Route::post('/suscribe', ['as' => 'suscribe', 'uses' => 'HomeController@suscribe']);

Route::get('/dashboard/unsuscribe/{id}', ['uses' => 'HomeController@unsuscribe']);
Route::post('/dashboard/unsuscribe', ['uses' => 'HomeController@unsuscribe_post']);

/* PayPal */

Route::get('payment', array(
    'as' => 'payment',
    'uses' => 'PaypalController@postPayment',
));

// this is after make the payment, PayPal redirect back to your site
Route::get('dashboard/payment/status', array(
    'as' => 'payment.status',
    'uses' => 'PaypalController@getPaymentStatus',
));


Route::get('all', function(){

	$users = User::all();

	$body = "";

	foreach ($users as $key => $user) {
		$body.= $user->full_name . " | " . $user->email." | ". $user->phone ." | " .$user->dateActive()." | " .$user->dateBelated()." | " .$user->dateSuspended()." | " .$user->dateInactive(). "<hr>";
	}

	$title = count($users)." usuario(s).";
	$body = nl2br($body);

	return View::make('emails.notify.layout', ['title' => $title, 'body' => $body, 'id' => ""]);
});

Route::get('active', function(){

	$users = User::active()->get();

	$body = "";

	foreach ($users as $key => $user) {
		$body.= $user->full_name . " | " . $user->email." | ". $user->phone ." | " .$user->dateActive()." | " .$user->dateBelated()." | " .$user->dateSuspended()." | " .$user->dateInactive(). "<hr>";
	}

	$title = count($users)." usuario(s) activo.";
	$body = nl2br($body);

	return View::make('emails.notify.layout', ['title' => $title, 'body' => $body, 'id' => ""]);
});


Route::get('belated', function(){

	$users = User::belated()->get();

	$body = "";

	foreach ($users as $key => $user) {
		$body.= $user->full_name . " | " . $user->email." | ". $user->phone ." | " .$user->dateActive()." | " .$user->dateBelated()." | " .$user->dateSuspended()." | " .$user->dateInactive(). "<hr>";
	}

	$title = count($users)." usuario(s) atrasados.";
	$body = nl2br($body);

	return View::make('emails.notify.layout', ['title' => $title, 'body' => $body, 'id' => ""]);
});

Route::get('suspended', function(){

	$users = User::suspended()->get();

	$body = "";

	foreach ($users as $key => $user) {
		$body.= $user->full_name . " | " . $user->email." | ". $user->phone ." | " .$user->dateActive()." | " .$user->dateBelated()." | " .$user->dateSuspended()." | " .$user->dateInactive(). "<hr>";
	}

	$title = count($users)." usuario(s) suspendidos.";
	$body = nl2br($body);

	return View::make('emails.notify.layout', ['title' => $title, 'body' => $body, 'id' => ""]);
});

Route::get('inactive', function(){

	$users = User::inactive()->get();

	$body = "";

	foreach ($users as $key => $user) {
		$body.= $user->full_name . " | " . $user->email." | ". $user->phone ." | " .$user->dateActive()." | " .$user->dateBelated()." | " .$user->dateSuspended()." | " .$user->dateInactive(). "<hr>";
	}

	$title = count($users)." usuario(s) desactivados.";
	$body = nl2br($body);

	return View::make('emails.notify.layout', ['title' => $title, 'body' => $body, 'id' => ""]);
});