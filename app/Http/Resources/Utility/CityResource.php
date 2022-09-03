<?php

namespace App\Http\Resources\Utility;

use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
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
            'city_name' => $this->city_name,
            'city_status' => $this->city_status,
            'province_name' => $this->province->province_name,
            'province_id' => $this->province->id,
        ];
    }
}
