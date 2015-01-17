<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProspectsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('prospects', function($table)
		{
			$table->increments('id');
			$table->string('name');
			$table->string('email');		    
			$table->string('phone');
			$table->string('ip');
			$table->boolean('confirmed');

			$table->integer('landing_id')->unsigned();
			$table->foreign('landing_id')->references('id')->on('landings');

			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('prospects');
	}

}
