<?php

namespace App\Services\Utility;
use File;
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
    public function saveImage($data)
    {
        if (isset($data['image'])) {
            //Get image name
            $imageName = $data['image_name'] . '.' . strtolower($data['image']->getClientOriginalExtension());
            // make image path
            $destinationPath = storage_path(UtilityService::$fileUploadPath.$data['destination']);
            // Check image path available or create it
            if (!File::exists($destinationPath)) {
                File::makeDirectory($destinationPath, 0755, true);
            }

            // Check the image is svg format. if svg no need to resize
            if($data['image']->getClientOriginalExtension() != 'svg'){
                // Resize big image
                $imageWidth = Image::make($data['image']->getRealPath())->width();
                $imageHeight = Image::make($data['image']->getRealPath())->height();
                if(isset($data['width']) && isset($data['height'])):
                    if($imageWidth > $imageHeight):
                        $width = $data['width'];
                        $height = $data['height'];
                    else:
                        $width = $data['height'];
                        $height = $data['width'];
                    endif;
                else:
                    $width = $imageWidth;
                    $height = $imageHeight;
                endif;
                $img = Image::make($data['image']->getRealPath())->resize($width, $height);
                $img->orientate();
                // If there is an old image, delete it
                $this->removeFile($imageName, $destinationPath);
                // Else save new image
                $img->save($destinationPath . $imageName,90);

            }else{
                $data['image']->move($destinationPath,$imageName);
            }
            return '/'.$data['destination'].$imageName;
        }

        return null;
    }
}
