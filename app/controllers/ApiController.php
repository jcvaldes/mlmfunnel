<?php

class ApiController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function prospect($id)
	{		
		$prospect = Prospect::findOrFail($id);	
		return $prospect->toJson();	
	}

	public function prospect_edit($id)
	{		
		$inputs = Input::all();
		//echo json_encode($inputs); exit;
		$prospect = Prospect::findOrFail($id);	
		$prospect->fill($inputs);
		if($prospect->save()){
			$prospect->error = false;
			$prospect->message = "Datos guardados con exito.";
			return $prospect->toJson();
		}else{
			return json_encode(["error" => true, "message" => "Ocurrio un error."]);
		}
	}

	public function prospect_delete($id)
	{		
		
		if(Prospect::destroy($id)){
			return json_encode(["error" => false, "message" => "Prospecto eliminado."]);
		}else{
			return json_encode(["error" => true, "message" => "Ocurrio un error."]);
		}
	}

	

}