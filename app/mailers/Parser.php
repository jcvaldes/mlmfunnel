<?php namespace Funnel\Mailers;

use User;
use Setting;

class Parser {

    static function parse(User $user, $string, $br = false)
    {
        $string = str_replace('%name%', $user->full_name, $string);
        $string = str_replace('%email%', $user->email, $string);
        $string = str_replace('%phone%', $user->phone, $string);
        $string = str_replace('%url%', Setting::key('app_url')->first()->value, $string);
        $string = str_replace('%system%', Setting::key('app_name')->first()->value, $string);
        //$string = str_replace('%landing%', $user->getLandingName());

        if($br)
            $string = nl2br($string);

        return $string;
    }

    static function title(User $user, $key)
    {
        $title = Setting::key($key.':title')->first()->value;
        return Parser::parse($user, $title);
    }

    static function body(User $user, $key)
    {
        $body = Setting::key($key.':body')->first()->value;
        return Parser::parse($user, $body, true);
    }

    static function text(User $user, $key)
    {
        $text = Setting::key($key.':text')->first()->value;
        return Parser::parse($user, $text, true);
    }

    /* Page title */

    static function pageTitle($key)
    {
        $title = '';

        switch ($key) {
            case 'admin-new-user':
                $title = 'Nuevo usuario';
                break;
            case 'user-register':
                $title = 'Al registrarse';
                break;
            case 'next-suspension':
                $title = 'Proxima suspensión';
                break;
            case 'suspension':
                $title = 'Suspensión';
                break;
            case 'next-deactivation':
                $title = 'Proxima desactivación';
                break;
            case 'deactivation':
                $title = 'Desactivación';
                break;
            case 'reactivation':
                $title = 'Reactivación';
                break;
            case 'new-prospect':
                $title = 'Nuevo Prospecto';
                break;
            case 'prospect-confirm':
                $title = 'Confirmación';
                break;
        }
        return $title;
    }

}