<?php

namespace App\Traits;

use Symfony\Component\HttpFoundation\Response;

Trait HasApiResponse
{
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function httpCreated($result, $message)
    {
        $response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];

        return response()->json($response, Response::HTTP_CREATED);
    }

    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function httpServerError($error, $errorMessages = [])
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];


        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }

        return response()->json($response, Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function httpUnprocessable($error, $errorMessages = [])
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];


        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }

        return response()->json($response, Response::HTTP_UNPROCESSABLE_ENTITY);
    }
    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function httpNotFoundError($error, $errorMessages = [])
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];


        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }

        return response()->json($response, Response::HTTP_NOT_FOUND);
    }

    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function httpUnauthorizedError($error, $errorMessages = [])
    {
        $response = [
            'success' => false,
            'message' => $error,
        ];

        if(!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }

        return response()->json($response, Response::HTTP_UNAUTHORIZED);
    }

    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function httpSuccess($result, $message)
    {
        $response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];

        return response()->json($response, Response::HTTP_OK);
    }
}
