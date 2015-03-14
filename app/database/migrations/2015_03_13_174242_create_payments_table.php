<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('payments', function(Blueprint $table)
		{
			$table->increments('id');	

			$table->string('paymentid');		
			$table->string('token');
			$table->string('payerid');
		    $table->string('ip');

		    $table->enum('status', ['approved', 'rejected', 'canceled']);

		    $table->string('description');
		    $table->decimal('total');

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
		Schema::drop('payments');
	}

}
