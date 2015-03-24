<?php

class ApiController extends BaseController {

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
		header('Access-Control-Allow-Origin: *');
		$users = DB::table('users')
			->select('full_name','ref_id', DB::raw('count(*) as count'))
			->groupBy('ref_id')
			->where('ref_id','<>', '')
			//->whereBetween('created_at', array($start, $end))
			->get();
			$data = [];
			foreach ($users as $key => $user) {
				$data[$user->ref_id]['count'] = $user->count;

                if(empty($data[$user->ref_id]['items']))
                    $data[$user->ref_id]['items'] = [];
                array_push($data[$user->ref_id]['items'], ["name" => $user->full_name]);
			}
            $json = [];
            foreach($data as $key => $value){
                array_push($json, ['ref_id' => $key, 'count' => $value['count'], 'items' => $value['items']]);
            }
			return json_encode($json);
	}

	public function referer($id)
	{
		header('Access-Control-Allow-Origin: *');
		$users = DB::table('users')
			->select('full_name','ref_id', DB::raw('count(*) as count'))
			->groupBy('ref_id')
			->where('ref_id', $id)
			->first();
	
		if(isset($users)){
			return json_encode(['id' => $users->ref_id, 'count' => $users->count]);
		}else{

		}
	}
}