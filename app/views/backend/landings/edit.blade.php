@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/magnific/magnific-popup.css') }}">    
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.tableTools.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/dropzone/dropzone.css') }}">

<link rel="stylesheet" href="{{ asset('/assets/css/profile.min.css') }}">

<style>
[class^="icon-"], [class*=" icon-"] {
    font-size: 30px; 
}
</style>
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

                                            <img id="dropzone" src="{{ $property->image }}" alt="{{ $property->address }}"/>    
                                            <figcaption>
                                                <p>Cambiar imagen</p> 
                                            </figcaption>

                                        </figure>
                                        <div class="font-animation">
                                            <i class="fa fa-spinner faa-spin animated" style="display: inline-block; font-size:2em"></i> 
                                        </div>
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
                                            <div class="m-t-20"></div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col-md-12">
                                {{ Form::open(array('url' => '/property/'.$property->id, 'method' => 'put', 'id' => 'property-update', 'class' => 'form-horizontal')) }}
                                <div class="panel-title line">
                                    <div class="caption"><i class="fa fa-home c-gray m-r-10"></i> Datos de la propiedad</div>
                                </div>



                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Código de Plataforma: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7">
                                        <input type="text" name="plattformCode" class="form-control" value="{{ $property->plattformCode }}">
                                    </div>
                                </div>  

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Dirección: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7">
                                        <input type="text" name="address" class="form-control" value="{{ $property->address }}">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Pais: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7">
                                        <select class="form-control required" id="country_id" name="country_id">
                                            <option selected="selected" disabled>-- Seleccione --</option>          
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Provincia: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7">
                                        <select class="form-control required" id="estate_id" name="estate_id">
                                            <option selected="selected" disabled>-- Seleccione --</option>          
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Ciudad: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7">
                                        <select class="form-control required" id="city_id" name="city_id">
                                            <option selected="selected" disabled>-- Seleccione --</option>          
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Código postal: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7">
                                        <input type="text" name="zipcode" class="form-control" value="{{ $property->zipcode }}">
                                    </div>
                                </div> 

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Estrato: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7">
                                        <input id="stratus" name="stratus" type="text" class="form-control required" value="{{ $property->stratus }}">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Valor comercial: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7">
                                        <input id="valor_comercial" name="valor_comercial" type="text" class="form-control required" value="{{ $property->valor_comercial }}">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Valor oportunidad: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7">
                                        <input id="valor_oportunidad" name="valor_oportunidad" type="text" class="form-control required" value="{{ $property->valor_oportunidad }}">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label">Descripción: <span class="asterisk">*</span></label>
                                    <div class="col-sm-7">
                                        <textarea name="description" rows="5" class="form-control" placeholder="">{{ $property->description }}</textarea>
                                    </div>
                                </div>                                   

                                <input type="hidden" id="id" name="id" value="{{ $property->id }}">

                                <input type="hidden" id="coid" value="{{ $property->country_id }}">
                                <input type="hidden" id="esid" value="{{ $property->estate_id }}">
                                <input type="hidden" id="ciid" value="{{ $property->city_id }}">                          
                                {{ Form::close() }}

                                {{ Form::open(array('url' => '/property/'.$property->id, 'method' => 'delete', 'id' => 'property-delete')) }}
                                <input type="hidden" id="id" name="id" value="{{ $property->id }}">
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
            <a href="#" class="btn btn-danger delete-ad m-r-10 m-t-10"><i class="fa fa-times"></i> Eliminar propiedad</a>
            <button class="btn btn-success m-t-10" id="submit-update"><i class="fa fa-check"></i> Guardar cambios</button>
        </div>
    </div>

</div>


<div class="modal fade" id="modal-filter" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <form action="#">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="myModalLabel"><strong>Filtrar estadisticas</strong> </h4>
                </div>
                <div class="modal-body ">                   

                    <div class="row" align="center">
                        <h3>Desde:</h3>
                        <div class="datepicker start" data-inline="true" data-date-format="yyyy-mm-dd"></div>
                    </div>

                    <div class="row" align="center">
                        <h3>Hasta:</h3>
                        <div class="datepicker end" data-inline="true" data-date-format="yyyy-mm-dd"></div>
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


<script>
$(document).on("ready", function() {
    var id = $("#id").val();
    var status = '';


    $(".delete-ad").on('click', function(event) {
        event.preventDefault();

        if (confirm("Desea eliminar el inmueble? \nNo se puede revertir.")) {
            location.href = $(this).attr('href');
            $("#property-delete").submit();
        }
    });

    $("#submit-update").on("click", function() {
        $("#property-update").submit();
    });

    /* ajax */

    var $countries = $("#country_id");
    var $estates = $("#estate_id");
    var $cities = $("#city_id");

    var $coid = $("#coid").val();
    var $esid = $("#esid").val();
    var $ciid = $("#ciid").val();

    $.get('/api/country', function(data, textStatus, xhr) {
        $.each(data, function(index, val) {   
            if(val.id == $coid){
                var option = '<option value="' + val.id + '" selected>' + val.name + '</option>';
            }else{
                var option = '<option value="' + val.id + '">' + val.name + '</option>';
            }
            $countries.append(option);
        });
    }, 'json');

    $.get('/api/country/' + $coid, function(data, textStatus, xhr) {
        $.each(data, function(index, val) {   
            if(val.id == $esid){
                var option = '<option value="' + val.id + '" selected>' + val.name + '</option>';
            }else{
                var option = '<option value="' + val.id + '">' + val.name + '</option>';
            }
            $estates.append(option);
        });
    }, 'json');

    $.get('/api/estate/' + $esid, function(data, textStatus, xhr) {
        $.each(data, function(index, val) {   
            if(val.id == $ciid){
                var option = '<option value="' + val.id + '" selected>' + val.name + '</option>';
            }else{
                var option = '<option value="' + val.id + '">' + val.name + '</option>';
            }
            $cities.append(option);
        });
    }, 'json');

    /* */

    $countries.on("change", function() {
        var id = $(this).val();
        loadEstates(id);
    });

    function resetEstates() {
        $estates.empty();
        var option = '<option> -- Seleccione --</option>';
        $estates.append(option);
    }

    function loadEstates(id) {
        resetEstates();

        $.get('/api/country/' + id, function(data, textStatus, xhr) {
            $.each(data, function(index, val) {
                var option = '<option value="' + val.id + '">' + val.name + '</option>';                
                $estates.append(option);
            });
        }, 'json');

    }

    $estates.on("change", function() {
        var id = $(this).val();
        loadCities(id);
    });

    function resetCities() {
        $cities.empty();
        var option = '<option> -- Seleccione --</option>';
        $cities.append(option);
    }

    function loadCities(id) {
        resetCities();

        $.get('/api/estate/' + id, function(data, textStatus, xhr) {
            $.each(data, function(index, val) {
                var option = '<option value="' + val.id + '">' + val.name + '</option>';                
                $cities.append(option);
            });
        }, 'json');

    }

    /* Imagen */

    var url = "/property/image/{{$property->id}}";

    $("#avatar, #avatar figcaption, #avatar p").dropzone({
        url: url,
        createImageThumbnails : false,
        init: function() {
            this.on("success", function(file) { 
                $(".font-animation").css('display', 'none');
                

                $.get('/property/image/{{$property->id}}', function(data) {                    
                    $("#avatar img").prop('src', data.image);
                    
                }, 'json');


            });

            this.on("addedfile", function(file) { 
                $(".font-animation").css('display', 'inline-block');
            });
        }
    });

    
});
</script>


<script src="{{ asset('assets/plugins/datetimepicker/jquery.datetimepicker.js')}}"></script>
<script src="{{ asset('assets/plugins/bootstrap-datepicker/bootstrap-datepicker.js')}}"></script>
<script src="{{ asset('assets/plugins/pickadate/picker.js')}}"></script>
<script src="{{ asset('assets/plugins/pickadate/picker.date.js')}}"></script>
<script src="{{ asset('assets/plugins/pickadate/picker.time.js')}}"></script>
<script src="{{ asset('assets/plugins/bootstrap-switch/bootstrap-switch.js')}}"></script>
<script src="{{ asset('assets/plugins/bootstrap-progressbar/bootstrap-progressbar.js')}}"></script>

<script>
    
    /* Filtrado */

    $(".filter").on("click", function(){
        $("#modal-filter").modal();
    });


    $('#filter-action').on('click', function (e) {
        var start = $('.start').data('date') || '';
        var end = $('.end').data('date') || '';
        location.href = "?start="+start+"&end="+end;
    })



</script>

@stop