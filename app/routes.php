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

Route::get('/backup', function(){
    Artisan::call("database:backup");
});

/* DEPLOY */

if (file_exists(__DIR__.'/controllers/Server.php')) {
    Route::any('/deploy', 'Server@deploy');
    Route::any('/deploy/migrate', 'Server@deploy_migrate');
    Route::any('/deploy/migrate-rollback', 'Server@deploy_migrate_rollback');
    Route::any('/deploy/dump-autoload', 'Server@deploy_dump_autoload');
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
    Route::any('/prepare/{offer?}', ['as' => 'prepare', 'uses' => 'SubscriptionController@prepare']);
    Route::any('/process', ['as' => 'process', 'uses' => 'SubscriptionController@process']);
    Route::any('/cancel', ['as' => 'cancel', 'uses' => 'SubscriptionController@cancel']);
    Route::any('/prepare/commission', ['uses' => 'SubscriptionController@commission']);

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


if (App::environment('production'))
{
    App::error(function(Exception $exception, $code)
    {
        switch ($code)
        {
            case 404:

                if (extension_loaded('newrelic')) {
                    try
                    {
                        newrelic_set_appname('DYS');
                        newrelic_notice_error (null,$exception);
                    }
                    catch(Exception $e){}
                }

            break;

            case 500:

                if (extension_loaded('newrelic')) {
                    try
                    {
                        newrelic_set_appname('DYS');
                        newrelic_notice_error (null,$exception);
                    }
                    catch(Exception $e){}
                }

            break;

            default:

                if (extension_loaded('newrelic')) {
                    try
                    {
                        newrelic_set_appname('DYS');
                        newrelic_notice_error (null,$exception);
                    }
                    catch(Exception $e){}
                }

            break;
        }

    });
}