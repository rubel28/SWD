<?php

namespace App\Http\Controllers\Api\Backend\Utility;

use App\Http\Controllers\Controller;
use App\Http\Requests\Utility\ProvinceRequest;
use App\Http\Resources\Utility\ProvinceResource;
use App\Models\Settings\Province;
use App\Repositories\EloquentVueTables;
use App\Services\Setting\ProvinceService;
use App\Traits\HasApiResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class ProvinceController extends Controller
{
    use HasApiResponse;
    /**
     * @var ProvinceService
     */
    private $provinceService;

    /**
     * @param ProvinceService $provinceService
     */
    public function __construct(ProvinceService $provinceService){
        $this->provinceService = $provinceService;
    }
    /**
     * Display a listing of the resource.
     *
     * @param Province $province
     * @return Response
     */
    public function index(Province $province)
    {
        return $this->provinceService->getProvinces();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  ProvinceRequest  $request
     * @return Response
     */
    public function store(ProvinceRequest $request)
    {
        try {
            $province = $this->provinceService->storeProvince($request->all());
            return $this->httpCreated(new ProvinceResource($province), 'Province successfully created');
        } catch (\Exception $e) {
            Log::info($e);
            return $this->httpServerError('Failed to create Province',$e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Province $province
     * @return Response
     */
    public function show(Province $province)
    {
        try {
            $data = new ProvinceResource($province);
            return $this->httpSuccess($data, 'Province data found');
        }catch (\Exception $e){
            return $this->httpServerError('Failed to get Province',$e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProvinceRequest $request
     * @param Province $province
     * @return Response
     */
    public function update(ProvinceRequest $request, Province $province)
    {
        try {
            $this->provinceService->updateProvince($request->all(),$province);
            return $this->httpCreated(new ProvinceResource($province), 'Province successfully updated');
        } catch (\Exception $e) {
            Log::info($e);
            return $this->httpServerError('Failed to update Province',$e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Province $province
     * @return Response
     */
    public function destroy(Province $province)
    {
        $this->provinceService->deleteProvince($province);
        return $this->httpSuccess('', 'Province successfully deleted');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function selectBoxProvinceList($id)
    {
        try {
            return $this->provinceService->selectBoxProvinceList($id);
        }catch (\Exception $e){
            return $this->httpServerError('Failed to get Province',$e->getMessage());
        }

    }
}
