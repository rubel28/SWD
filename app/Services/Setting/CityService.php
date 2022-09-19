<?php

namespace App\Services\Setting;

use App\Http\Resources\Utility\CityResource;
use App\Models\Settings\City;
use App\Repositories\EloquentVueTables;

/**
 * Class CityService.
 */
class CityService
{
    /**
     * @var EloquentVueTables
     */
    private $eloquentVueTables;

    /**
     * ProvinceService constructor.
     * @param EloquentVueTables $eloquentVueTables
     */
    public function __construct(EloquentVueTables $eloquentVueTables)
    {
        $this->eloquentVueTables = $eloquentVueTables;
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

    /**
     * @return array
     */
    public function getCity()
    {
        $query = City::query();
        $query->leftJoin('provinces', 'provinces.id', '=', 'cities.province_id');
        $query->leftJoin('countries', 'countries.id', '=', 'provinces.country_id');
        $fields = ['cities.id','city_name','city_status','province_id','country_name','province_name'];
        $data = $this->eloquentVueTables->get($query, $fields);
        $cities = CityResource::collection($data['data']->get());
        return [
            'data' => $cities,
            'count' => $data['count'],
        ];
    }
}
