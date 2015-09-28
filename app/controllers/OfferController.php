<?php
use Funnel\Mailers\UserMailer as Mailer;

class OfferController extends BaseController {

    protected $mailer;

    public function __construct(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    /* Offers */
    public function index()
    {
        $offers = Offer::all();
        return View::make('backend.offers.index', compact('offers'));
    }

    public function create()
    {
        return View::make('backend.offers.create');
    }

    public function store()
    {
        $inputs = Input::all();

        $offer = new Offer($inputs);
        if ($offer->save())
        {
            return Redirect::to('/dashboard/offers')->with('alert', ['type' => 'success', 'message' => 'Oferta guardada.']);;
        }
        return Redirect::to('/dashboard/offers')->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un error, intenta mas tarde.']);
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
        $offer = Offer::findOrFail($id);
        return View::make('backend.offers.show', compact('offer'));
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
        $offer = Offer::findOrFail($id);
        $offer->fill($inputs);
        if ($offer->save())
        {
            return Redirect::to('/dashboard/offers/' . $id)->with('alert', ['type' => 'success', 'message' => 'Datos guardados.']);
        }
        dd($property->getErrors());
        return Redirect::to('/dashboard/offers/' . $id)->with('alert', ['type' => 'danger', 'message' => 'Ocurrio un error, intenta mas tarde.']);
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
        Offer::destroy($id);
        return Redirect::to('/dashboard/offers')->with('alert', ['type' => 'success', 'message' => 'La oferta ha sido eliminada.']);
    }

    public function apiGet()
    {
        header('Access-Control-Allow-Origin: *');
        $offers = Offer::all();
        return $offers->toJson();
    }

}