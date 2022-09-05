<?php

namespace App\Services\Utility;
use File;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Image;

class FileUploadService
{

    /**
     * @param $file
     * @param $uploadPath
     * @return bool
     */
    public function removeFile($file, $uploadPath)
    {
        if (!$file) {
            return false;
        }

        $deleteOldImage = $uploadPath . '/' . $file;
        if (File::isFile($deleteOldImage)) {
            File::delete($deleteOldImage);
        }

        return true;
    }

    /**
     * @param $data
     * @return string|null
     */
    public function saveImage($image,$data)
    {
        // Check if image is valid base64 string
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            // Take out the base64 encoded text without mime type
            $image = substr($image, strpos($image, ',') + 1);
            // Get file extension
            $type = strtolower($type[1]); // jpg, png, gif

            // Check if file is an image
            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }
        //Get image name
        $imageName = $data['image_name'].Str::random() . '.' . $type;
        // make image path
        $destinationPath = storage_path(UtilityService::$fileUploadPath.$data['destination']);
        $relativePath = $destinationPath.$imageName;
        // Check image path available or create it
        if (!File::exists($destinationPath)) {
            File::makeDirectory($destinationPath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return '/'.$data['destination'].$imageName;
    }
}
