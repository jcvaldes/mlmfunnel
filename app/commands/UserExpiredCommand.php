<?php

use Indatus\Dispatcher\Scheduling\ScheduledCommand;
use Indatus\Dispatcher\Scheduling\Schedulable;
use Indatus\Dispatcher\Drivers\Cron\Scheduler;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class UserExpiredCommand extends ScheduledCommand {

	/**
	 * The console command name.
	 *
	 * @var string
	 */
	protected $name = 'user:expired';

	/**
	 * The console command description.
	 *
	 * @var string
	 */
	protected $description = 'Suspend users when expire.';

	/**
	 * Create a new command instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * When a command should run
	 *
	 * @param Scheduler $scheduler
	 * @return \Indatus\Dispatcher\Scheduling\Schedulable
	 */
	public function schedule(Schedulable $scheduler)
	{
		return $scheduler
            ->daily()
            ->hours(0)
            ->minutes(1);
	}

	/**
	 * Execute the console command.
	 *
	 * @return mixed
	 */ 
	public function fire()
	{				
		$body = "";	
		/* BELATED */
		$this->info('Working on belated\'s users.');
		$users = User::belated()->get();
		$body.="<h3>".count($users)." Atrasados</h3>";
		foreach ($users as $key => $user) {
			$body.= $user->full_name . " | " . $user->email." | ". $user->phone ."<hr>";
			$user->setStatus('belated');
		}

		$this->info(count($users)." user(s) belated.'");

		/* SUSPENDED */		
		$this->info('Working on suspended\'s users.');
		$users = User::suspended()->get();
		$body.="<h3>".count($users)." Suspendidos</h3>";
		foreach ($users as $key => $user) {
			$body.= $user->full_name . " | " . $user->email." | ". $user->phone ."<hr>";
			$user->setStatus('suspended');
		}

		$this->info(count($users)." user(s) suspended.'");
		/* INACTIVE */

		$this->info('Working on inactive\'s users.');
		$users = User::suspended()->get();
		$body.="<h3>".count($users)." Inactivos</h3>";
		foreach ($users as $key => $user) {
			$body.= $user->full_name . " | " . $user->email." | ". $user->phone ."<hr>";
			$user->setStatus('inactive');
		}

		$this->info(count($users)." user(s) inactive.'");

		/* NOTIFY */

		$data = ['title' => "Users on ".date("d/m/Y"), 'body' => $body, 'id' => "ielijose"];
		try{
			Mail::queue('emails.notify.layout', $data, function($message) use ($user, $title)
			{
				$message->from(Setting::key('app_mail')->first()->value, Setting::key('app_name')->first()->value);
				$message->to("ielijose@gmail.com", "Eli José Carrasquero")->subject($title);
			});
			$this->info("Mail sended.");
		}catch(Exception $e){
			$this->info("Error on mail.");
		}
	}

	/**
	 * Get the console command arguments.
	 *
	 * @return array
	 */
	protected function getArguments()
	{
		return array(
			//array('example', InputArgument::REQUIRED, 'An example argument.'),
		);
	}

	/**
	 * Get the console command options.
	 *
	 * @return array
	 */
	protected function getOptions()
	{
		return array(
			//array('example', null, InputOption::VALUE_OPTIONAL, 'An example option.', null),
		);
	}

}
