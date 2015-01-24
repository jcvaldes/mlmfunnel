<?php

class HomeController extends BaseController {

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

	public function landing($link, $user)
	{
		$user = User::username($user)->firstOrFail();
		switch ($link) {
			case 'landing':
				return View::make('templates.landing.index', compact('user'));
				break;

			case 'thankyou':
				return View::make('templates.landing.thanks', compact('user'));
				break;
			
			default:
				# code...
				break;
		}
		
	}

	public function suscribe()
	{
		$inputs = Input::all();
		$inputs['ip'] = Request::getClientIp();

		$prospect = new Prospect($inputs);
		if ($prospect->save())
		{
			$user = User::find($prospect->user_id);
			return Redirect::to('thankyou/'.$user->username);
			//return Redirect::to($inputs['type']/')->with('alert', ['type' => 'success', 'message' => 'El cliente ha sido registrado.']);;			
		}        
		dd($customer->getErrors());
        return Redirect::to('/customer')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un error, intenta mas tarde.']);;

	}



}
