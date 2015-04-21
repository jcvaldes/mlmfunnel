<?php
use Carbon\Carbon;
use Funnel\Mailers\UserMailer as Mailer;

class UserController extends BaseController {
	protected $mailer;

    public function __construct(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

	public function dashboard()
	{
		$start = (Input::get('start')) ? Input::get('start') : null;
		$end = (Input::get('end')) ? Input::get('end') : null;

		$data = [];

		$data['visit'] = Statistic::current()->type('visit')->dates($start, $end)->get()->count();
		$data['unique'] = Statistic::current()->groupBy('ip')->dates($start, $end)->get()->count();
		$data['prospect'] = Prospect::current()->dates($start, $end)->get()->count();
		$data['convertion'] = ($data['unique']==0) ? 0 : ($data['prospect'] / $data['unique']) * 100;

		if(is_float($data['convertion'])){
			$data['convertion'] = number_format($data['convertion'], 2, '.', '');
		}

		$landing = Statistic::stats('landing', $start, $end);

		return View::make('backend.dashboard', compact('data', 'landing'));
	}


	public function dashboard_stats($page)
	{
		$start = (Input::get('start')) ? Input::get('start') : null;
		$end = (Input::get('end')) ? Input::get('end') : null;

		$data = [];

		$data['visit'] = Statistic::current()->type('visit')->page($page)->dates($start, $end)->get()->count();
		$data['unique'] = Statistic::current()->groupBy('ip')->page($page)->dates($start, $end)->get()->count();
		$data['prospect'] = Prospect::current()->type($page)->dates($start, $end)->get()->count();
		$data['convertion'] = ($data['unique']==0) ? 0 : ($data['prospect'] / $data['unique']) * 100;

		$landing = Statistic::stats($page, $start, $end);

		return View::make('backend.dashboard-stats', compact('data', 'landing'));
	}

	public function suspended()
	{
		return View::make('backend.pages.suspended');
	}

	public function index()
	{
		$users = User::all();

		return View::make('backend.users.index', compact('users'));
	}

	public function create()
	{
		return View::make('backend.users.create');
	}

	public function store()
	{
		$inputs = Input::all();
		$rules = User::$rules;
		$messages = User::$messages;

		//dd($inputs);

		$rules['password'] = $rules['password'] . '|confirmed';
		$rules['password_confirmation'] = 'required';
		unset($rules['description']);

		$v = Validator::make($inputs, $rules, $messages);

		if ($v->passes())
		{
			$user = User::create($inputs);

			if(Input::has('notify')){
				$this->mailer->welcome($user);// Send Email
			}

			return Redirect::to('/dashboard/user/' . $user->id);
		}else{
			return Redirect::back()->withInput()->withErrors($v->messages());
		}
	}


	public function show($id)
	{
		$user = User::findOrFail($id);

		return View::make('backend.users.show', compact('user'));
	}


	public function update($id)
	{
		$inputs = Input::all();

		$rules = User::$rules;
		$messages = User::$messages;

		if($inputs['password'] == ''){
			unset($rules['password']);
			unset($inputs['password']);

			unset($rules['password_confirmation']);
			unset($inputs['password_confirmation']);
		}else{
			$rules['password'] .= '|confirmed';
		}

		unset($rules['type']);
		unset($rules['username']);
		$rules['email'] .= ',email,' . $id;

		$v = Validator::make($inputs, $rules, $messages);

		if ($v->passes())
		{
			$user = User::find($id);
			$old_status = $user->status;
			$user->fill($inputs);
			if ($user->save()){
				/* mailer */
				if($old_status != $user->status){

				}
				/* :mailer */
				return Redirect::to('/dashboard/user/' . $id)->with('alert', ['type' => 'success', 'message' => 'El usuario se ha actualizado.']);
			}

		}
		return Redirect::back()->withInput()->withErrors($v->messages());
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /user/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		User::destroy($id);
		return Redirect::to('/dashboard/user');
	}


	public function page_setup()
	{
		//$inputs = Input::all();
		//dd($inputs);
		if(Input::has('aweber-code') && Input::has('page')){
			$html = new Htmldom(Input::get('aweber-code'));

			$form['meta_web_form_id'] = (isset($html->find('input[name="meta_web_form_id"]')[0]->value)) ? $html->find('input[name="meta_web_form_id"]')[0]->value : '';
			$form['listname'] = (isset($html->find('input[name="listname"]')[0]->value)) ? $html->find('input[name="listname"]')[0]->value : '';
			$form['page'] = Input::get('page');

			$aweberlist = new AweberList($form);
			if ($aweberlist->save())
			{
				return Redirect::to('/dashboard/landing')->with('alert', ['type' => 'success', 'message' => 'Cambios guardados con exito.']);;
			}

			//dd($form);
		}
		return Redirect::to('/dashboard/landing')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un error, intenta mas tarde.']);
	}

	public function delete_list($page)
	{
		$list = AweberList::current()->page($page)->first();
		if (AweberList::destroy($list->id))
		{
			return Redirect::to('/dashboard/landing')->with('alert', ['type' => 'warning', 'message' => 'Lista eliminada.']);
		}else{
			return Redirect::to('/dashboard/landing')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un error, intenta mas tarde.']);
		}
	}

	/* Payments */

	public function payments()
	{
		$payments = Payment::current()->get();
		//dd($payments->toArray());
		//echo $payments->toJson();

		return View::make('backend.payments.index', compact('payments'));
	}

	/* STATUS */

	public function status($status)
	{
		$users = User::where('status', $status)->orderBy('subscription_ends_at', 'DESC')->get();

		return View::make('backend.users.status', compact('users'))->with('status', $status);
	}
}