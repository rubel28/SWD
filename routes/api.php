<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Auth\AuthController;
use App\Http\Controllers\Api\Backend\UserLoginHistoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:api')->group( function () {
    Route::post('/logout',[AuthController::class,'logout']);
    Route::resource('user-login-histories', UserLoginHistoryController::class);
    Route::resource('countries',\App\Http\Controllers\Api\Backend\Utility\CountryController::class);
    Route::apiResource('cities',\App\Http\Controllers\Api\Backend\Utility\CityController::class);
    Route::apiResource('provinces',\App\Http\Controllers\Api\Backend\Utility\ProvinceController::class);
    //Route::get('/user-login-history',[UserLoginHistoryController::class,'index']);
});
Route::post('login', [AuthController::class, 'login']);
