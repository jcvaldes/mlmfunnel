<?php

class Server extends BaseController {

    private $view = false;
    private $code = "";
    private $cd = "/home/dineroysalud/public_html/";

    public function deploy($intent = 0) {
		return $this->run(array('cd '.$this->cd, 'git pull origin master'));
	}

	public function deploy_migrate() {
		return $this->run(array('cd '.$this->cd, 'git pull origin master', 'php artisan migrate --force'));
	}

	public function deploy_migrate_rollback() {
		return $this->run(array('cd '.$this->cd, 'git pull origin master', 'php artisan migrate:rollback --force'));
	}

	public function deploy_dump_autoload() {
		return $this->run(array('cd '.$this->cd, 'git pull origin master', 'php artisan dump-autoload'));
	}

    public function run($commands, $intent = 0) {
        try{
            SSH::into('production')->run($commands, function($line){
                $this->code .= nl2br($line.PHP_EOL);
            });
        }catch(Exception $e){
            $intent = $intent +1;
            $this->code .= "Connection closed by server, retrying #" . $intent . "<br>";
            $this->run($commands, $intent);
        }

        if(Input::has('token')){
            return $this->code;
        }else{
        	echo $this->code;
            return View::make('deploy.index')->with('code', $this->code);
        }
    }

}