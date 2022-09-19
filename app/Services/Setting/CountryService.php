<?php

namespace App\Services\Setting;

use App\Http\Resources\Utility\CountryResource;
use App\Models\Settings\Country;
use App\Repositories\EloquentVueTables;
use App\Services\Utility\FileUploadService;
use App\Services\Utility\UtilityService;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

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
     * @var EloquentVueTables
     */
    private $eloquentVueTables;

    /**
     * CountryService constructor.
     * @param FileUploadService $fileUploadService
     * @param EloquentVueTables $eloquentVueTables
     */
    public function __construct(FileUploadService $fileUploadService,EloquentVueTables $eloquentVueTables)
    {
        $this->fileUploadService = $fileUploadService;
        $this->eloquentVueTables = $eloquentVueTables;
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
     * @param $image
     * @return null|string
     */
    public function saveImage($image,$country = null)
    {
        $data['image_name'] = 'country_logo_';
        $data['destination'] = UtilityService::$imageUploadPath['country_logos'];
        $img = $this->fileUploadService->saveImage($image,$data);

        // If there is an old image, delete it
        if (isset($country->country_logo) && $country->country_logo) {
            $absolutePath = storage_path(UtilityService::$fileUploadPath.$country->country_logo);
            File::delete($absolutePath);
        }
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

    /**
     * @return array
     */
    public function getCountries()
    {
        $query = Country::query();
        $fields = ['id','country_name','country_iso','country_iso3','country_num_code','country_phone_code',
            'country_logo','country_status'];
        $data = $this->eloquentVueTables->get($query, $fields);
        $countries = CountryResource::collection($data['data']->get());
        return [
            'data' => $countries,
            'count' => $data['count'],
        ];
    }

    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function selectBoxCountryList()
    {
        return CountryResource::collection(Country::where('deleted_at', NULL)->get());
    }
}
