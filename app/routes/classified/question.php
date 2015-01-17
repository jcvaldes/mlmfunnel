<?php
	/* Questions */
	
	Route::get('/questions', ['uses' => 'QuestionController@index']);

	//create
	Route::post('/question/reply', ['uses' => 'QuestionController@reply']);

	//retrieve	
	Route::get('/question/{id}', ['uses' => 'QuestionController@show']);

	//update
	Route::any('/question/{id}/status/{status}', ['uses' => 'QuestionController@status']);
	
	//delete	