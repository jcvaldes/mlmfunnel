<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLandingsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('landings', function($table)
		{
		    $table->increments('id');
		    $table->string('name');
		    
		    $table->enum('status', ['enabled', 'disabled'])->default('disabled');
		   
		    $table->integer('user_id')->unsigned();
		    $table->foreign('user_id')->references('id')->on('users');
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
		Schema::drop('landings');
	}

}
