<?php

namespace App\Services\User;

use App\Models\User\UserLoginHistory;
use Illuminate\Support\Facades\Log;

/**
 * Class UserLoginHistoryService.
 */
class UserLoginHistoryService
{
    /**
     * @return void
     */
    public function storeUserLoginHistory($input)
    {
        $request['user_latitude'] = isset($input['ipApi']['latitude'])?$input['ipApi']['latitude']:$input->user_latitude;
        $request['user_longitude'] = isset($input['ipApi']['longitude'])?$input['ipApi']['longitude']:$input->user_longitude;
        $request['user_location'] = $input['ipApi']['city'].', '.$input['ipApi']['region_name'];
        $request['user_address'] = $input['ipApi']['city'].', '.$input['ipApi']['region_name'].', '.$input['ipApi']['country_name'].', '.$input['ipApi']['zip'];
        $request['user_city'] = $input['ipApi']['city'];
        $request['user_login_status'] = 'logged in';
        $request['user_platform'] = null;
        $request['user_mac_address'] = null;
        $request['user_id'] = $input->user->id;
        $request['user_browser'] = $input->has('user_browser') ? $input->input('user_browser') : $input->server('HTTP_USER_AGENT');
        $request['user_ip'] = $input->user_ip;
        $request['user_blocked_ip'] = $input->has('user_blocked_ip') ? $input->input('user_blocked_ip') : 'IN-ACTIVE';

        try {
            return UserLoginHistory::create($request);
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }
        return false;

    }
}
