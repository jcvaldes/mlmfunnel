<?php

class AuthController extends BaseController {

	public function showLogin()
	{
		if(Auth::user()){
			return Redirect::to('/dashboard');
		}else{
			return View::make('backend.login');
		}
	}

	public function showRegister()
	{
		if(Auth::user()){
			return Redirect::to('/dashboard');
		}else{
			if(Session::has('register')){
				return View::make('backend.register');
			}else{
				return Redirect::route('login');
			}
		}
	}

	public function showForgot()
	{
		if(Auth::user()){
			return Redirect::to('/dashboard');
		}else{
			return View::make('backend.forgot');
		}
	}

	public function login()
	{
		$rules = array(
			'email'    => 'required|email',
			'password' => 'required'
		);
		$messages = [
	        'email_login.required' => 'El correo es obligatorio.',
	        'password_login.required' => 'La contraseña es obligatoria.',
	    ];

		$validator = Validator::make(Input::all(), $rules, $messages);

		if ($validator->fails()) {
			return Redirect::back()->withErrors($validator)->withInput(Input::except('password'));
		} else {
			$userdata = array(
				'email' 	=> Input::get('email'),
				'password' 	=>Input::get('password')
			);

			if ($r = Auth::attempt($userdata)) {
				if(Auth::user()->status == 'suspended'){
					return Redirect::to('/dashboard/suspended');
				}else{
					return Redirect::to('/dashboard');
				}

			} else {
				return Redirect::to('/auth/login')->with('alert', ['type' => 'danger', 'message' => 'Credenciales invalidas']);
			}
		}
	}

	public function register()
	{
		if(!Session::has('register'))
			return Redirect::route('login');

		//$data = json_decode(Session::get('payment'),true);

		$inputs = Input::all();
		$rules = User::$rules;
		$messages = User::$messages;

		$inputs['subscription_cost'] = Setting::key('payment_subscription-cost')->first()->value;

		$inputs['ref_id'] = (Session::has('ref')) ? Session::get('ref') : '';
		$inputs['uniqid'] = Session::get('uniqid');

		$rules['password'] = $rules['password'] . '|confirmed';
		$rules['password_confirmation'] = 'required';
		unset($rules['description']);

		$v = Validator::make($inputs, $rules, $messages);

		if ($v->passes())
		{
			$user = User::create($inputs);
			$user->renewSubscription();

			Session::forget('register');
			Session::forget('uniqid');

			Auth::loginUsingId($user->id);
			return Redirect::to('/dashboard/');
		}else{
			return Redirect::back()->withInput()->withErrors($v->messages());
		}
	}

	public function logout()
	{
		Auth::logout();
		return Redirect::to('/auth/login');
	}

}