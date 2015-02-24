<?php

class UploadController extends BaseController {
   
    # Avatar Upload
    public function post_avatar()
    {
        $file = Input::file('file');
        if (Input::hasFile('file')) { 
            if (Input::file('file')->isValid()) {

                 $destinationPath = public_path() . '/uploads/avatar/';
                 $filename = str_random(16)."_".$file->getClientOriginalName();
                 $upload_success = Input::file('file')->move($destinationPath, $filename);

                 if($upload_success){
                    $avatar = '/uploads/avatar/' . $filename;
                    Session::put('avatar', $avatar);
                    $response = ['avatar' => $avatar, 'success' => 200];

                    return Response::json($response);
                } else {
                   return Response::json('error', 400);
                }                
            }            
        }
    }
    # Avatar Crop
    public function post_avatar_crop()
    {
        $i = Input::all();
        extract($i);

        $avatar = public_path() . Session::get('avatar');

        $img = Intervention::make($avatar);

        // determine if the image is portrait or landscape
        $scalew = $img->width() / $i; 
        $scaleh = $img->height() / $h;

        $img->resize($i, $img->height()/$scalew);
        $img->crop($h, $w, $x, $y);
        $img->save($avatar);

        $user = User::find(Auth::user()->id);
        // delete prevoius avatar
        if($user->picture){
            if(file_exists(public_path() . $user->picture)){                    
                File::delete(public_path() . $user->picture);
            }
        }
        $user->picture = Session::get('avatar');
        $user->save();
        return Response::json(['avatar' => $user->picture]);
    }
    # Get Avatar
    public function get_avatar()
    {
        $avatar = (Session::has('avatar')) ? Session::get('avatar') : Auth::user()->getProfilePicture();
        return Response::json(['avatar' => $avatar]);        
    }
    #Avatar Rotate
    public function post_avatar_rotate()
    {
        $avatar = public_path() . Auth::user()->picture;
        $img = Intervention::make($avatar);
        //delete previous image and cache
        Croppa::delete(Auth::user()->picture);
        $img->rotate(Input::get('angle'))->save();

        return Response::json(['avatar' => Auth::user()->picture]);
    }

}