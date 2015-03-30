<?php
use PayPal\Rest\ApiContext;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\ExecutePayment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\Transaction;

class PaypalController extends BaseController
{
	private $_api_context;

	public function __construct()
	{
        // setup PayPal api context
		$paypal_conf = Config::get('paypal');
		$this->_api_context = new ApiContext(new OAuthTokenCredential($paypal_conf['client_id'], $paypal_conf['secret']));
		$this->_api_context->setConfig($paypal_conf['settings']);
	}

	public function postPayment()
	{
		$description = 'Registro ' . Setting::key('app_name')->first()->value;

		if(Input::has('ref')){
			Session::put('ref', Input::get('ref'));
		}

		$payer = new Payer();
		$payer->setPaymentMethod('paypal');

		$item_1 = new Item();
		$item_1->setName($description)
		->setCurrency('USD')
		->setQuantity(1)
		->setPrice(Setting::key('payment_register-cost')->first()->value);


		$item_list = new ItemList();
		$item_list->setItems(array($item_1));

		$amount = new Amount();
		$amount->setCurrency('USD')
		->setTotal(Setting::key('payment_register-cost')->first()->value);

		$transaction = new Transaction();
		$transaction->setAmount($amount)
		->setItemList($item_list)
		->setDescription($description);

		$redirect_urls = new RedirectUrls();
		$redirect_urls->setReturnUrl(URL::route('payment.status'))
		->setCancelUrl(URL::route('payment.status'));

		$payment = new Payment();
		$payment->setIntent('Sale')
		->setPayer($payer)
		->setRedirectUrls($redirect_urls)
		->setTransactions(array($transaction));

		try {
			$payment->create($this->_api_context);
		} catch (\PayPal\Exception\PPConnectionException $ex) {
			if (\Config::get('app.debug')) {
				echo "Exception: " . $ex->getMessage() . PHP_EOL;
				$err_data = json_decode($ex->getData(), true);
				exit;
			} else {
				die('Some error occur, sorry for inconvenient');
			}
		}

		foreach($payment->getLinks() as $link) {
			if($link->getRel() == 'approval_url') {
				$redirect_url = $link->getHref();
				break;
			}
		}

		Session::put('paypal_payment_id', $payment->getId());

		if(isset($redirect_url)) {
			return Redirect::away($redirect_url);
		}

		return Redirect::route('login')
		->with('error', 'Unknown error occurred');
	}

	public function getPaymentStatus()
	{
		$description = 'Registro ' . Setting::key('app_name')->first()->value;
		$payment_id = Session::get('paypal_payment_id');

		//Session::forget('paypal_payment_id');

		if ((!Input::has('PayerID')) || (!Input::has('token'))) {
			return Redirect::route('login')->with('alert', ['type' => 'danger', 'message' => 'Hubo un problema en el pago.']);
		}

		$payment = Payment::get($payment_id, $this->_api_context);

		$execution = new PaymentExecution();
		$execution->setPayerId(Input::get('PayerID'));

		$result = $payment->execute($execution, $this->_api_context);
	    //echo '<pre>';print_r($result);echo '</pre>';exit; // DEBUG RESULT, remove it later
		if ($result->getState() == 'approved') {
			$data = [];
			$data['paymentid'] = $result->id;
			$data['token'] = Input::get('token');
			$data['payerid'] = Input::get('PayerID');
			$data['total'] = Setting::key('payment_register-cost')->first()->value;
			$data['status'] = 'approved';
			$data['description'] = $description;

			if(Session::has('ref')){
				$data['ref_id'] = Session::get('ref');
				Session::forget('ref');
			}


			Session::put('payment', json_encode($data));
			return Redirect::route('register');
		}
	}


	/* SUBSCRIPTION */

	public function payments_subscription()
	{
		$description = 'Subscripción mensual ' . Setting::key('app_name')->first()->value;

		$payer = new Payer();
		$payer->setPaymentMethod('paypal');

		$item_1 = new Item();
		$item_1->setName($description)
		->setCurrency('USD')
		->setQuantity(1)
		->setPrice(Setting::key('payment_subscription-cost')->first()->value);


		$item_list = new ItemList();
		$item_list->setItems(array($item_1));

		$amount = new Amount();
		$amount->setCurrency('USD')
		->setTotal(Setting::key('payment_subscription-cost')->first()->value);

		$transaction = new Transaction();
		$transaction->setAmount($amount)
		->setItemList($item_list)
		->setDescription($description);

		$redirect_urls = new RedirectUrls();
		$redirect_urls->setReturnUrl(URL::route('payment.subscription.status'))
		->setCancelUrl(URL::route('payment.subscription.status'));

		$payment = new Payment();
		$payment->setIntent('Sale')
		->setPayer($payer)
		->setRedirectUrls($redirect_urls)
		->setTransactions(array($transaction));

		try {
			$payment->create($this->_api_context);
		} catch (\PayPal\Exception\PPConnectionException $ex) {
			if (\Config::get('app.debug')) {
				echo "Exception: " . $ex->getMessage() . PHP_EOL;
				$err_data = json_decode($ex->getData(), true);
				exit;
			} else {
				die('Some error occur, sorry for inconvenient');
			}
		}

		foreach($payment->getLinks() as $link) {
			if($link->getRel() == 'approval_url') {
				$redirect_url = $link->getHref();
				break;
			}
		}

		Session::put('paypal_payment_id', $payment->getId());

		if(isset($redirect_url)) {
			return Redirect::away($redirect_url);
		}

		return Redirect::route('login')
		->with('error', 'Unknown error occurred');
	}




	public function payments_subscription_status()
	{
		$description = 'Subscripción mensual ' . Setting::key('app_name')->first()->value;
		$payment_id = Session::get('paypal_payment_id');

		//Session::forget('paypal_payment_id');

		if ((!Input::has('PayerID')) || (!Input::has('token'))) {
			$data = [];
			$data['token'] = Input::get('token');
			$data['total'] = Setting::key('payment_subscription-cost')->first()->value;
			$data['status'] = 'canceled';
			$data['description'] = $description;
			$data['commission'] = Setting::key('payment_subscription-commission')->first()->value;

			$data['user_id'] = Auth::user()->id;
			$data['ip'] = Request::getClientIp();

			$p = new \Payment($data);

			if($p->save()){
				$alert = ['type' => 'warning', 'message' => 'El pago fue cancelado por el usuario.'];
			}else{
				$alert = ['type' => 'danger', 'message' => 'Ocurrio un error en el pago.'];
			}

			return Redirect::route('payments')->with('alert', $alert);
		}

		$payment = Payment::get($payment_id, $this->_api_context);

		$execution = new PaymentExecution();
		$execution->setPayerId(Input::get('PayerID'));

		$result = $payment->execute($execution, $this->_api_context);
	    //echo '<pre>';print_r($result);echo '</pre>';exit; // DEBUG RESULT, remove it later
		if ($result->getState() == 'approved') {
			$data = [];
			$data['paymentid'] = $result->id;
			$data['token'] = Input::get('token');
			$data['payerid'] = Input::get('PayerID');
			$data['total'] = Setting::key('payment_subscription-cost')->first()->value;
			$data['status'] = 'approved';
			$data['description'] = $description;

			$data['user_id'] = Auth::user()->id;
			$data['ip'] = Request::getClientIp();

			$p = new \Payment($data);

			if($p->save()){
				Auth::user()->renewSubscription();
				$alert = ['type' => 'success', 'message' => 'La subscripción ha sido actualizada.'];
			}else{
				$alert = ['type' => 'danger', 'message' => 'Ocurrio un error en el pago.'];
			}

			return Redirect::route('payments')->with('alert', $alert);
		}
	}
}

/*

$plan = new Plan();
		$plan->setName($description)
		->setDescription($description)
		->setType('fixed');

		$paymentDefinition = new PaymentDefinition();

		$paymentDefinition->setName('Mensualidad')
		->setType('REGULAR')
		->setFrequency('Month')
		->setFrequencyInterval("1")
		->setCycles("12")
		->setAmount(new Currency(array('value' => Setting::key('payment_subscription-cost')->first()->value, 'currency' => 'USD')));


		$merchantPreferences = new MerchantPreferences();


		$merchantPreferences->setReturnUrl(URL::route('payment.subscription.status'))
		->setCancelUrl(URL::route('payment.subscription.status'))
		->setAutoBillAmount("yes")
		->setInitialFailAmountAction("CONTINUE")
		->setMaxFailAttempts("0");


		$plan->setPaymentDefinitions(array($paymentDefinition));
		$plan->setMerchantPreferences($merchantPreferences);

		$request = clone $plan;

		try {
			$output = $plan->create($this->_api_context);
		} catch (Exception $ex) {
			//ResultPrinter::printError("Created Plan", "Plan", null, $request, $ex);
			exit(1);
		}

		echo $request;

		return $output;



















		$agreement = new Agreement();

		$agreement->setName('Base Agreement')
		->setDescription('Basic Agreement')
		->setStartDate('2015-06-17T9:45:04Z');

		$plan = new Plan();
		$plan->setId("P-05B97065EM4414440ES3TRQQ");
		$agreement->setPlan($plan);

		$payer = new Payer();
		$payer->setPaymentMethod('paypal');
		$agreement->setPayer($payer);


		$request = clone $agreement;



		$agreement = $agreement->create($this->_api_context);



		$approvalUrl = $agreement->getApprovalLink();

		echo $request;

		return $agreement;










		$plan = new Plan();
		$plan->setName("Mensualidad")
		->setDescription($description)
		->setType('fixed');

		$paymentDefinition = new PaymentDefinition();

		$paymentDefinition->setName('Mensualidad')
		->setType('REGULAR')
		->setFrequency('Month')
		->setFrequencyInterval("1")
		->setCycles("12")
		->setAmount(new Currency(array('value' => Setting::key('payment_subscription-cost')->first()->value, 'currency' => 'USD')));


		$plan->setPaymentDefinitions(array($paymentDefinition));


*/