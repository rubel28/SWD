<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_login_histories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable()->unsigned()->default(null);
            $table->text('user_browser')->nullable();
            $table->string('user_ip')->nullable();
            $table->string('user_mac_address')->nullable();
            $table->string('user_platform')->nullable();
            $table->string('user_city')->nullable();
            $table->string('user_location')->nullable();
            $table->string('user_latitude')->nullable();
            $table->string('user_longitude')->nullable();
            $table->text('user_address')->nullable();
            $table->string('user_login_status')->nullable();
            $table->string('user_blocked_ip')->nullable()->default(Constants::$user_default_status);
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_login_histories');
    }
};
