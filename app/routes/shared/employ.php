<?php
	/* Employs */

	Route::get('/employs', ['uses' => 'EmployController@index']);

	//create
	Route::get('/employ/add', ['uses' => 'EmployController@create']);
	Route::post('/employ/add', ['uses' => 'EmployController@store']);

	Route::post('/employ/add/image', ['uses' => 'UploadController@post_upload']);
	Route::any('/employ/images', ['uses' => 'UploadController@session']);


	//retrieve
	Route::get('/employ/{id}', ['uses' => 'EmployController@show']);


	//update
	Route::post('/employ/update/{id}', ['uses' => 'EmployController@update']);
	Route::post('/employ/{id}/category/manage', ['uses' => 'EmployController@employ_category_manange']);


	//delete
	Route::get('/employ/delete/{id}', ['uses' => 'EmployController@destroy']);