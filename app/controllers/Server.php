<?php

class Server extends BaseController {

	public function deploy($intent = 0) {

		try{
			SSH::into('production')->run(array(
				'cd /home/dineroysalud/public_html/',
				'git pull origin master',
				), function($line){

				if(Input::has('token')){
					echo nl2br($line.PHP_EOL);
				}else{
					return View::make('deploy.index')->with('code', nl2br($line.PHP_EOL));
				}
			});
		}catch(Exception $e){
			return View::make('deploy.index'));
		}

	}

}