<?php

namespace Database\Seeders;

use App\Models\User;
use App\Support\Configs\Constants;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(array(
            'mobile_number' => '6501521209',
            'name' => 'Baharul Islam',
            'active' => Constants::$user_active_status,
            'password' => bcrypt('abc123'),
            'pin' => bcrypt('123456'),
            'default_language' => 'en',
            'default_currency' => 'SGD',
            'default_country_id' => 192,
            'created_by' => 1
        ));
        $user = User::where('mobile_number','6501521209')->first();
        //$user->UserToken()->create(['user_token'=>$user->createToken('my-cash-money')->accessToken]);
    }
}
