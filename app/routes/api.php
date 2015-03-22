<?php

Route::group(['prefix' => 'api'], function () {
/* API Statistics */

Route::any('/statistic/{id}/{page}/{type}', ['uses' => 'StatisticController@store']);
Route::any('/statistic/{id}', ['uses' => 'StatisticController@show']);
Route::any('/statistics', ['uses' => 'StatisticController@statistics']);

/* API Referers */

Route::any('/referers', ['uses' => 'ApiController@referers']);
Route::any('/referer/{id}', ['uses' => 'ApiController@referer']);

});