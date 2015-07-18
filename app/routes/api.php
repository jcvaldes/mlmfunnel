<?php

Route::group(['prefix' => 'api'], function () {
    /* API Statistics */
    Route::any('/statistic/{id}/{page}/{type}', ['uses' => 'StatisticController@store']);
    Route::any('/statistic/{id}', ['uses' => 'StatisticController@show']);
    Route::any('/statistics', ['uses' => 'StatisticController@statistics']);

    /* API Referers */
    Route::any('/referers', ['uses' => 'ApiController@referers']);
    Route::any('/referer/{id}', ['uses' => 'ApiController@referer']);

    Route::any('/users-with-payments', ['uses' => 'ApiController@uwp']);

    Route::any('/partners', ['uses' => 'ApiController@partners']);

    Route::any('/paid/{id}', ['uses' => 'ApiController@paid']);

    /* IPN */
    Route::any('/ipn', ['uses' => 'ApiController@ipn']);

    Route::any('/payment/register', ['uses' => 'ApiController@payment_register']);
    Route::any('/payment/subscription', ['uses' => 'ApiController@payment_subscription']);
});