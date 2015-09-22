@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.tableTools.css') }}">
@stop

@section('content')

<div id="main-content">
    @include('backend.partials.alert')

    <div class="page-title col-md-4">
        <h3><strong>Crear oferta</strong></h3>
    </div>


    <div class="row">
        <div class="col-md-12">
            <form action="/dashboard/offer" method="post" class="form-horizontal" role="form" id="settings">
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
                                                    <div class="caption"><i class="fa fa-pencil c-gray m-r-10"></i> Ingresa los datos de la oferta:</div>
                                                </div>
                                                <div class="panel-body">

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Título:</div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="name">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Costo registro:</div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="register">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Costo subscripción:</div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="subscription">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Tipo:</div>
                                                        <div class="col-md-6">
                                                            <select name="type">
                                                                <option>-- Seleccione --</option>
                                                                <option value="monthly">Mensual</option>
                                                                <option value="threemonth">Trimestral</option>
                                                                <option value="sixmonth">Semestral</option>
                                                                <option value="yearly">Anual</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-sm-12">
                                        <div class="align-center">
                                            <button class="btn btn-primary m-r-20 save-profile">Guardar</button>
                                            <a href="/" class="btn btn-default">Cancelar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <!--END TABS-->
            </form>
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