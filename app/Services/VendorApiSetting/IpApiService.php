<?php

namespace App\Services\VendorApiSetting;

/**
 * Class IpApiService.
 */
class IpApiService
{
    /**
     * Notification configuration.
     *
     * @var array
     */
    private $config;

    private $status = 'sandbox';
    /**
     * NotificationService constructor.
     */
    public function __construct()
    {
        $this->config = config('ip-api');
        if ($this->config['mode'] === 'sandbox') {
            $this->status = 'sandbox';

        } else {
            $this->status = 'live';
        }
    }

    /**
     * @param $input
     */
    public function ipAPI($input)
    {
        // set IP address and API access key
        $ip = $input['ip_address'];

        // Initialize CURL:
        $ch = curl_init('https://api.ipapi.com/'.$ip.'?access_key='.$this->config[$this->status]['access_key'].'');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Store the data:
        $json = curl_exec($ch);
        curl_close($ch);

        // Decode JSON response:
        $api_result = json_decode($json, true);
        return $api_result;
    }
}
