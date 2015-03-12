<?php

class Server extends BaseController {

	public function deploy() {

		SSH::into('production')->run(array(
			'cd /home/dineroysalud/public_html/',
			'git pull origin master'
		), function($line){
			echo $line.PHP_EOL;
		});
		
	}

}