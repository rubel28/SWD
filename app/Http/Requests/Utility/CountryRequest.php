<?php

namespace App\Http\Requests\Utility;

use App\Traits\HasApiResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use function response;

class CountryRequest extends FormRequest
{
    use HasApiResponse;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'country_iso' => ['required'],
            'country_name' => ['required']
        ];
    }

    public function messages()
    {
        return [
            'country_iso.required' => 'Country ISO Required.',
            'country_name.required' => 'Country Name Required.',
        ];
    }

    public function failedValidation(Validator $validator){
        throw new HttpResponseException(
            $this->httpUnprocessable('Validation error', ['errors' => $validator->errors()])
        );
        /*response()->json([
        'success' => false,
        'message' => 'Validation error',
        'data' => ['errors' => $validator->errors()]
    ], 422)*/
        /*throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));*/
    }
}
