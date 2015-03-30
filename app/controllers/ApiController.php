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
		$userss = DB::table('users')
			->select('ref_id')
			->groupBy('ref_id')
			->where('ref_id','<>', '')
			//->whereBetween('created_at', array($start, $end))
			->get();
			$data = [];
			foreach ($userss as $key => $u) {


				$users = User::where('ref_id',$u->ref_id)->get();


				if(isset($users)){
					$list = [];
					if($users->count()>0){
						foreach ($users as $key => $user) {
							array_push($list, ['name' => $user->full_name, 'phone' => $user->phone, 'email' => $user->email, 'created_at'=> $user->getCreatedAt()]);
						}
						array_push($data, ['id' => $user->ref_id, 'count' => $users->count(), 'list' => $list]);
					}

				}

			}

			return json_encode($data);
	}

	public function referer($id)
	{
		header('Access-Control-Allow-Origin: *');

		$users = User::where('ref_id',$id)->get();

		if(isset($users)){
			$list = [];
			$commission = 0;
			if($users->count()>0){
				foreach ($users as $key => $user) {
					$payments = $user->getPayments();

					foreach ($payments as $key => $payment) {
						$payment->created_at_format = $payment->created_at->format('d/m/Y');
						$commission = $commission + $payment->commission;
						unset($payment->created_at);
					}
					array_push($list, ['name' => $user->full_name, 'phone' => $user->phone, 'email' => $user->email, 'created_at'=> $user->getCreatedAt(), 'payments' => $payments]);
				}
			}
			return json_encode(['id' => $id, 'count' => $users->count(), 'list' => $list, 'commission' => $commission]);
		}else{
			return json_encode(['id' => $id, 'count' => 0]);
		}
	}
}