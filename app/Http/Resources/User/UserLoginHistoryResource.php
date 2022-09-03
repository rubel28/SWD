<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;

class UserLoginHistoryResource extends JsonResource
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
            'iD' => $this->id,
            'user_name' => $this->user->name,
            'mobile_number' => $this->user->mobile_number,
            'browser' => $this->user_browser,
            'iP' => $this->user_ip,
            'mac_address' => $this->user_mac_address,
            'address' => $this->user_address,
            'login_status' => $this->user_login_status,
            'latitude' => $this->user_latitude,
            'longitude' => $this->user_longitude,
            'date' => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}
