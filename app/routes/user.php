<?php

Route::group(array('before' => 'auth', 'prefix' => 'dashboard'), function()
{

	Route::group(array('before' => 'active'), function()
	{
		Route::get('/', ['uses' => 'UserController@dashboard']);

		Route::get('/stats/{page}', ['uses' => 'UserController@dashboard_stats']);
		Route::resource('landing', 'LandingController');
		Route::post('/setup-page', ['uses' => 'UserController@page_setup']);
		Route::get('/delete-list/{page}', ['uses' => 'UserController@delete_list']);

		Route::get('/publicity', ['as' => 'publicity', 'uses' => 'UserController@publicity']);

		Route::get('/tutorials', ['as' => 'tutorials', 'uses' => 'UserController@tutorials']);
	});

	Route::get('/suspended', ['uses' => 'UserController@suspended']);

	Route::get('/payments', ['as' => 'payments', 'uses' => 'UserController@payments']);
	Route::get('/payments/subscription', ['as' => 'payments.subscription', 'uses' => 'PaypalController@payments_subscription']);
	Route::get('/payments/subscription/status', ['as' => 'payment.subscription.status', 'uses' => 'PaypalController@payments_subscription_status']);

	/* Landing */

	Route::resource('prospect', 'ProspectController');

	Route::any('post', function(){
		echo $_SERVER['REQUEST_METHOD'] ."<br>";
		echo Request::server('HTTP_REFERER');
		dd(Input::all());
	});

});


Route::group(array('before' => 'auth', 'prefix' => 'api'), function()
{
	Route::post('/prospect/{id}', ['uses' => 'ApiController@prospect']);
	Route::post('/prospect/{id}/edit', ['uses' => 'ApiController@prospect_edit']);
	Route::post('/prospect/{id}/delete', ['uses' => 'ApiController@prospect_delete']);
});