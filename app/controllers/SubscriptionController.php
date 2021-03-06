<?php

class SubscriptionController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function prepare($code = false)
	{
		if(Input::has('ref')){
			Session::put('ref', Input::get('ref'));
		}

		$p = [
			'register' => Setting::key('payment_register-cost')->first()->value,
			'subscription' => Setting::key('payment_subscription-cost')->first()->value,
			'cada' => 'mes',

			'p3' => 1,
			't3' => 'M'
		];

		if($code){
			$offer = Offer::where('code', $code)->first();

			if($offer){
				$p['register'] = $offer->register;
				$p['subscription'] = $offer->subscription;

				if($offer->type == 'threemonth'){
					$p['cada'] = 'tres meses';

					$p['p3'] = 3;
					$p['t3'] = 'M';
				}else if($offer->type == 'sixmonth'){
					$p['cada'] = 'seis meses';

					$p['p3'] = 6;
					$p['t3'] = 'M';
				}else if($offer->type == 'yearly'){
					$p['cada'] = 'año';

					$p['p3'] = 1;
					$p['t3'] = 'Y';
				}

			}

		}

		$uniqid = Hash::make(uniqid());
		Session::put('uniqid', $uniqid);

		return View::make('frontend.pricing', compact('uniqid', 'p'));
	}

	public function commission()
	{
		if(Input::has('cr_way') && Input::has('cr_value')){
			Session::put('cr_way', Input::get('cr_way'));
			Session::put('cr_value', Input::get('cr_value'));
		}

		if(Input::has('cs_way') && Input::has('cs_value')){
			Session::put('cs_way', Input::get('cs_way'));
			Session::put('cs_value', Input::get('cs_value'));
		}
	}

	/**
	 * Show the form for creating a new resource.
	 * //http://localhost:8006/subscription/process?tx=2BH9400650863970A&st=Completed&amt=0%2e01&cc=USD&cm=%242y%2410%24%2e7JI0Pb9uU6Yt1Iny2LyeOsdO%2eJjQ7XU%2e4yrlEkKkc2Z1bv3LYZAa&item_number=&sig=jwmhMUMm04hBWNcOPOCl2m6x4GkPrjcPEJGBaQtSpj9mrpMaYS%2baAyk3%2bAXXaXF%2fq1OUdLO0ZSSZz3W40%2bUZxc9%2bzDSUBDXPQlsjuWAZ1sRj%2fNTY2FMtb9BmSjEhbagd98Rv2BEtZlvjHz3bnrfWFoppHSwJMjGczGaf2SukO%2fM%3d
	 * @return Response
	 */
	public function process()
	{

		if(!Input::has('txn_type')){
			return Redirect::to('/');
		}

	//dd(Input::all());
		$uniqid = Session::get('uniqid');

		//dd(Input::all());

		//tx			16J19853GV4692052
		//st			Completed
		//amt			0.01
		//cc			USD
		//cm			3
		//item_number
		//sig			Jwkz7VQMfO2agz/EtEa0oduLYSV4dxA+RLk7Y4olVIRHgc9VO2oR8Yz4ugH0smsT/cMTPt6Ccaupiaq6Jca4L/dozKxHf0iYCdJ/YQNs7ddMp0oUe44U5UzEFzEj6b7HgKuMte4djUdkXBRLdkYJ1TjtHlTsRKsfzrF+A0WTQdE=

		/*if ((!Input::has('tx')) || (!Input::has('st')) || (!Input::has('cm')) || (!Input::has('sig'))) {
			return Redirect::route('login')->with('alert', ['type' => 'danger', 'message' => 'Hubo un problema en el pago.']);
		}

		if(Input::get('cm') != $uniqid || Input::get('st') != 'Completed'){

			return Redirect::route('login')->with('alert', ['type' => 'danger', 'message' => 'Hubo un problema en el pago.']);
		}else{*/
			Session::put('register', $uniqid);
		//}

		if(Auth::user()){
			Auth::logout();
		}


		return Redirect::route('register');
	}

}
