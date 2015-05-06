<?php

class SubscriptionController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function prepare()
	{
		if(Input::has('ref')){
			Session::put('ref', Input::get('ref'));
		}

		$uniqid = Hash::make(uniqid());
		Session::put('uniqid', $uniqid);

		return View::make('frontend.pricing')->with('uniqid', $uniqid);
	}

	public function commission()
	{
		if(Input::has('commission_way') && Input::has('commission_value')){
			Session::put('commission_way', Input::get('commission_way'));
			Session::put('commission_value', Input::get('commission_value'));
		}
	}

	/**
	 * Show the form for creating a new resource.
	 * //http://localhost:8006/subscription/process?tx=2BH9400650863970A&st=Completed&amt=0%2e01&cc=USD&cm=%242y%2410%24%2e7JI0Pb9uU6Yt1Iny2LyeOsdO%2eJjQ7XU%2e4yrlEkKkc2Z1bv3LYZAa&item_number=&sig=jwmhMUMm04hBWNcOPOCl2m6x4GkPrjcPEJGBaQtSpj9mrpMaYS%2baAyk3%2bAXXaXF%2fq1OUdLO0ZSSZz3W40%2bUZxc9%2bzDSUBDXPQlsjuWAZ1sRj%2fNTY2FMtb9BmSjEhbagd98Rv2BEtZlvjHz3bnrfWFoppHSwJMjGczGaf2SukO%2fM%3d
	 * @return Response
	 */
	public function process()
	{
		$uniqid = Session::get('uniqid');



		//tx			16J19853GV4692052
		//st			Completed
		//amt			0.01
		//cc			USD
		//cm			3
		//item_number
		//sig			Jwkz7VQMfO2agz/EtEa0oduLYSV4dxA+RLk7Y4olVIRHgc9VO2oR8Yz4ugH0smsT/cMTPt6Ccaupiaq6Jca4L/dozKxHf0iYCdJ/YQNs7ddMp0oUe44U5UzEFzEj6b7HgKuMte4djUdkXBRLdkYJ1TjtHlTsRKsfzrF+A0WTQdE=

		if ((!Input::has('tx')) || (!Input::has('st')) || (!Input::has('cm')) || (!Input::has('sig'))) {
			return Redirect::route('login')->with('alert', ['type' => 'danger', 'message' => 'Hubo un problema en el pago.']);
		}

		if(Input::get('cm') != $uniqid || Input::get('st') != 'Completed'){

			return Redirect::route('login')->with('alert', ['type' => 'danger', 'message' => 'Hubo un problema en el pago.']);
		}else{
			Session::put('register', $uniqid);
		}

		return Redirect::route('register');
	}

}
