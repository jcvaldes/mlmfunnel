@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/magnific/magnific-popup.css') }}">    
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.tableTools.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/dropzone/dropzone.css') }}">
@stop

@section('content')
<div id="main-content">
    <div class="page-title">
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
                                <ul class="list-unstyled profile-nav col-md-3">
                                    <li>
                                        <figure id="avatar">

                                            <img src="{{ $property->image }}" alt="{{ $property->address }}"/>   
                                            

                                        </figure>                                        
                                    </li>
                                </ul>


                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-md-12 profile-info">
                                            <h1>{{ $property->address }}</h1>
                                            <p style="font-size:18px">Propiedad #{{ $property->id }}</p>
                                            <div class="m-t-10"></div>
                                            <ul class="list-unstyled list-inline">
                                                <li class="m-r-20" style="font-size:24px"><i class="fa fa-bar-chart-o p-r-5 c-blue"></i> {{ $property->getStatistic('visit')}} Visitas</li>
                                                <li class="m-r-20" style="font-size:24px"><i class="fa fa-envelope p-r-5 c-green"></i> {{ $property->getStatistic('mail')}} Correos</li>
                                            </ul>
                                            
                                            @if(Auth::user()->isAdmin())
                                            <a href="/property/{{ $property->id }}/edit" class="btn btn-primary btn-lg pull-right">Editar</a>
                                            @endif
                                            <div class="m-t-20"></div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col-md-12">
                                {{ Form::open(array('url' => '#', 'class' => 'form-horizontal')) }}
                                <div class="panel-title line">
                                    <div class="caption"><i class="fa fa-home c-gray m-r-10"></i> Datos de la propiedad</div>
                                </div>



                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Cód. de Plataforma: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7 m-t-10">
                                        {{ $property->plattformCode }}
                                    </div>
                                </div>  

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Dirección: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7 m-t-10">
                                        {{ $property->address }}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Pais: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7 m-t-10">
                                        {{ $property->country->name }}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Provincia: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7 m-t-10">
                                        {{ $property->estate->name }}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Ciudad: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7 m-t-10">
                                        {{ $property->city->name }}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Código postal:</label>
                                    <div class="col-sm-7 m-t-10">
                                        {{ $property->zipcode }}
                                    </div>
                                </div> 

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Estrato: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7 m-t-10">
                                        {{ $property->stratus }}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Valor Comercial: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7 m-t-10">
                                        {{ $property->valor_comercial }}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Valor Oportunidad: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7 m-t-10">
                                        {{ $property->valor_oportunidad }}
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Descripción:</label>
                                    <div class="col-sm-7 m-t-10">
                                        {{ $property->description }}
                                    </div>
                                </div>                                   

                                <input type="hidden" id="coid" value="{{ $property->country_id }}">
                                <input type="hidden" id="esid" value="{{ $property->estate_id }}">
                                <input type="hidden" id="ciid" value="{{ $property->city_id }}">                          
                                {{ Form::close() }}
                            </div>
                        </div>

                        <hr>

                        <div class="panel-title line">
                            <div class="caption"><i class="fa fa-bar-chart-o c-gray m-r-10"></i> Estadísticas</div>
                        </div>

                        <br>

                        <div class="row">
                            <div class="col-md-12">
                                <div id="graph-wrapper">
                                    <div class="graph-info p-r-10">
                                        <a href="javascript:void(0)" class="btn bg-green">Correos</a>
                                        <a href="javascript:void(0)" class="btn bg-blue">Visitas</a>
                                        <a href="javascript:void(0)" class="btn bg-purple filter">Filtrar</a>
                                        <button href="#" id="bars" class="btn" disabled>
                                            <span></span>
                                        </button>
                                        <button href="#" id="lines" class="btn active" disabled>
                                            <span></span>
                                        </button>
                                    </div>
                                    <div class="h-300">
                                        <div class="h-300" id="graph-lines" style="width: 100%"></div>
                                        <div class="h-300" id="graph-bars" style="width: 100%"></div>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" id="chart-property-id" value="{{ $property->id }}">
                            <input type="hidden" id="start" value="{{ Input::get('start') }}">
                            <input type="hidden" id="end" value="{{ Input::get('end') }}">
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


<div class="modal" id="modal-filter">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form action="#">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="myModalLabel"><strong>Filtrar notificaciones</strong> </h4>
                </div>
                <div class="modal-body ">   

                <div class="row">
                    <div class="col-md-6" align="center">
                        <h3>Desde:</h3>
                        <div class="datepicker start" data-inline="true" data-date-format="yyyy-mm-dd"></div>
                    </div>

                    <div class="col-md-6" align="center">
                        <h3>Hasta:</h3>
                        <div class="datepicker end" data-inline="true" data-date-format="yyyy-mm-dd"></div>
                    </div>                    
                </div>                

                    

                </div>        
                <div class="modal-footer text-center">
                    <button type="button" class="btn btn-primary" data-dismiss="modal" id="filter-action">Filtrar</button>
                </div>
            </form>
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
<script src="{{ asset('/assets/plugins/dropzone/dropzone.min.js') }}"></script>



<script src="{{ asset('assets/plugins/charts-flot/jquery.flot.js') }}"></script>
<script src="{{ asset('assets/plugins/charts-flot/jquery.flot.animator.min.js') }}"></script>
<script src="{{ asset('assets/plugins/charts-flot/jquery.flot.resize.js') }}"></script>
<script src="{{ asset('assets/plugins/charts-flot/jquery.flot.time.min.js') }}"></script>
<script src="{{ asset('assets/plugins/charts-morris/raphael.min.js') }}"></script>
<script src="{{ asset('assets/plugins/charts-morris/morris.min.js') }}"></script>
<script src="{{ asset('assets/js/dashboard.angular.js') }}"></script>


<script src="{{ asset('assets/plugins/datetimepicker/jquery.datetimepicker.js')}}"></script>
<script src="{{ asset('assets/plugins/bootstrap-datepicker/bootstrap-datepicker.js')}}"></script>
<script src="{{ asset('assets/plugins/pickadate/picker.js')}}"></script>
<script src="{{ asset('assets/plugins/pickadate/picker.date.js')}}"></script>
<script src="{{ asset('assets/plugins/pickadate/picker.time.js')}}"></script>
<script src="{{ asset('assets/plugins/bootstrap-switch/bootstrap-switch.js')}}"></script>
<script src="{{ asset('assets/plugins/bootstrap-progressbar/bootstrap-progressbar.js')}}"></script>

<script>
$(document).on("ready", function(){
    /* Filtrado */
    $("#modal-filter").modal();
    $("#modal-filter").modal('hide');

    $(".filter").on("click", function(){
        $("#modal-filter").modal();
    });


    $('#filter-action').on('click', function (e) {
        var d = new Date();
        var defaultDate = d.getFullYear() +"-"+ ('0' + (d.getMonth()+1)).slice(-2) +"-"+ ('0' + d.getDate()).slice(-2);
        var start = $('.start').data('date') || defaultDate;
        var end = $('.end').data('date') || defaultDate;
        location.href = "?start="+start+"&end="+end;
    })
});
</script>
@stop