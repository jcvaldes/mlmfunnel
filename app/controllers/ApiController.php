<?php
use Carbon\Carbon;
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

                        $dt = Carbon::now()->subMonth();
                        $delta = ($dt->diffInDays($payment->created_at, false));

                        if($delta <= 0){
                           $payment->status_pay = 'to_pay';
                        }

                        //if($payment->status_pay == 'pending'){
                            $commission = $commission + $payment->commission;
                        //}
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
    // mark paid from ajax call
    public function paid($id)
    {
        $payment = Payment::find($id);
        $payment->paid();
    }

    // Register

    public function payment_register(){
        $json = Input::json()->all();

    $_CUSTOM = json_decode($json['custom'], true);

    $p = Payment::where('type', 'subscr_signup')->where('user_uniqid', $_CUSTOM['id'])->first();
        if(isset($p)){
        $json['error'] = "duplicado register";
        Log::info($json);
            return json_encode(["duplicado register"]);
        }

        Log::info($json);


        $data = [];
        $data['type'] = 'subscr_signup';

        $data['subscription_id'] =  $json['subscr_id'];
        $data['payment_date'] =     $json['subscr_date'];
        $data['ipn_track_id'] =     $json['ipn_track_id'];
        $data['verify_sign'] =      $json['verify_sign'];
        $data['user_uniqid'] =      $_CUSTOM['id'];

        $data['payerid'] =          $json['payer_id'];
        $data['payer_name'] =       $json['first_name'] . " " . $json['last_name'];
        $data['payer_email'] =      $json['payer_email'];
        $data['receiver_email'] =   $json['receiver_email'];

        $data['description'] =      'Registro ' . Setting::key('app_name')->first()->value;
        $data['total'] =            $json['mc_amount1'];

        $data['status'] = 'approved';
        $data['ip'] = Request::getClientIp();

        $data['commission'] = Setting::key('payment_register-commission')->first()->value;

        $u = User::uniqid($data['user_uniqid'])->first();

        if($u){
            $data['commission'] = $u->getCommissionR($data['total']);
        }

        $anypayment = new Payment($data);
        if($anypayment->save()){
            return json_encode(["saved register"]);
        }else{
            return json_encode(["error register"]);
        }
    }
    //Subscription
    public function payment_subscription(){
    $json = Input::json()->all();

        $p = Payment::where('type', 'subscr_payment')->txn($json['txn_id'])->first();
        if(isset($p)){
            $json['error'] = "duplicado subscription";
            Log::info($json);
            return json_encode(["duplicado subscription"]);
        }

        Log::info($json);

        $_CUSTOM = json_decode($json['custom'], true);

        $data = [];

        $data['type'] = 'subscr_payment';

        $data['subscription_id'] =  $json['subscr_id'];
        $data['payment_date'] =     $json['payment_date'];
        $data['ipn_track_id'] =     $json['ipn_track_id'];
        $data['verify_sign'] =      $json['verify_sign'];
        $data['txn_id'] =           $json['txn_id'];
        $data['user_uniqid'] =      $_CUSTOM['id'];

        $data['payerid'] =          $json['payer_id'];
        $data['payer_name'] =       $json['first_name'] . " " . $json['last_name'];
        $data['payer_email'] =      $json['payer_email'];
        $data['receiver_email'] =      $json['receiver_email'];

        $data['description'] =      $json['item_name'];
        $data['total'] =            $json['mc_gross'];

        $data['status'] = 'approved';
        $data['ip'] = Request::getClientIp();
        $data['commission'] = Setting::key('payment_subscription-commission')->first()->value;

        $u = User::uniqid($data['user_uniqid'])->first();

        if($u){
            $data['commission'] = $u->getCommissionS($data['total']);

            $anypayment = new Payment($data);
            if($anypayment->save()){

                $user = User::where('uniqid', $data['user_uniqid'])->first();
                if($user){
                    $user->renewSubscription();
                }else{
                }
        return json_encode(["saved subscription"]);
            }else{
        return json_encode(["error subscription"]);
            }
        }
    }
}
