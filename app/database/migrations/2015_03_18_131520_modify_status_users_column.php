<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ModifyStatusUsersColumn extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{				
		Schema::table('users', function($table)
		{
			$table->dropColumn('status');
			$table->enum('status', ['active', 'belated', 'suspended', 'inactive'])->default('active');
		});	

	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('users', function($table)
		{
			$table->dropColumn('status');
		});
	}
}
