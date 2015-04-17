<?php namespace Funnel\Mailers;

use User;

class UserMailer extends Mailer{
    private $layout = 'emails.notify.layout';

    public function welcome(User $user)
    {
        $key = 'user-register';

        $title = Parser::title($user, $key);
        $body = Parser::body($user, $key);

        $data = ['title' => $title, 'body' => $body, 'id' => $user->id];

        return $this->sendTo($user, $title, $this->layout, $data);
    }

    public function nextSuspension(User $user)
    {
        $key = 'next-suspension';

        $title = Parser::title($user, $key);
        $body = Parser::body($user, $key);

        $data = ['title' => $title, 'body' => $body, 'id' => $user->id];

        return $this->sendTo($user, $title, $this->layout, $data);
    }



}