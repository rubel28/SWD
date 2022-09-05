<?php

namespace App\Http\Resources\Utility;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class CountryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'country_iso' => $this->country_iso,
            'country_name' => $this->country_name,
            'country_iso3' => $this->country_iso3,
            'country_num_code' => $this->country_num_code,
            'country_phone_code' => $this->country_phone_code,
            'country_logo' => $this->country_logo,
            'country_logo_path' => Storage::url("images".$this->country_logo),
            'country_currency' => $this->country_currency,
            'country_currency_symbol' => $this->country_currency_symbol,
            'country_language' => $this->country_language,
            'country_status' => $this->country_status,
            'active_status' => $this->country_status ? 'ACTIVE':'IN-ACTIVE',
        ];
    }
}
