<?php

class Server extends BaseController {

	public function deploy($intent = 0) {
		return View::make('deploy.index');
		//try{
			SSH::into('production')->run(array(
				'cd /home/dineroysalud/public_html/',
				'git pull origin master',
				), function($line){



						});
		/*}catch(Exception $e){
			$intent = $intent +1;
			echo "Reintento #" . $intent . "<br>";
			$this->deploy($intent);
		}*/

	}

}