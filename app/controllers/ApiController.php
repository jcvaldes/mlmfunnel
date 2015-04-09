<?php
class ApiController extends BaseController
{

    public function prospect($id) {
        $prospect = Prospect::findOrFail($id);
        return $prospect->toJson();
    }

    public function prospect_edit($id) {
        $inputs = Input::all();

        //echo json_encode($inputs); exit;
        $prospect = Prospect::findOrFail($id);
        $prospect->fill($inputs);
        if ($prospect->save()) {
            $prospect->error = false;
            $prospect->message = "Datos guardados con exito.";
            return $prospect->toJson();
        }
        else {
            return json_encode(["error" => true, "message" => "Ocurrio un error."]);
        }
    }

    public function prospect_delete($id) {

        if (Prospect::destroy($id)) {
            return json_encode(["error" => false, "message" => "Prospecto eliminado."]);
        }
        else {
            return json_encode(["error" => true, "message" => "Ocurrio un error."]);
        }
    }

    /* Referers */

    public function referers() {
        header('Access-Control-Allow-Origin: *');
        $userss = DB::table('users')->select('ref_id')->groupBy('ref_id')->where('ref_id', '<>', '')

        //->whereBetween('created_at', array($start, $end))
        ->get();
        $data = [];
        foreach ($userss as $key => $u) {

            $users = User::where('ref_id', $u->ref_id)->get();

            if (isset($users)) {
                $list = [];
                if ($users->count() > 0) {
                    foreach ($users as $key => $user) {
                        array_push($list, ['name' => $user->full_name, 'phone' => $user->phone, 'email' => $user->email, 'created_at' => $user->getCreatedAt() ]);
                    }
                    array_push($data, ['id' => $user->ref_id, 'count' => $users->count(), 'list' => $list]);
                }
            }
        }

        return json_encode($data);
    }

    public function referer($id) {
        header('Access-Control-Allow-Origin: *');

        $users = User::where('ref_id', $id)->get();

        if (isset($users)) {
            $list = [];
            $commission = 0;
            if ($users->count() > 0) {
                foreach ($users as $key => $user) {
                    $payments = $user->getPayments();

                    foreach ($payments as $key => $payment) {
                        $payment->created_at_format = $payment->created_at->format('d/m/Y');
                        $commission = $commission + $payment->commission;
                        unset($payment->created_at);
                    }
                    array_push($list, ['name' => $user->full_name, 'phone' => $user->phone, 'email' => $user->email, 'created_at' => $user->getCreatedAt(), 'payments' => $payments]);
                }
            }
            return json_encode(['id' => $id, 'count' => $users->count(), 'list' => $list, 'commission' => $commission]);
        }
        else {
            return json_encode(['id' => $id, 'count' => 0]);
        }
    }

    /* IPN */

    public function ipn() {
        define("DEBUG", 1);
        define("USE_SANDBOX", 0);
        define("LOG_FILE", "./ipn.log");

        $raw_post_data = file_get_contents('php://input');
        $raw_post_array = explode('&', $raw_post_data);
        $myPost = array();
        foreach ($raw_post_array as $keyval) {
            $keyval = explode('=', $keyval);
            if (count($keyval) == 2) $myPost[$keyval[0]] = urldecode($keyval[1]);
        }

        // read the post from PayPal system and add 'cmd'
        $req = 'cmd=_notify-validate';
        if (function_exists('get_magic_quotes_gpc')) {
            $get_magic_quotes_exists = true;
        }
        foreach ($myPost as $key => $value) {
            if ($get_magic_quotes_exists == true && get_magic_quotes_gpc() == 1) {
                $value = urlencode(stripslashes($value));
            }
            else {
                $value = urlencode($value);
            }
            $req.= "&$key=$value";
        }

        if (USE_SANDBOX == true) {
            $paypal_url = "https://www.sandbox.paypal.com/cgi-bin/webscr";
        }
        else {
            $paypal_url = "https://www.paypal.com/cgi-bin/webscr";
        }
        $ch = curl_init($paypal_url);
        if ($ch == FALSE) {
            return FALSE;
        }
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($ch, CURLOPT_FORBID_REUSE, 1);
        if (DEBUG == true) {
            curl_setopt($ch, CURLOPT_HEADER, 1);
            curl_setopt($ch, CURLINFO_HEADER_OUT, 1);
        }

        // CONFIG: Optional proxy configuration
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Connection: Close'));

        $res = curl_exec($ch);
        if (curl_errno($ch) != 0)
        {
            if (DEBUG == true) {
                error_log(date('[Y-m-d H:i e] ') . "Can't connect to PayPal to validate IPN message: " . curl_error($ch) . PHP_EOL . "\n", 3, LOG_FILE);
            }
            curl_close($ch);
            exit;
        }
        else {

            // Log the entire HTTP response if debug is switched on.
            if (DEBUG == true) {
                //error_log(date('[Y-m-d H:i e] ') . "HTTP request of validation request:" . curl_getinfo($ch, CURLINFO_HEADER_OUT) . " for IPN payload: $req" . PHP_EOL, 3, LOG_FILE);
                //error_log(date('[Y-m-d H:i e] ') . "HTTP response of validation request: $res" . PHP_EOL, 3, LOG_FILE);
            }
            curl_close($ch);
        }

        // Inspect IPN validation result and act accordingly
        $tokens = explode("\r\n\r\n", trim($res));
        $res = trim(end($tokens));
        if (strcmp($res, "VERIFIED") == 0) {

            // check whether the payment_status is Completed
            // check that txn_id has not been previously processed
            // check that receiver_email is your PayPal email
            // check that payment_amount/payment_currency are correct
            // process payment and mark item as paid.
            // assign posted variables to local variables
            //$item_name = $_POST['item_name'];
            //$item_number = $_POST['item_number'];
            //$payment_status = $_POST['payment_status'];
            //$payment_amount = $_POST['mc_gross'];
            //$payment_currency = $_POST['mc_currency'];
            //$txn_id = $_POST['txn_id'];
            //$receiver_email = $_POST['receiver_email'];
            //$payer_email = $_POST['payer_email'];





            if (DEBUG == true) {
            	$debug_export = var_export($_POST, true);
                //error_log(date('[Y-m-d H:i e] ') . "Verified IPN: $req " . PHP_EOL, 3, LOG_FILE);
                error_log(date('[Y-m-d H:i e] ') . "Print POST " . $debug_export .PHP_EOL, 3, LOG_FILE);

            }
        }
        else if (strcmp($res, "INVALID") == 0) {

            // log for manual investigation
            // Add business logic here which deals with invalid IPN messages
            if (DEBUG == true) {
                error_log(date('[Y-m-d H:i e] ') . "Invalid IPN: $req" . PHP_EOL, 3, LOG_FILE);
            }
        }
    }


    public function ipn_delete() {
        define("LOG_FILE", "./ipn.log");
        unlink(LOG_FILE);
    }
}
