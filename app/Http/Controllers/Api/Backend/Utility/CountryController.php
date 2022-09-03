<?php

namespace App\Http\Controllers\Api\Backend\Utility;

use App\Http\Controllers\Controller;
use App\Http\Requests\Utility\CountryRequest;
use App\Http\Resources\Utility\CountryResource;
use App\Models\Settings\Country;
use App\Services\Setting\CountryService;
use App\Traits\HasApiResponse;
use http\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CountryController extends Controller
{
    use HasApiResponse;
    /**
     * @var CountryService
     */
    private $countryService;

    /**
     * @param CountryService $countryService
     */
    public function __construct(CountryService $countryService){
        $this->countryService = $countryService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Country $country)
    {
        $countries = CountryResource::collection($country->All());
        if($countries){
            return $this->httpSuccess($countries, 'Country data found');
        }else{
            return $this->httpNotFoundError('Country data not found','');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CountryRequest $request
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function store(CountryRequest $request)
    {
        //Log::info($request->All());
        try {
            DB::beginTransaction();
            $country = $this->countryService->storeCountry($request->all());
            if ($country) {
                // Country Flag
                $request['country_id'] = $country->id;
                if ($request->hasFile('country_logo')) {
                    $image_url = $this->countryService->countryFlag($request);
                    $country->country_logo = $image_url;
                    $country->save();
                }

            } else {
                return $this->httpServerError('Failed to create Country','');
            }
            DB::commit();
            return $this->httpCreated('', 'Country successfully created');

        } catch (\Exception $e) {
            DB::rollback();
            Log::info($e);
            return $this->httpServerError('Failed to create Country',$e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Country $country
     * @return \Illuminate\Http\Response
     */
    public function show(Country $country)
    {
        try {
            $data = new CountryResource($country);
            return $this->httpSuccess($data, 'Country data found');
        }catch (\Exception $e){
            return $this->httpServerError('Failed to get Country',$e->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CountryRequest $request
     * @param Country $country
     * @return \Illuminate\Http\Response
     */
    public function update(CountryRequest $request, Country $country)
    {
        try {
            DB::beginTransaction();
            $this->countryService->updateCountry($request->all(),$country);
            // Country Flag
            $request['country_id'] = $country->id;
            if ($request->hasFile('country_logo')) {
                $image_url = $this->countryService->countryFlag($request);
                $country->country_logo = $image_url;
                $country->save();
            }
            DB::commit();
            return $this->httpCreated('', 'Country successfully updated');

        } catch (\Exception $e) {
            DB::rollback();
            Log::info($e);
            return $this->httpServerError('Failed to update Country',$e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Country $country
     * @return \Illuminate\Http\Response
     */
    public function destroy(Country $country)
    {
        $this->countryService->deleteCountry($country);
        return $this->httpSuccess('', 'Country successfully deleted');
    }
}
