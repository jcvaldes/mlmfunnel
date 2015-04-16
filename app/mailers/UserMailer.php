<?php namespace Funnel\Mailers;

use User;

class UserMailer extends Mailer{

    public function welcometest(User $user)
    {
        $view = 'emails.notify.layout';
        $subject = 'Welcome';
        $data = [];

        return $this->sendTo($user, $subejct, $view, $data);
    }

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