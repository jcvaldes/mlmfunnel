<?php
return array(
	'driver' => 'smtp',
	'host' => 'smtp.gmail.com',
	'port' => 587,
	'from' => array('address' => Setting::key('app_mail')->first()->value, 'name' => Setting::key('app_name')->first()->value),
	'encryption' => 'tls',
	'username' => 'mailerservice2015@gmail.com',
	'password' => '24436525',
	'sendmail' => '/usr/sbin/sendmail -bs',
	'pretend' => false,
);