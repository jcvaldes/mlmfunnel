<?php namespace Funnel\Mailers;

use User;

class ProspectMailer extends Mailer{

    public function welcome(Prospect $prospect)
    {
        $view = 'emails.notify.layout';
        $key = 'user-register';

        $title = Parser::title($prospect, $key);
        $body = Parser::body($prospect, $key);

        $data = ['title' => $title, 'body' => $body, 'id' => $prospect->id];

        return $this->sendToProspect($prospect, $title, $view, $data);
    }

}