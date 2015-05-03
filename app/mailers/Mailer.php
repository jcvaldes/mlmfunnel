<?php namespace Funnel\Mailers;

use Mail;
use User;

abstract class Mailer {
    private $layout = 'emails.notify.layout';

    public function sendTo($user, $subject, $view, $data = [])
    {
        Mail::queue($view, $data, function($message) use($user, $subject)
        {
            $message->to($user->email)
                    ->subject($subject);
        });
    }

    public function sendByKey(User $user, $key){
        if((isset($user->notif_email)) && ($user->notif_email == 0)){            
            return;
        }
            

        $title = Parser::title($user, $key);
        $body = Parser::body($user, $key);

        $data = ['title' => $title, 'body' => $body, 'id' => $user->id];

        return $this->sendTo($user, $title, $this->layout, $data);
    }
}