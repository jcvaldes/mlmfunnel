<?php

class UserController extends BaseController {

	public function dashboard()
	{
		return View::make('backend.dashboard');
	}

}