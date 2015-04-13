<?php

class AdminController extends BaseController {

    public function dashboard()
    {
        $data = [];

        $data['active'] =   User::where('status', 'active')->get()->count();
        $data['belated'] =  User::where('status', 'belated')->get()->count();
        $data['suspended'] =User::where('status', 'suspended')->get()->count();
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

    /* EMAILS */

    public function emails()
    {
        return View::make('backend.pages.emails');
    }

    public function emails_edit($key)
    {
        switch ($key) {
            case 'email-new-prospect':
                $title = 'Notificación de nuevo prospecto creado.';
                break;
            case 'email-welcome':
                $title = 'Email de bienvenida con datos de acceso a nueva cuenta creada.';
                break;
            case 'email-next-suspension':
                $title = 'Notificación de fecha próxima a suspensión de cuenta.';
                break;
            case 'email-suspension':
                $title = 'Notificación de suspensión de cuenta.';
                break;
            case 'email-next-desactivate':
                $title = 'Notificación de fecha próxima a desactivación de cuenta.';
                break;
            case 'email-desactivate':
                $title = 'Notificación de desactivación de cuenta.';
                break;

        }

        return View::make('backend.pages.emails-edit', ['title' => $title])->with('key', $key);
    }

    public function emails_post()
    {
        $inputs = Input::all();

        foreach ($inputs as $key => $value) {
            $setting = Setting::firstOrNew(['key' => $key]);
            $setting->value = $value;
            $setting->save();
        }
        return Redirect::to('/dashboard/settings#notifications')->with('alert', ['type' => 'success', 'message' => 'Personalización guardada.']);
    }

    public function emails_preview($key)
    {
        $user = Auth::user();
        $title = Setting::key($key.':title')->first()->value;
        $body = Setting::key($key.':body')->first()->value;

        $title = str_replace('%name%', $user->full_name, $title);
        $title = str_replace('%email%', $user->email, $title);
        $title = str_replace('%phone%', $user->phone, $title);
        $title = str_replace('%url%', Setting::key('app_url')->first()->value, $title);
        $title = str_replace('%system%', Setting::key('app_name')->first()->value, $title);

        $body = str_replace('%name%', $user->full_name, $body);
        $body = str_replace('%email%', $user->email, $body);
        $body = str_replace('%phone%', $user->phone, $body);
        $body = str_replace('%url%', Setting::key('app_url')->first()->value, $body);
        $body = str_replace('%system%', Setting::key('app_name')->first()->value, $body);

        $body = nl2br($body);

        return View::make('emails.notify.layout', ['title' => $title, 'body' => $body, 'id' => $user->id]);
    }

    /* SMS */

    public function sms()
    {
        return View::make('backend.pages.sms');
    }

    public function sms_edit($key)
    {
        switch ($key) {
            case 'sms-new-prospect':
                $title = 'Notificación de nuevo prospecto creado.';
                break;
            case 'sms-welcome':
                $title = 'Email de bienvenida con datos de acceso a nueva cuenta creada.';
                break;
            case 'sms-next-suspension':
                $title = 'Notificación de fecha próxima a suspensión de cuenta.';
                break;
            case 'sms-suspension':
                $title = 'Notificación de suspensión de cuenta.';
                break;
            case 'sms-next-desactivate':
                $title = 'Notificación de fecha próxima a desactivación de cuenta.';
                break;
            case 'sms-desactivate':
                $title = 'Notificación de desactivación de cuenta.';
                break;
        }

        return View::make('backend.pages.sms-edit', ['title' => $title])->with('key', $key);
    }

    public function sms_post()
    {
        $inputs = Input::all();

        foreach ($inputs as $key => $value) {
            $setting = Setting::firstOrNew(['key' => $key]);
            $setting->value = $value;
            $setting->save();
        }
        return Redirect::to('/dashboard/settings#notifications')->with('alert', ['type' => 'success', 'message' => 'Personalización guardada.']);
    }

    public function sms_preview($key)
    {
        $user = Auth::user();
        $text = Setting::key($key.':text')->first()->value;

        $text = str_replace('%name%', $user->full_name, $text);
        $text = str_replace('%email%', $user->email, $text);
        $text = str_replace('%phone%', $user->phone, $text);
        $text = str_replace('%url%', Setting::key('app_url')->first()->value, $text);
        $text = str_replace('%system%', Setting::key('app_name')->first()->value, $text);

        return View::make('emails.notify.layout-sms', ['text' => $text, 'id' => $user->id]);
    }


}