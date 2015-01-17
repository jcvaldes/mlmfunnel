<?php
	/* Products */
	
	Route::get('/products', ['uses' => 'ProductController@index']);

	//create
	Route::get('/product/add', ['uses' => 'ProductController@create']);	
	Route::post('/product/add', ['uses' => 'ProductController@store']);

	Route::post('/product/add/image', ['uses' => 'UploadController@post_upload']);
	Route::post('/product/{id}/add/image', ['uses' => 'ProductController@add_image']);
	Route::any('/product/images', ['uses' => 'UploadController@session']);


	//retrieve	
	Route::get('/product/{id}', ['uses' => 'ProductController@show']);


	//update
	Route::post('/product/update/{id}', ['uses' => 'ProductController@update']);
	Route::post('/product/{id}/category/manage', ['uses' => 'ProductController@product_category_manange']);
	

	//delete
	Route::get('/product/delete/{id}', ['uses' => 'ProductController@destroy']);
	Route::post('/image/delete/{id}', ['uses' => 'ProductController@post_image_delete']);