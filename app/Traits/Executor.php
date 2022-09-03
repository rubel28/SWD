<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;

trait Executor
{
    public static function bootExecutor()
    {
        static::creating(function (Model $model){
            if(auth()->check()){
                $user = auth()->user();
            }
            $model->created_by = isset($user)?$user->id:1;
        });

        static::updating(function (Model $model) {
            if(auth()->check()){
                $user = auth()->user()->id;
            }
            $model->updated_by = isset($user)?$user:1;
        });

        static::deleting(function (Model $model) {
            if(auth()->check()){
                $user = auth()->user()->id;
            }
            $model->deleted_by = isset($user)?$user:1;
        });
    }
}
