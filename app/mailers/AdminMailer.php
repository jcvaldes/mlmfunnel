<?php namespace Funnel\Mailers;

use User;

class AdminMailer extends Mailer{

    public function welcome(User $user)
    {
        $view = 'emails.notify.layout';
        $key = 'user-register';

        $title = Parser::title($user, $key);
        $body = Parser::body($user, $key);

        $data = ['title' => $title, 'body' => $body, 'id' => $user->id];

        return $this->sendTo($user, $title, $view, $data);
    }

}