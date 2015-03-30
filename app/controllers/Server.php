<?php

class Server extends BaseController {

	private $view = false;
	private $code = "";

	public function deploy($intent = 0) {
		try{

			SSH::into('production')->run(array(
				'cd /home/dineroysalud/public_html/',
				'git pull origin master',
				), function($line){
					$this->code .= nl2br($line.PHP_EOL);
			});

		}catch(Exception $e){
			$intent = $intent +1;
			$this->code .= "Connection closed by server, retrying #" . $intent . "<br>";
			$this->deploy($intent);
		}

		if(Input::has('token')){
			return $this->code;
		}else{
			return View::make('deploy.index')->with('code', $this->code);
		}
	}
}