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

		//$uniqid = '$2y$10$.7JI0Pb9uU6Yt1Iny2LyeOsdO.JjQ7XU.4yrlEkKkc2Z1bv3LYZAa';
		Session::put('uniqid', $uniqid);

		return View::make('frontend.pricing')->with('uniqid', $uniqid);
	}


	/**
	 * Show the form for creating a new resource.
	 *
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


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//http://localhost:8006/subscription/process?tx=2BH9400650863970A&st=Completed&amt=0%2e01&cc=USD&cm=%242y%2410%24%2e7JI0Pb9uU6Yt1Iny2LyeOsdO%2eJjQ7XU%2e4yrlEkKkc2Z1bv3LYZAa&item_number=&sig=jwmhMUMm04hBWNcOPOCl2m6x4GkPrjcPEJGBaQtSpj9mrpMaYS%2baAyk3%2bAXXaXF%2fq1OUdLO0ZSSZz3W40%2bUZxc9%2bzDSUBDXPQlsjuWAZ1sRj%2fNTY2FMtb9BmSjEhbagd98Rv2BEtZlvjHz3bnrfWFoppHSwJMjGczGaf2SukO%2fM%3d
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
