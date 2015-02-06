<?php
use Carbon\Carbon;
class UserController extends BaseController {

	public function dashboard()
	{
		$start = (Input::get('start')) ? Input::get('start') : null;
		$end = (Input::get('end')) ? Input::get('end') : null;

		$data = [];
       
        $data['visit'] = Statistic::current()->type('visit')->dates($start, $end)->get()->count();
        $data['unique'] = Statistic::current()->groupBy('ip')->dates($start, $end)->get()->count();
        $data['prospect'] = Prospect::current()->dates($start, $end)->get()->count();
        $data['convertion'] = ($data['unique']==0) ? 0 : ($data['prospect'] / $data['unique']) * 100;

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


	

}