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
        Schema::create('user_profiles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable()->unsigned()->default(null);
            $table->string('father_name');
            $table->string('mother_name');
            $table->string('gender')->default('male');
            $table->enum('marital_status', ['married','unmarried','divorced'])->default('unmarried');
            $table->string('occupation')->nullable();
            $table->string('source_of_income')->nullable();
            $table->string('id_type')->nullable();
            $table->string('id_no')->nullable();
            $table->string('id_issue_country')->nullable();
            $table->string('passport_issue_date')->nullable();
            $table->timestamp('id_expire_date')->nullable();
            $table->string('profile_photo')->nullable();
            $table->string('scan')->nullable();
            $table->string('scan_1')->nullable();
            $table->string('scan_2')->nullable();
            $table->dateTime('date_of_birth')->nullable();
            $table->string('permanent_address')->nullable();
            $table->integer('city_id')->nullable()->unsigned()->default(null);
            $table->integer('province_id')->nullable()->unsigned()->default(null);
            $table->integer('country_id')->nullable()->unsigned()->default(null);
            $table->string('post_code')->nullable();
            $table->string('present_address')->nullable();
            $table->integer('present_city_id')->nullable()->unsigned()->default(null);
            $table->integer('present_province_id')->nullable()->unsigned()->default(null);
            $table->integer('present_country_id')->nullable()->unsigned()->default(null);
            $table->string('present_post_code')->nullable();
            $table->string('note')->nullable();
            $table->string('nationality')->nullable();
            $table->string('managed_by')->nullable();
            $table->string('status')->default(Constants::$user_active_status);
            $table->string('blacklist')->default('no');
            $table->string('id_no_duplicate')->default('no');
            $table->integer('deleted_by')->unsigned()->default(0);
            $table->integer('created_by')->unsigned()->default(0);
            $table->integer('updated_by')->unsigned()->default(0);
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('country_id')->references('id')->on('countries')->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('province_id')->references('id')->on('provinces')->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('city_id')->references('id')->on('cities')->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('present_country_id')->references('id')->on('countries')->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('present_province_id')->references('id')->on('provinces')->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreign('present_city_id')->references('id')->on('cities')->onDelete('cascade')
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
        Schema::dropIfExists('user_profiles');
    }
};
