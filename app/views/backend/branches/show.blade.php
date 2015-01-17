@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/magnific/magnific-popup.css') }}">    
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.tableTools.css') }}">
@stop

@section('content')
<div id="main-content">
    <div class="page-title">
        <i class="icon-custom-left"></i>
        <h3 class="pull-left"><small>Sucursal #{{ $branch->id }}</small><br><strong>{{ $branch->address }}</strong></h3>

        @if(Auth::user()->isAdmin())
        <a href="/branch/{{ $branch->id }}/edit" class="btn btn-primary btn-lg pull-right m-t-30">Editar</a>
        @endif
        <br>

        @include('backend.partials.alert')

    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="tabcordion">
                <ul id="myTab" class="nav nav-tabs">
                    <li class="active"><a href="#branch_general" data-toggle="tab">General</a></li>                    
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="branch_general">
                        <div class="row">
                            <div class="col-md-12">
                                {{ Form::open(array('url' => '#', 'class' => 'form-horizontal')) }}
                                    <div class="panel-title line">
                                        <div class="caption"><i class="fa fa-home c-gray m-r-10"></i> Datos de la sucursal</div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Pais: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7  m-t-10">
                                            {{ $branch->country->name }}
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Provincia: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7  m-t-10">
                                            {{ $branch->estate->name }}
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Ciudad: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7  m-t-10">
                                            {{ $branch->city->name }}
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Dirección: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7  m-t-10">
                                            {{ $branch->address }}
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Código postal: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7  m-t-10">
                                            {{ $branch->zipcode }}
                                        </div>
                                    </div>                                    

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Teléfono: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7  m-t-10">
                                            {{ $branch->phone }}
                                        </div>
                                    </div> 
                                      
                                    <input type="hidden" id="id" name="id" value="{{ $branch->id }}">

                                    <input type="hidden" id="coid" value="{{ $branch->country_id }}">
                                    <input type="hidden" id="esid" value="{{ $branch->estate_id }}">
                                    <input type="hidden" id="ciid" value="{{ $branch->city_id }}">                          
                                {{ Form::close() }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12 m-t-20 m-b-40 align-center">
            <a href="/branch" class="btn btn-default m-r-10 m-t-10"><i class="fa fa-reply"></i> Volver</a>
        </div>
    </div>
</div>

@stop

@section('javascript')
<script src="{{ asset('/assets/plugins/magnific/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('/assets/plugins/bootstrap-switch/bootstrap-switch.js') }}"></script>
<script src="{{ asset('/assets/plugins/bootstrap-progressbar/bootstrap-progressbar.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dynamic/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.bootstrap.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.tableTools.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/table.editable.js') }}"></script>
<script src="{{ asset('/assets/js/table_dynamic.js') }}"></script>
<script src="{{ asset('/assets/js/ecommerce.js') }}"></script>
@stop