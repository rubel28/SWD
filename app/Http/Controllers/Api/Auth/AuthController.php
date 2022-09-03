<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\UserLoginRequest;
use App\Http\Resources\Auth\LoginResource;
use App\Http\Resources\UserResource;
use App\Services\User\UserLoginHistoryService;
use App\Services\VendorApiSetting\IpApiService;
use App\Support\Configs\Constants;
use App\Traits\HasApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    use HasApiResponse;
    /**
     * @var IpApiService
     */
    private $ipApiService;

    /**
     * @var UserLoginHistoryService
     */
    private $userLoginHistoryService;

    /**
     * @param IpApiService $ipApiService
     * @param UserLoginHistoryService $userLoginHistoryService
     */
    public function __construct(IpApiService $ipApiService, UserLoginHistoryService $userLoginHistoryService)
    {
        $this->ipApiService = $ipApiService;
        $this->userLoginHistoryService = $userLoginHistoryService;
    }

    /**
     * @param UserLoginRequest $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\JsonResponse|\Illuminate\Http\Response
     */
    public function login(UserLoginRequest $request){
        $request['user_ip'] = $request->ip();
        $request['ipApi'] = $this->ipApiService->ipAPI(array('ip_address'=>$request['user_ip']));
        $requestData = [];
        $requestData['mobile_number'] = $request->mobile_number;
        $requestData['password'] = $request->password;
        $requestData['ACTIVE'] = Constants::$user_active_status;
        $remember_me = $request->has('remember') ? true : false;

        if(! auth()->attempt($requestData,$remember_me)){
            return $this->httpUnauthorizedError('Unauthorised',
                ['error'=>'Username or Password is not matched!']);
        }

        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        $request['user'] = auth()->user();
        $this->userLoginHistoryService->storeUserLoginHistory($request);
        $data['user'] = LoginResource::collection(auth()->user()->get());
        $data['access_token'] = $accessToken;
        return $this->httpSuccess($data, 'login success.');

        /*return response(['status' => true,
            'message' => 'Authorised',
            'user' => LoginResource::collection(auth()->user()->get()),
            'access_token' => $accessToken],
            200);*/
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        //Log::info($request->user()->token());
        $token = $request->user()->token();
        $token->revoke();
        return $this->httpSuccess('', 'Signed Out successfully');
    }
}
