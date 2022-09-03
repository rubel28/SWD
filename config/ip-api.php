<?php

return [
    'mode'  => env('IP_API__API_MODE','sandbox'),
    'sandbox' => [
        'access_key'    => env( 'IP_API_ACCESS_KEY', '16e76e3dacf85ddf22c60ceb8d4d57f9')
    ],
    'live' => [
        'access_key'    => env( 'IP_API_ACCESS_KEY', '16e76e3dacf85ddf22c60ceb8d4d57f9')
    ],
];
