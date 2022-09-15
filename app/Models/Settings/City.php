<?php

namespace App\Models\Settings;

use App\Models\User;
use App\Traits\Executor;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use OwenIt\Auditing\Contracts\Auditable;

class City extends Model implements Auditable
{
    use HasFactory;
    use \OwenIt\Auditing\Auditable;
    use SoftDeletes;
    use Executor;

    protected $table = 'cities';
    protected $guarded = ['id'];

    /**
     * Interact with the province status.
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function provinceStatus(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $value === 'ACTIVE',
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
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function province()
    {
        return $this->belongsTo(Province::class, 'province_id');
    }
}
