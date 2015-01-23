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
		return Redirect::to('/auth/login')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un extraño error, intenta de nuevo.']);
	}
    
});

/* Funnel */
Route::get('{landing}/{user}', ['uses' => 'HomeController@landing']);
Route::post('/suscribe', ['as' => 'suscribe', 'uses' => 'HomeController@suscribe']);

Route::get('postreceive', function(){
	try{
		$payload = json_decode($_REQUEST['payload']);
	}catch(Exception $e){
		exit(0);
	}

	file_put_contents('/logs/github.txt', print_r($payload, TRUE), FILE_APPEND);

	if ($payload->ref === 'refs/heads/master'){
		exec(public_path().'../postreceive.sh');
	}
});


Route::get('/lang', function(){
	echo json_encode('{"sProcessing":     "Procesando...", "sLengthMenu":     "Mostrar _MENU_ registros", "sZeroRecords":    "No se encontraron resultados", "sEmptyTable":     "Ningún dato disponible en esta tabla", "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros", "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros", "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)", "sInfoPostFix":    "", "sSearch":         "Buscar:", "sUrl":            "", "sInfoThousands":  ",", "sLoadingRecords": "Cargando...", "oPaginate": {"sFirst":    "Primero", "sLast":     "Último", "sNext":     "Siguiente", "sPrevious": "Anterior"}, "oAria": {"sSortAscending":  ": Activar para ordenar la columna de manera ascendente", "sSortDescending": ": Activar para ordenar la columna de manera descendente"} }');
});