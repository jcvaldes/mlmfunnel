<?php

class UploadController extends BaseController {
    # Avatar Upload
    public function post_upload()
    {
        $file = Input::file('file');
        $destinationPath = public_path() . '/uploads/';
        $filename = str_random(16)."_".$file->getClientOriginalName();
        $upload_success = Input::file('file')->move($destinationPath, $filename);

        if ($upload_success) {
            $avatar = '/uploads/' . $filename;

            Session::put('upload', $avatar);
            $response = ['avatar' => $avatar, 'success' => 200];

            return Response::json($response);
        } else {
            return Response::json('error', 400);
        }
    }
    # Avatar Crop
    public function post_upload_crop()
    {
        $i = Input::all();
        extract($i);
        $avatar = public_path() . Session::get('upload');
        $img = Intervention::make($avatar);
        // determine if the image is portrait or landscape
        $scalew = $img->width() / $i; 
        $scaleh = $img->height() / $h;

        $img->resize($i, $img->height()/$scalew);
        $img->crop($h, $w, $x, $y);
        $img->save($avatar);

        return Response::json(['avatar' => Session::get('upload')]);
    }
    # Get Avatar
    public function get_upload()
    {
        $upload = (Session::has('upload')) ? Session::get('upload') : Auth::user()->getProfilePicture();
        return Response::json(['upload' => $upload]);        
    }
    #Avatar Rotate
    public function post_upload_rotate()
    {
        $avatar = public_path() . Session::get('upload');
        $img = Intervention::make($avatar);
        //delete previous image and cache
        $img->rotate(Input::get('angle'))->save();

        return Response::json(['avatar' => Session::get('upload')]);
    }
    # Avatar Upload
    public function post_avatar()
    {
        $file = Input::file('file');
        $destinationPath = public_path() . '/uploads/avatar/';
        $filename = str_random(16)."_".$file->getClientOriginalName();
        $upload_success = Input::file('file')->move($destinationPath, $filename);

        if ($upload_success) {
            $avatar = '/uploads/avatar/' . $filename;

            Session::put('avatar', $avatar);
            $response = ['avatar' => $avatar, 'success' => 200];

            return Response::json($response);
        } else {
            return Response::json('error', 400);
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

    /* PICTURE (Enterprise Logo) */
    # Upload Picture
    public function post_picture()
    {
        $file = Input::file('file');
        $destinationPath = public_path() . '/uploads/enterprise/picture/';
        $filename = str_random(16)."_".$file->getClientOriginalName();
        $upload_success = Input::file('file')->move($destinationPath, $filename);

        if ($upload_success) {
            $picture = '/uploads/enterprise/picture/' . $filename;
            Session::put('picture', $picture);
            return Response::json(['picture' => $picture]);
        } else {
            return Response::json('error', 500);
        }
    }
    # Get Picture
    public function get_picture()
    {
        $picture = (Session::has('picture')) ? Session::get('picture') : Auth::user()->getProfilePicture();
        return Response::json(['picture' => $picture]);        
    }
    # Picture Crop
    public function post_picture_crop()
    {
        $inputs = Input::all();
        extract($inputs);

        $picture = public_path() . Session::get('picture');
        $img = Intervention::make($picture);
        // determine orientation
        $img->resize($i, null, function ($constraint) {
            $constraint->aspectRatio();
        });
        $img->crop($w, $h, $x, $y);
        $img->save($picture);

        /* guardar en empresa */
        if(isset(Auth::user()->enterprise->id)){
            $enterprise = Enterprise::find(Auth::user()->enterprise->id);
            //delete previous picture
            if($enterprise->picture){
                if(file_exists(public_path() . $enterprise->picture)){                    
                    File::delete(public_path() . $enterprise->picture);
                }
            }
        }
        $enterprise->picture = Session::get('picture');
        $enterprise->save();
        /* :guardar en empresa*/
        return Response::json(['picture' => $enterprise->picture]);
    }


    /* Cover (Enterprise) */
    #Upload Cover
    public function post_cover()
    {
        ini_set('upload_max_filesize', '10M');
        ini_set('post_max_size', '10M');
        $file = Input::file('file');
        $destinationPath = public_path() . '/uploads/enterprise/cover/';
        $filename = str_random(16)."_".$file->getClientOriginalName();
        $upload_success = Input::file('file')->move($destinationPath, $filename);

        if ($upload_success) {
            $cover = '/uploads/enterprise/cover/' . $filename;
            Session::put('cover', $cover);
            return Response::json(['cover' => $cover]);
        } else {
            return Response::json('error', 500);
        }
    }
    # Get Cover
    public function get_cover()
    {
        $cover = (Session::has('cover')) ? Session::get('cover') : Auth::user()->getProfilePicture();
        return Response::json(['cover' => $cover]);        
    }

    public function post_cover_crop()
    {
        $inputs = Input::all();
        extract($inputs);

        $cover = public_path() . Session::get('cover');
        $img = Intervention::make($cover);
        // determine orientation
        $img->resize($i, null, function ($constraint) {
            $constraint->aspectRatio();
        });
        $img->crop($w, $h, $x, $y);
        $img->save($cover);

        /* guardar en empresa */
        if(isset(Auth::user()->enterprise->id)){
            $enterprise = Enterprise::find(Auth::user()->enterprise->id);
            //delete previous cover
            if($enterprise->cover){
                if(file_exists(public_path() . $enterprise->cover)){                    
                    File::delete(public_path() . $enterprise->cover);
                }
            }
        }
        $enterprise->cover = Session::get('cover');
        $enterprise->save();
        /* :guardar en empresa*/
        return Response::json(['cover' => $enterprise->cover]);
    }

    /* GALERIA DE EMPRESA */

    public function post_gallery()
    {    
        $file = Input::file('file');
        $destinationPath = public_path() . '/uploads/enterprise/';
        $filename = str_random(16)."_".$file->getClientOriginalName();
        $upload_success = Input::file('file')->move($destinationPath, $filename);

        if ($upload_success) {
            Session::push('gallery', $filename);
            return Response::json('success', 200);
        } else {
            return Response::json('error', 400);
        }
    }

    public function gallery()
    {
        $destinationPath = public_path() . '/uploads/enterprise/';
        if(count(Session::get('gallery')))
        foreach (Session::get('gallery') as $key => $value) {
            if(!file_exists($destinationPath . $value)){
                Session::forget('gallery')[$key];
            }
        }
        $images['images'] = (Session::has('gallery')) ? Session::get('gallery') : [];
        return Response::json($images);
    }
   
}