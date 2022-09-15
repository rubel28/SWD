<?php

namespace App\Http\Controllers\Api\Backend\Utility;

use App\Http\Controllers\Controller;
use App\Http\Requests\Utility\CityRequest;
use App\Http\Resources\Utility\CityResource;
use App\Models\Settings\City;
use App\Repositories\EloquentVueTables;
use App\Services\Setting\CityService;
use App\Traits\HasApiResponse;
use Illuminate\Support\Facades\Log;

class CityController extends Controller
{
    use HasApiResponse;
    /**
     * @var CityService
     */
    private $cityService;

    /**
     * @param CityService $cityService
     */
    public function __construct(CityService $cityService){
        $this->cityService = $cityService;
    }
    /**
     * Display a listing of the resource.
     *
     * @param  City $city
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $u = City::query();
        $t = new EloquentVueTables();
        $data = $t->get($u, ['id','city_name','city_status','province_id']);
        $city = CityResource::collection($data['data']->get());
        return [
            'data' => $city,
            'count' => $data['count'],
        ];
        //return $city->with('province')->with('country')->paginate(20);
        /*$city = CityResource::collection($city->paginate(20));
        if($city){
            return $this->httpSuccess($city, 'City data found');
        }else{
            return $this->httpNotFoundError('City data not found','');
        }*/
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CityRequest $request)
    {
        try {
            $city = $this->cityService->storeCity($request->all());
            return $this->httpCreated(new CityResource($city), 'City successfully created');
        } catch (\Exception $e) {
            Log::info($e);
            return $this->httpServerError('Failed to create City',$e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  City $city
     * @return \Illuminate\Http\Response
     */
    public function show(City $city)
    {
        try {
            $data = new CityResource($city);
            return $this->httpSuccess($data, 'City data found');
        }catch (\Exception $e){
            return $this->httpServerError('Failed to get City',$e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  CityRequest  $request
     * @param  City $city
     * @return \Illuminate\Http\Response
     */
    public function update(CityRequest $request, City $city)
    {
        try {
            $this->cityService->updateCity($request->all(),$city);
            return $this->httpCreated(new CityResource($city), 'City successfully updated');
        } catch (\Exception $e) {
            Log::info($e);
            return $this->httpServerError('Failed to update City',$e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  City $city
     * @return \Illuminate\Http\Response
     */
    public function destroy(City $city)
    {
        $this->cityService->deleteCity($city);
        return $this->httpSuccess('', 'City successfully deleted');
    }
}
