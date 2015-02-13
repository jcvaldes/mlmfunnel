<?php
use Carbon\Carbon;
class UserController extends BaseController {

	public function dashboard()
	{
		$start = (Input::get('start')) ? Input::get('start') : null;
		$end = (Input::get('end')) ? Input::get('end') : null;

		$data = [];
       
        $data['visit'] = Statistic::current()->type('visit')->dates($start, $end)->get()->count();
        $data['unique'] = Statistic::current()->groupBy('ip')->dates($start, $end)->get()->count();
        $data['prospect'] = Prospect::current()->dates($start, $end)->get()->count();
        $data['convertion'] = ($data['unique']==0) ? 0 : ($data['prospect'] / $data['unique']) * 100;

        $landing = Statistic::stats('landing', $start, $end);

		return View::make('backend.dashboard', compact('data', 'landing'));
	}


	public function dashboard_stats($page)
	{
		$start = (Input::get('start')) ? Input::get('start') : null;
		$end = (Input::get('end')) ? Input::get('end') : null;

		$data = [];
       
        $data['visit'] = Statistic::current()->type('visit')->page($page)->dates($start, $end)->get()->count();
        $data['unique'] = Statistic::current()->groupBy('ip')->page($page)->dates($start, $end)->get()->count();
        $data['prospect'] = Prospect::current()->type($page)->dates($start, $end)->get()->count();
        $data['convertion'] = ($data['unique']==0) ? 0 : ($data['prospect'] / $data['unique']) * 100;

        $landing = Statistic::stats($page, $start, $end);

		return View::make('backend.dashboard-stats', compact('data', 'landing'));
	}

	public function index()
	{
		$users = User::all();

		return View::make('backend.users.index', compact('users'));
	}


	public function show($id)
	{
		$user = User::findOrFail($id);

		return View::make('backend.users.show', compact('user'));
	}


	public function update($id)
	{
		$inputs = Input::all();

		$rules = User::$rules;
		$messages = User::$messages;

		if($inputs['password'] == ''){
			unset($rules['password']);
			unset($inputs['password']);

			unset($rules['password_confirmation']);
			unset($inputs['password_confirmation']);
		}else{
			$rules['password'] .= '|confirmed';			
		}

		unset($rules['type']);
		unset($rules['username']);
		$rules['email'] .= ',email,' . $id;
		
		$v = Validator::make($inputs, $rules, $messages);
		
		if ($v->passes())
		{
			$user = User::find($id);
			$user->fill($inputs);
			if ($user->save()){
				return Redirect::to('/dashboard/user/' . $id)->with('alert', ['type' => 'success', 'message' => 'El usuario se ha actualizado.']);
			}
			
		}
		return Redirect::back()->withInput()->withErrors($v->messages());
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /user/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		User::destroy($id);
		return Redirect::to('/dashboard/user');
	}
	

}