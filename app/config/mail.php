<?php

return array(
	'driver' => 'smtp',
	'host' => 'smtp.sendgrid.net',
	'port' => 587,
	'from' => array('address' => Setting::key('app_mail')->first()->value, 'name' => Setting::key('app_name')->first()->value),
	'encryption' => 'tls',
	'username' => 'ielijose',
	'password' => '2512368eli',
);