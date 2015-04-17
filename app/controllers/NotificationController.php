<?php

use Funnel\Mailers\Parser;

class NotificationController extends BaseController {

    /**
     * Display a listing of posts
     *
     * @return Response
     */
    public function index()
    {
        return View::make('backend.notifications.index');
    }

    /* EMAILS */

    public function emails($type, $key)
    {
        $title = Parser::pageTitle($key);

        return View::make('backend.pages.emails-edit', ['title' => $title, 'type' => $type])->with('key', $key);
    }

    public function emails_post()
    {
        $inputs = Input::all();

        foreach ($inputs as $key => $value) {
            $setting = Setting::firstOrNew(['key' => $key]);
            $setting->value = $value;
            $setting->save();
        }
        return Redirect::to('/dashboard/notifications#'. Input::get('type'))->with('alert', ['type' => 'success', 'message' => 'Personalización guardada.']);
    }

    public function emails_preview($type, $key)
    {
        $user = Auth::user();
        $title = Parser::title($user, $key);
        $body = Parser::body($user, $key);

        return View::make('emails.notify.layout', ['title' => $title, 'body' => $body, 'id' => $user->id, 'type' => $type]);
    }

    /* SMS */

    public function sms($type, $key)
    {
        $title = '';
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

        return View::make('backend.pages.sms-edit', ['title' => $title, 'type' => $type])->with('key', $key);
    }

    public function sms_post()
    {
        $inputs = Input::all();

        foreach ($inputs as $key => $value) {
            $setting = Setting::firstOrNew(['key' => $key]);
            $setting->value = $value;
            $setting->save();
        }
        return Redirect::to('/dashboard/notifications')->with('alert', ['type' => 'success', 'message' => 'Personalización guardada.']);
    }

    public function sms_preview($type, $key)
    {
        $user = Auth::user();
        $text = Parser::text($user, $key);

        return View::make('emails.notify.layout-sms', ['text' => $text, 'id' => $user->id, 'type' => $type]);
    }

}