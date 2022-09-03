<?php

namespace App\Models;

use App\Models\User\UserLoginHistory;
use App\Models\User\UserTokens;
use App\Traits\Executor;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
//use Laravel\Sanctum\HasApiTokens;
use Laravel\Passport\HasApiTokens;
use OwenIt\Auditing\Contracts\Auditable;

class User extends Authenticatable implements Auditable
{
    use HasApiTokens;
    use HasFactory, Notifiable;
    use SoftDeletes;
    use Executor;
    use \OwenIt\Auditing\Auditable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name', 'mobile_number', 'parent_id', 'password', 'active', 'pin', 'risk_profiling', 'default_language', 'default_currency', 'default_country_id'

    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'pin',
        'fcm_token'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function userToken()
    {
        return $this->hasOne(UserTokens::class,'user_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userLoginHistory()
    {
        return $this->hasMany(UserLoginHistory::class, 'user_id');
    }


}
