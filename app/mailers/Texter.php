<?php namespace Funnel\Mailers;

use Heywire;
use Clickatell;
use User;
use Setting;

abstract class Texter {

    public function sendTo($text, $phone)
    {
        if(Setting::key('sms_way')->first()->value == 'clickatell'){
            Clickatell::send($text, $phone);
        }else if(Setting::key('sms_way')->first()->value == 'heywire'){
            Heywire::text($phone, $text);
        }
    }

    public function sendByKey(User $user, $key){
        if($user->notif_phone == 0)
            return;

        $text = Parser::text($user, $key);

        return $this->sendTo($text, $user->phone);
    }
}