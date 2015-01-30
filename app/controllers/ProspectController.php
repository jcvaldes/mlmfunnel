<?php

class ProspectController extends BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /branch
	 *
	 * @return Response
	 */        
	public function index()
	{
		if(Input::has('ref') && Input::get('ref') == 'notify'){
			$n = Notification::unread()->find((int) Input::get('n'));
			$n->read();			
		}

		$prospects = Prospect::current()->get();
		return View::make('backend.prospects.index', compact('prospects'));
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /branch/create
	 *
	 * @return Response
	 */
	public function create()
	{
		return View::make('backend.landings.create');
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /branch
	 *
	 * @return Response
	 */
	public function store()
	{
		$inputs = Input::all();
		//$inputs['template_id'] = 1;
		$inputs['user_id'] = Auth::user()->id;
		

		$landing = new Landing($inputs);
		if ($landing->save())
		{
			return Redirect::to('/dashboard/landing')->with('alert', ['type' => 'success', 'message' => 'El landing ha sido guardado.']);;			
		}        
		dd($landing->getErrors());
        return Redirect::to('/dashboard/landing')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un error, intenta mas tarde.']);;

	}

	/**
	 * Display the specified resource.
	 * GET /branch/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$property = Landing::findOrFail($id);
		return View::make('backend.landings.show', compact('property'));
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /branch/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		$property = Property::findOrFail($id);
		return View::make('backend.landings.edit', compact('property'));
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /branch/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$inputs = Input::all();
		$property = Property::findOrFail($id);
		$property->fill($inputs);
		if ($property->save())
		{
			return Redirect::to('/property/' . $id)->with('alert', ['type' => 'success', 'message' => 'Datos guardados.']);			
		}        
		dd($property->getErrors());
        return Redirect::to('/property/' . $id)->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un error, intenta mas tarde.']);
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /branch/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		Property::destroy($id);
		return Redirect::to('/property')->with('alert', ['type' => 'success', 'message' => 'El inmueble ha sido borrado.']);
	}

	public function add_image()
	{

		$file = Input::file('file');
        $destinationPath = public_path() . '/uploads/landings/';
        $filename = str_random(16)."_".$file->getClientOriginalName();
        $upload_success = Input::file('file')->move($destinationPath, $filename);

        if ($upload_success) {
            $property = '/uploads/landings/' . $filename;

            Session::put('property', $property);
            $response = ['property' => $property, 'success' => 200];

            return Response::json($response);
        } else {
            return Response::json('error', 400);
        }
	}


	/* Imagen */

	# Imagen Upload
    public function post_image($id)
    {
    	$property = Property::findOrFail($id);
    	if($property){
    		$file = Input::file('file');
	        $destinationPath = public_path() . '/uploads/landings/';
	        $filename = str_random(16)."_".$file->getClientOriginalName();
	        $upload_success = Input::file('file')->move($destinationPath, $filename);

	        if ($upload_success) {
	            $image = '/uploads/landings/' . $filename;

	            if(File::exists( public_path() . $property->image )){
	            	Croppa::delete($property->image);
	            }

	            $property->image = $image;
	            $property->save();

	            $response = ['image' => $image, 'success' => 200];

	            return Response::json($response);
	        } else {
	            return Response::json('error', 400);
	        }
    	}
        
    }
    
    # Get Imagen
    public function get_image($id)
    {
    	$property = Property::findOrFail($id);
    	if($property){
        	return Response::json(['image' => $property->image]);
    	}
                
    }

    public function api_index()
    {
    	$property = Property::all();
		return $property->toJson();
    }

    
}