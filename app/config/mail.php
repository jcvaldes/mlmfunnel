<?php
return array(
	'driver' => 'sendmail',
	'host' => 'smtp.gmail.com',
	'port' => 465,
	'from' => array('address' => Setting::key('app_mail')->first()->value, 'name' => Setting::key('app_name')->first()->value),
	'encryption' => 'ssl',

	'username' => 'mailerservice2015@gmail.com',
	'password' => '24436525',
	'sendmail' => '/usr/sbin/sendmail -bs',
	'pretend' => false,
);
/* 
 return array(
	'driver' => 'smtp',
	'host' => 'smtp.sendgrid.net',
	'port' => 587,
	'from' => array('address' => Setting::key('app_mail')->first()->value, 'name' => Setting::key('app_name')->first()->value),
	'encryption' => 'tls',
	'username' => 'ielijose',
	'password' => '2512368eli',
);*/