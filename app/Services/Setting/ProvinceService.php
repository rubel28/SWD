<?php

namespace App\Services\Setting;

use App\Models\Settings\Province;

/**
 * Class ProvinceService.
 */
class ProvinceService
{

    public function __construct()
    {

    }
    /**
     * @return void
     * @throws \Exception
     */
    public function storeProvince($input)
    {
        try {
            return Province::create($input);
        } catch (\Exception $e) {
            throw new \Exception('Failed to create Province');
        }

    }

    /**
     * @return void
     * @throws \Exception
     */
    public function updateProvince($input,$province)
    {
        try {
            return $province->update($input);
        } catch (\Exception $e) {
            throw new \Exception('Failed to update Province');
        }

    }


    /**
     * @return void
     * @throws \Exception
     */
    public function deleteProvince($province)
    {
        try {
            //$province->city()->delete();
            $province->delete();
            return response()->noContent();
        } catch (\Exception $e) {
            throw new \Exception('Failed to delete Province');
        }

    }
}
