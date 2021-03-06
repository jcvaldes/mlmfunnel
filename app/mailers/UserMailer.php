<?php namespace Funnel\Mailers;

use User;

class UserMailer extends Mailer{

    public function welcome(User $user)
    {
        $key = 'user-register';
        $this->sendByKey($user, $key);
        $this->adminNewUser($user);
    }

    public function nextSuspension(User $user)
    {
        $key = 'next-suspension';
        return $this->sendByKey($user, $key);
    }

    public function suspension(User $user)
    {
        $key = 'suspension';
        return $this->sendByKey($user, $key);
    }

    public function nextDeactivation(User $user)
    {
        $key = 'next-deactivation';
        return $this->sendByKey($user, $key);
    }

    public function deactivation(User $user)
    {
        $key = 'deactivation';
        return $this->sendByKey($user, $key);
    }

    public function reactivation(User $user)
    {
        $key = 'reactivation';
        return $this->sendByKey($user, $key);
    }

    public function newProspect(User $user)
    {
        $key = 'new-prospect';
        return $this->sendByKey($user, $key);
    }

}