<?php

class SharedController extends BaseController {	

	public function profile()
	{
		$user = Auth::user();
		return View::make('backend.shared.profile', compact('user'));
	}

	public function post_profile()
	{
		$inputs = Input::all();
		//dd($inputs);

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
		unset($rules['username']);
		$rules['email'] .= ',email,' . Auth::user()->id;
		
		$v = Validator::make($inputs, $rules, $messages);
		
		if ($v->passes())
		{
			$user = User::find(Auth::user()->id);
			$user->fill($inputs);
			$user->save();
			return Redirect::to('/dashboard/profile')->with('alert', ['type' => 'success', 'message' => 'Su perfil se ha actualizado.']);
		}else
		{
			return Redirect::back()->withInput()->withErrors($v->messages());
		}

		return View::make('backend.shared.profile');
	}	
}