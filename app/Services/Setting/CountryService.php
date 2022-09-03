<?php

namespace App\Services\Setting;

use App\Models\Settings\Country;
use App\Services\Utility\FileUploadService;
use App\Services\Utility\UtilityService;

/**
 * Class CountryService.
 */
class CountryService
{

    /**
     * @var FileUploadService
     */
    private $fileUploadService;

    /**
     * CountryService constructor.
     * @param FileUploadService $fileUploadService
     */
    public function __construct(FileUploadService $fileUploadService)
    {
        $this->fileUploadService = $fileUploadService;
    }
    /**
     * @return void
     * @throws \Exception
     */
    public function storeCountry($input)
    {
        try {
            return Country::create($input);
        } catch (\Exception $e) {
            throw new \Exception('Failed to create Country');
        }

    }

    /**
     * @return void
     * @throws \Exception
     */
    public function updateCountry($input,$country)
    {
        try {
            return $country->update($input);
        } catch (\Exception $e) {
            throw new \Exception('Failed to update Country');
        }

    }

    /**
     * @param $input
     * @return null|string
     */
    public function countryFlag($input)
    {
        $data['image'] = $input->file('country_logo');
        $data['image_name'] = 'country_logo_'.$input['country_id'];
        $data['destination'] = UtilityService::$imageUploadPath['country_logos'];
        $data['width'] = UtilityService::$countryFlagSize['width'];
        $data['height'] = UtilityService::$countryFlagSize['height'];
        $img = $this->fileUploadService->saveImage($data);
        return $img;
    }

    /**
     * @return void
     * @throws \Exception
     */
    public function deleteCountry($country)
    {
        try {
            //$country->province()->city()->delete();
            //$country->province()->delete();
            $country->delete();
            return response()->noContent();
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
            //throw new \Exception('Failed to delete Country');
        }

    }
}
