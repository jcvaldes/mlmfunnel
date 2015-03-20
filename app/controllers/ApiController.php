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

	/* Referers */

	public function referers()
	{
		//$users = User::withReferer()->groupBy('ref_id')->get();


		$users = DB::table('users')
			->select(DB::raw('DATE(created_at) as date'), DB::raw('ref_id'), DB::raw('count(*) as count'))
			->groupBy('date', 'ref_id')
			->where('ref_id','<>', '')
			//->whereBetween('created_at', array($start, $end))
			->get();
			$data = [];
			foreach ($users as $key => $user) {
				$data[$user->date][$user->ref_id] = $user->count;
			}
			return json_encode($data);


		return $users->toArray();
	}

	

}