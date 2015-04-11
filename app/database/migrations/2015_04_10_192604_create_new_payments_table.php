<?php
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewPaymentsTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {

        if (Schema::hasTable('payments')) {
            Schema::drop('payments');
        }

        Schema::create('payments', function (Blueprint $table) {
            $table->increments('id');

            $table->string('type');
            $table->string('subscription_id');
            $table->string('payment_date');
            $table->string('ipn_track_id');
            $table->string('verify_sign');
            $table->string('user_uniqid');

            $table->string('payerid');
            $table->string('payer_name');
            $table->string('payer_email');
            $table->string('receiver_email');

            $table->string('description');
            $table->string('total');

            $table->string('status');
            $table->string('ip');
            $table->string('commission');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::drop('payments');
    }
}
