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
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('parent_id')->nullable()->unsigned()->default(null);
            $table->string('name');
            $table->string('mobile_number')->unique();
            $table->string('password',60);
            $table->string('pin',60);
            $table->string('active')->default(Constants::$user_active_status);
            $table->timestamp('email_verified_at')->nullable();
            $table->boolean('wrong_password')->default(False);
            $table->boolean('wrong_pin')->default(False);
            $table->string('risk_profiling',16)->default('green');
            $table->string('app_version')->default('40');
            $table->string('fcm_token')->nullable();
            $table->string('default_language')->nullable();
            $table->string('default_currency')->nullable();
            $table->string('default_country_id')->nullable();
//            $table->text('applicant_id')->nullable();
//            $table->text('check_id')->nullable();
//            $table->text('application_id')->nullable();
//            $table->text('document_id')->nullable();
//            $table->string('is_on_fido')->default(Constants::$user_default_status);
//            $table->integer('on_fido_update_count')->default(0);
//            $table->integer('on_fido_check_count')->default(0);
            $table->rememberToken();
            $table->integer('deleted_by')->unsigned()->default(0);
            $table->integer('created_by')->unsigned()->default(0);
            $table->integer('updated_by')->unsigned()->default(0);
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('parent_id')->references('id')->on('users')
                ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
