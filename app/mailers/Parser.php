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

}