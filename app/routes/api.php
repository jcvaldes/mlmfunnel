<?php

Route::group(['prefix' => 'api'], function () {
    /* API Statistics */
    Route::any('/statistic/{id}/{page}/{type}', ['uses' => 'StatisticController@store']);
    Route::any('/statistic/{id}', ['uses' => 'StatisticController@show']);
    Route::any('/statistics', ['uses' => 'StatisticController@statistics']);

    /* API Referers */
    Route::any('/referers', ['uses' => 'ApiController@referers']);
    Route::any('/referer/{id}', ['uses' => 'ApiController@referer']);

    Route::any('/paid/{id}', ['uses' => 'ApiController@paid']);

    /* IPN */
    Route::any('/ipn', ['uses' => 'ApiController@ipn']);
    Route::any('/ipntest', ['uses' => 'ApiController@ipntest']);
    Route::any('/ipn_log', ['uses' => 'ApiController@ipn_log']);
    Route::any('/ipn_delete', ['uses' => 'ApiController@ipn_delete']);

    Route::any('/payments', ['uses' => 'ApiController@payments']);
});