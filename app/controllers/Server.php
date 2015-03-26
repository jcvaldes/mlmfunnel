<?php

class Server extends BaseController {

	public function deploy() {

		try{
			SSH::into('production')->run(array(
				'cd /home/dineroysalud/public_html/',
				'git pull origin master',
				), function($line){
				echo nl2br($line.PHP_EOL);
			});
		}catch(Exception $e){
			$this->deploy();
		}

	}

}