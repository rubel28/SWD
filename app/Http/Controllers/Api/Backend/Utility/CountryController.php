<?php

namespace App\Http\Controllers\Api\Backend\Utility;

use App\Http\Controllers\Controller;
use App\Http\Requests\Utility\CountryRequest;
use App\Http\Resources\Utility\CountryResource;
use App\Models\Settings\Country;
use App\Services\Setting\CountryService;
use App\Services\Utility\UtilityService;
use App\Traits\HasApiResponse;
use http\Message;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
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
     * @return array
     */
    public function index(Country $country): array
    {
        return $this->countryService->getCountries();
        /*if($countries){
            return $this->httpSuccess($countries, 'Country data found');
        }else{
            return $this->httpNotFoundError('Country data not found','');
        }*/
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CountryRequest $request
     * @return Response
     * @throws \Exception
     */
    public function store(CountryRequest $request)
    {
        //Log::info($request->all());
        $data = $request->all();
        try {
            DB::beginTransaction();
            // Check if image was given and save on local file system
            if (isset($data['image'])) {
                $relativePath  = $this->countryService->saveImage($data['image']);
                $data['country_logo'] = $relativePath;
            }
            $country = $this->countryService->storeCountry($data);

            DB::commit();
            return $this->httpCreated(new CountryResource($country), 'Country successfully created');

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
     * @return Response
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
     * @return Response
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
     * @return Response
     */
    public function update(CountryRequest $request, Country $country)
    {
        //Log::info($request->all());
        $data = $request->all();
        try {
            DB::beginTransaction();
            if (isset($data['image'])) {
                $relativePath  = $this->countryService->saveImage($data['image'],$country);
                $data['country_logo'] = $relativePath;
            }
            //Log::info($country);
            $this->countryService->updateCountry($data,$country);
            DB::commit();
            return $this->httpCreated(new CountryResource($country), 'Country successfully updated');

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
     * @return Response
     */
    public function destroy(Country $country)
    {
        $this->countryService->deleteCountry($country);
        return $this->httpSuccess('', 'Country successfully deleted');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function selectBoxCountryList()
    {
        return $this->countryService->selectBoxCountryList();
    }
}
