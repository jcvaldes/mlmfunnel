<?php

class Server extends BaseController {

	public function deploy() {

		try{
			SSH::into('production')->run(array(
				'cd /home/dineroysalud/public_html/',
				'git pull origin master',
				'php composer.phar update'
				), function($line){
				echo nl2br($line.PHP_EOL);
			});
		}catch(Exception $e){
			$i = (Input::has('intent')) ? Input::get('intent') : 0;
			$i++;
			echo "<script>location.href = '/deploy?intent=".$i."';</script>";
		}		
		
	}

}