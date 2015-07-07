<?php
use Indatus\Dispatcher\Scheduling\ScheduledCommand;
use Indatus\Dispatcher\Scheduling\Schedulable;
use Indatus\Dispatcher\Drivers\Cron\Scheduler;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;

class DatabaseBackupCommand extends ScheduledCommand
{

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'database:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backup database and send to email.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * When a command should run
     *
     * @param Scheduler $scheduler
     * @return \Indatus\Dispatcher\Scheduling\Schedulable
     */
    public function schedule(Schedulable $scheduler) {
        return $scheduler->daily();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function fire() {

        /* Database Backup */

        $database = Config::get('database') ['connections'][Config::get('database.default') ]['database'];

        $filename = "app/storage/dumps/" . $database . "_" . date('Y-m-d-H-i-s') . ".sql";
        Artisan::call("db:backup", ["filename" => $filename]);

        $files = File::files('../storage/dumps');

        if (count($files)) {
            $db = $files[count($files) - 1];
        }

        $title = " Respaldo base de datos (" . Setting::key('app_name')->first()->value . ") [" . date('Y-m-d-H-i-s') . "]";
        try {
            Mail::queue('emails.notify.layout', ['title' => $title, 'body' => ''], function ($message) use ($title, $db) {
                $message->from(Setting::key('app_mail')->first()->value, Setting::key('app_name')->first()->value);
                $message->to("rolo27281@gmail.com", "Rolando Rodas")->subject($title);
                $message->to("ielijose@gmail.com", "Eli JosÃ© Carrasquero")->subject($title);
                $message->attach($db);
            });
            $this->info("Mail sended.");
        }
        catch(Exception $e) {
            $this->info("Error on mail." . $e);
        }
    }

    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments() {
        return array(

        //array('example', InputArgument::REQUIRED, 'An example argument.'),
        );
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions() {
        return array(

        //array('example', null, InputOption::VALUE_OPTIONAL, 'An example option.', null),
        );
    }
}
