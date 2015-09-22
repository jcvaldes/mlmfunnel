<?php

use Funnel\Mailers\UserMailer as Mailer;

class AuthController extends BaseController {

	protected $mailer;

    public function __construct(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    /* Functions */

	public function showLogin()
	{
		if(Auth::user()){
			return Redirect::to('/dashboard');
		}else{
			return View::make('backend.login');
		}
	}

	public function showLogiin()
	{
		if(Auth::user()){
			return Redirect::to('/dashboard');
		}else{
			return View::make('backend.logiin');
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
	        'email.required' => 'El correo es obligatorio.',
	        'password.required' => 'La contraseña es obligatoria.',
	    ];

		$validator = Validator::make(Input::all(), $rules, $messages);
		//dd(Input::all());
		if ($validator->fails()) {
			return Redirect::back()->withErrors($validator)->withInput(Input::except('password'));
		} else {
			$userdata = array(
				'email' 	=> Input::get('email'),
				'password' 	=> Input::get('password')
			);
			//dd($userdata);
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

		$inputs['cr_way'] = (Session::has('cr_way')) ? Session::get('cr_way') : '';
		$inputs['cr_value'] = (Session::has('cr_value')) ? Session::get('cr_value') : '';
		$inputs['cs_way'] = (Session::has('cs_way')) ? Session::get('cs_way') : '';
		$inputs['cs_value'] = (Session::has('cs_value')) ? Session::get('cs_value') : '';

		$inputs['uniqid'] = Session::get('uniqid');

		$rules['password'] = $rules['password'] . '|confirmed';
		$rules['password_confirmation'] = 'required';
		unset($rules['description']);

		$v = Validator::make($inputs, $rules, $messages);

		if ($v->passes())
		{
			$user = User::create($inputs); //create

			$this->mailer->welcome($user);// Send Email

			Session::forget('register');
			Session::forget('uniqid');
			Session::forget('commission_way');
			Session::forget('commission_value');

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