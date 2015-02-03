<?php
use Carbon\Carbon;
class StatisticController extends BaseController {
	
	/**
	 * Store a newly created resource in storage.
	 * POST /api/statistic/{id}/{type}
	 *
	 * @return Response
	 */
	public function store($id, $page, $type)
	{
		header('Access-Control-Allow-Origin: *');

		$user = User::find($id);
		if(isset($user->id)){
			$data['user_id'] = $id;
			$data['page'] = $page;
			$data['type'] = $type;
			$data['ip'] = Request::getClientIp();

			$statistic = new Statistic($data);
			if ($statistic->save())
			{
				return $statistic->toJson();
			}

			return $statistic->getErrors();
		}
		
	}

	/**
	 * Store a newly created resource in storage.
	 * GET /api/statistic/{id}
	 *
	 * @return Response
	 */
	public function show($id)
	{

		$start = (Input::get('start')) ? Input::get('start') : Carbon::now()->subMonth(1);
		$end = (Input::get('end')) ? Input::get('end') : Carbon::now();


		$property = Property::find($id);
		if(isset($property->id)){
			$statistics = DB::table('statistics')
			->select(DB::raw('DATE(created_at) as date'), DB::raw('property_id, type'), DB::raw('count(*) as views'))
			->groupBy('date', 'type')
			->where('property_id', $id)
			->whereBetween('created_at', array($start, $end))
			->get();
			$data = [];
			foreach ($statistics as $key => $statistic) {
				$data[$statistic->date][$statistic->type] = $statistic->views;
			}
			return json_encode($data);
		}
		
	}

	/**
	 * Store a newly created resource in storage.
	 * GET /api/statistic/{id}
	 *
	 * @return Response
	 */
	public function statistics()
	{
		/*$statistics = DB::table('statistics')
		->select(DB::raw('DATE(created_at) as date'), DB::raw('property_id, type'), DB::raw('count(*) as views'))
		->groupBy('date', 'type')
		->get();*/

		$start = (Input::get('start')) ? Input::get('start') : Carbon::now()->subMonth(1);
		$end = (Input::get('end')) ? Input::get('end') : Carbon::now();


		$statistics = DB::table('statistics')
		->select(DB::raw('DATE(created_at) as date'), DB::raw('user_id, type'), DB::raw('count(*) as views'))
		->whereBetween('created_at', array($start, $end))
		->groupBy('date', 'type')
		->get();


		$data = [];
		foreach ($statistics as $key => $statistic) {
			$data[$statistic->date][$statistic->type] = $statistic->views;

		}

		return json_encode($data);

	}

	

	
	    
}