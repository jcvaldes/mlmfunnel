<?php

class AdminController extends BaseController {

    public function dashboard()
    {
        $data = [];

        $data['clients'] = User::all()->count();
        $data['older'] = 0;
        $data['suspended'] = User::where('status', 'suspended')->get()->count();
        $data['inactive'] = User::where('status', 'inactive')->get()->count();

        return View::make('backend.dashboard-admin', compact('data'));
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
    public function post_avatar_crop($id)
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

        $user = User::find($id);
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
    public function get_avatar($id)
    {
        $avatar = (Session::has('avatar')) ? Session::get('avatar') : User::find($id)->getProfilePicture();
        return Response::json(['avatar' => $avatar]);        
    }
    #Avatar Rotate
    public function post_avatar_rotate($id)
    {
        $avatar = public_path() . User::find($id)->picture;
        $img = Intervention::make($avatar);
        //delete previous image and cache
        Croppa::delete(User::find($id)->picture);
        $img->rotate(Input::get('angle'))->save();

        return Response::json(['avatar' => User::find($id)->picture]);
    }


    /* SETTINGS */

    public function settings()
    {
        return View::make('backend.pages.settings');
    }    

    public function settings_post()
    {
        $inputs = Input::all();

        $inputs['app_export'] = Input::has('app_export');

        foreach ($inputs as $key => $value) {
            $setting = Setting::firstOrNew(['key' => $key]);
            $setting->value = $value;
            $setting->save();
        }
        return Redirect::to('/dashboard/settings')->with('alert', ['type' => 'success', 'message' => 'Configuración guardada.']);
    }

    public function emails()
    {
        return View::make('backend.pages.emails');
    }

    public function emails_edit($key)
    {
        return View::make('backend.pages.emails-edit')->with('key', $key);
    }

    public function emails_post()
    {
        $inputs = Input::all();

        foreach ($inputs as $key => $value) {
            $setting = Setting::firstOrNew(['key' => $key]);
            $setting->value = $value;
            $setting->save();
        }
        return Redirect::to('/dashboard/emails')->with('alert', ['type' => 'success', 'message' => 'Personalización guardada.']);
    }

    public function emails_preview($key)
    {
        return View::make('backend.pages.emails-preview')->with('key', $key);
    }

    
}