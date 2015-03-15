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
				$alert = ['type' => 'success', 'message' => 'La subscripción ha sido actualizada.'];
			}else{
				$alert = ['type' => 'danger', 'message' => 'Ocurrio un error en el pago.'];
			}

			return Redirect::route('payments')->with('alert', $alert);
		}
	}
}