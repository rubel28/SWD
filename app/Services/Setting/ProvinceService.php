<?php

namespace App\Services\Setting;

use App\Http\Resources\Utility\ProvinceResource;
use App\Models\Settings\Province;
use App\Repositories\EloquentVueTables;

/**
 * Class ProvinceService.
 */
class ProvinceService
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

    /**
     * @return array
     */
    public function getProvinces()
    {
        $query = Province::query();
        $query->leftJoin('countries', 'countries.id', '=', 'provinces.country_id');
        $fields = ['provinces.id','province_name','country_name','province_status','country_id'];
        $data = $this->eloquentVueTables->get($query, $fields);
        $provinces = ProvinceResource::collection($data['data']->get());
        return [
            'data' => $provinces,
            'count' => $data['count'],
        ];
    }

    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function selectBoxProvinceList($id)
    {
        $data = Province::where('country_id', '=',$id)->where('deleted_at', NULL);
        return ProvinceResource::collection($data->get());
    }
}
