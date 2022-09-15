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
            'active_status' => $this->city_status ? 'ACTIVE':'IN-ACTIVE',
            'province_name' => isset($this->province)?$this->province->province_name:'',
            'province_id' => isset($this->province)?$this->province->id:'',
            'country_name' => isset($this->province->country)?$this->province->country->country_name:'',
            'country_id' => isset($this->province->country)?$this->province->country->id:'',
        ];
    }
}
