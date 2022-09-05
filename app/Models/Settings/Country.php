<?php

namespace App\Models\Settings;

use App\Models\User;
use Illuminate\Database\Eloquent\Casts\Attribute;
use App\Traits\Executor;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use OwenIt\Auditing\Contracts\Auditable;

class Country extends Model implements Auditable
{
    use HasFactory;
    use \OwenIt\Auditing\Auditable;
    use SoftDeletes;
    use Executor;

    protected $table = 'countries';
    protected $guarded = ['id'];


    /**
     * Interact with the country status.
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function countryStatus(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value === 'ACTIVE' ? true:false,
            set: fn ($value) => $value === true ? 'ACTIVE':'IN-ACTIVE',
        );
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function updatedBy()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function deletedBy()
    {
        return $this->belongsTo(User::class, 'deleted_by');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function province()
    {
        return $this->hasMany(Province::class, 'country_id');
    }


}
