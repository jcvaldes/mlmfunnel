@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.tableTools.css') }}">
@stop

@section('content')

<div id="main-content">
    @include('backend.partials.alert')

    <div class="page-title col-md-4">
        <h3><strong>Editar oferta</strong></h3>
    </div>


    <div class="row">
        <div class="col-md-12">
            {{ Form::model($offer, array('route' => array('offer.update', $offer->id), 'class' => 'form-horizontal')) }}
                <!-- BEGIN TABS -->
                <div class="tabbable tabbable-custom form">

                    <div class="tab-content">
                        <div class="space20"></div>
                        <div class="tab-pane active" id="general">
                            <div class="row profile">
                                <div class="col-md-12">

                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <div class="panel-title line">
                                                    <div class="caption"><i class="fa fa-pencil c-gray m-r-10"></i> Actualiza los datos de la oferta:</div>
                                                </div>
                                                <div class="panel-body">



                                                    <div class="row">
                                                        <div class="control-label col-md-3">Título:</div>
                                                        <div class="col-md-6">
                                                            {{ Form::text('name', Input::old('name'), ['class' => 'form-control']) }}
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Costo registro:</div>
                                                        <div class="col-md-6">
                                                            {{ Form::text('register', Input::old('register'), ['class' => 'form-control']) }}
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Costo subscripción:</div>
                                                        <div class="col-md-6">
                                                            {{ Form::text('subscription', Input::old('subscription'), ['class' => 'form-control']) }}
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Tipo:</div>
                                                        <div class="col-md-6">
                                                            {{ Form::select('type', array('monthly' => 'Mensual', 'threemonth' => 'Trimestral', 'sixmonth' => 'Semestral', 'yearly' => 'Anual')); }}

                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="control-label col-md-3">URL:</div>
                                                        <div class="col-md-8">
                                                            <pre>{{ $offer->getLink() }}</pre>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-sm-12">
                                        <div class="align-center">
                                            <button class="btn btn-primary m-r-20 save-profile">Guardar</button>
                                            <a href="/dashboard/offers" class="btn btn-default">Cancelar</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!--END TABS-->
            {{ Form::close() }}
        </div>
    </div>

</div>


@stop

@section('javascript')

<script src="{{ asset('/assets/plugins/datatables/dynamic/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.bootstrap.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.tableTools.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/table.editable.js') }}"></script>

@stop