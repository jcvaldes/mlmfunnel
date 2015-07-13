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
		//$c = Clickatell::send("Probando Clickatell Landing: ". $link ." Usuario: " . $user, "+584169595982");
		//dd($c);
		if($link=='dashboard'){
			return Redirect::route('login');
		}

		$app = Config::get('app.app');

		$user = User::username($user)->firstOrFail();

		if($user->isSuspended()){
			return Redirect::to('http://dineroysalud.net/landing/agustinromero');
		}

		switch ($link) {
			case 'landing':
				$tpl = 'templates.'.$app.'.index';
				return View::make($tpl, compact('user'));
				break;

			case 'thankyou':
				$tpl = 'templates.'.$app.'.thanks';
				return View::make($tpl, compact('user'));
				break;

			default:
				return Redirect::to('/');
				break;
		}

	}

	public function suscribe()
	{
		$data = [];
		$data['error'] = true;

		$inputs = Input::all();
		$inputs['ip'] = Request::getClientIp();

		$prospect = new Prospect($inputs);
		$user = User::find($prospect->user_id);

		if($prospect->save()){
			$data['error'] = false;
		}

		if(Request::ajax()){
			return json_encode($data);
		}

		return Redirect::to('thankyou/'.$user->username);
	}

	public function unsuscribe($id)
	{
		if(Hash::check($id, Input::get('crypt'))){
			$user = User::find($id);
			Session::put('unsuscribe_id', $id);
			return View::make('backend.pages.unsuscribe', compact('user'));
		}
	}

	public function unsuscribed()
	{
		return View::make('backend.pages.unsuscribed');
	}

	public function unsuscribe_post()
	{
		$inputs = Input::all();
		if(Session::has('unsuscribe_id')){
			$id = Session::get('unsuscribe_id');
			$user = User::find($id);

			$inputs['notif_email'] = Input::has('notif_email');
			$inputs['notif_phone'] = Input::has('notif_phone');

			$user->fill($inputs);
			$user->save();

			Session::forget('unsuscribe_id');

			return Redirect::route('login')->with('alert', ['type' => 'success', 'message' => 'La subscripción ha sido actualizada.']);
		}
	}





}
