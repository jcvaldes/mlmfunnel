<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCommissionsRysToUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('users', function($table)
		{
			// cr = commission register
			$table->string('cr_way');
			$table->string('cr_value');
			// cs = commission subscription
			$table->string('cs_way');
			$table->string('cs_value');
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
			$table->dropColumn('cr_way');
			$table->dropColumn('cr_value');
			$table->dropColumn('cs_way');
			$table->dropColumn('cs_value');
		});
	}
}
