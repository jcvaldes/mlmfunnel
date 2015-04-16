<?php
/* Si no hay usuario logueado redirecciona a la página de login*/
if(!isset(Auth::user()->id)){
	Route::get('/dashboard', function(){
		return Redirect::to('/auth/login');
	});
}
/*
Route::get('/', function(){
	return Redirect::to('/auth/login');
});
*/
Route::get('/aweber', function(){
	return View::make('aweber');
});

/* DEPLOY */

if (file_exists(__DIR__.'/controllers/Server.php')) {
    Route::get('/deploy', 'Server@deploy');
}

/* API */
require (__DIR__ . '/routes/api.php');
/* :API */

/* AUTH */
require (__DIR__ . '/routes/auth.php');
/* :AUTH */

/* Dashboard */
Route::group(['before' => 'auth'], function () {

	if(Auth::user()){
		require (__DIR__ . '/routes/' . Auth::user()->type . '.php');
		require (__DIR__ . '/routes/shared.php');
	}

});

/* Subscription */
Route::group(['prefix' => 'subscription'], function(){
    Route::get('/prepare', ['as' => 'prepare', 'uses' => 'SubscriptionController@prepare']);
    Route::get('/process', ['as' => 'process', 'uses' => 'SubscriptionController@process']);
    Route::get('/cancel', ['as' => 'cancel', 'uses' => 'SubscriptionController@cancel']);

});

/* Funnel */
Route::get('{landing}/{user}', ['uses' => 'HomeController@landing']);
Route::post('/suscribe', ['as' => 'suscribe', 'uses' => 'HomeController@suscribe']);

Route::get('/dashboard/unsuscribe/{id}', ['uses' => 'HomeController@unsuscribe']);
Route::post('/dashboard/unsuscribe', ['uses' => 'HomeController@unsuscribe_post']);

/* PayPal */

Route::get('subscription/payment', array(
    'as' => 'payment',
    'uses' => 'PaypalController@postPayment',
));

// this is after make the payment, PayPal redirect back to your site
Route::get('dashboard/payment/status', array(
    'as' => 'payment.status',
    'uses' => 'PaypalController@getPaymentStatus',
));

/* Error Handle */

App::missing(function($exception)
{
    if(Auth::user()){
        //return Redirect::to('/panel')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un extraño error, intenta de nuevo.']);
    }else{
        //return Redirect::to('/auth/login')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un extraño error, intenta de nuevo.']);
    }
});