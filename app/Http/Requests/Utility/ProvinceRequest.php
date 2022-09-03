<?php

namespace App\Http\Requests\Utility;

use App\Traits\HasApiResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use function response;

class ProvinceRequest extends FormRequest
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
            'province_name' => ['required']
        ];
    }

    public function messages()
    {
        return [
            'province_name.required' => 'Province Name Required.',
        ];
    }

    public function failedValidation(Validator $validator){
        throw new HttpResponseException(
            $this->httpUnprocessable('Validation error', ['errors' => $validator->errors()])
        );
    }
}
