<?php

namespace App\Http\Resources\Utility;

use Illuminate\Http\Resources\Json\JsonResource;

class ProvinceResource extends JsonResource
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
            'province_name' => $this->province_name,
            'province_status' => $this->province_status,
            'country_name' => $this->country->country_name,
            'country_id' => $this->country->id,
        ];
    }
}
