<?php

namespace App\Http\Resources\Auth;

use Illuminate\Http\Resources\Json\JsonResource;

class LoginResource extends JsonResource
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
            'name' => $this->name,
            'mobile_number' => $this->mobile_number,
            'active' => $this->active,
            'risk_profiling' => $this->risk_profiling,
            'default_language' => $this->default_language,
            'default_currency' => $this->default_currency,
            'default_country_id' => $this->default_country_id,
        ];
    }
}
