<?php

namespace App\Services\Setting;

use App\Models\Settings\City;

/**
 * Class CityService.
 */
class CityService
{

    public function __construct()
    {

    }
    /**
     * @return void
     * @throws \Exception
     */
    public function storeCity($input)
    {
        try {
            return City::create($input);
        } catch (\Exception $e) {
            throw new \Exception('Failed to create City');
        }

    }

    /**
     * @return void
     * @throws \Exception
     */
    public function updateCity($input,$city)
    {
        try {
            return $city->update($input);
        } catch (\Exception $e) {
            throw new \Exception('Failed to update City');
        }

    }


    /**
     * @return void
     * @throws \Exception
     */
    public function deleteCity($city)
    {
        try {
            $city->delete();
            return response()->noContent();
        } catch (\Exception $e) {
            throw new \Exception('Failed to delete City');
        }

    }
}
