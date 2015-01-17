@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/magnific/magnific-popup.css') }}">    
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.tableTools.css') }}">

<style>
[class^="icon-"], [class*=" icon-"] {
    font-size: 30px; 
}
</style>
@stop

@section('content')
<div id="main-content">
    <div class="page-title">
        <i class="icon-custom-left"></i>
        <h3><small>Sucursal #{{ $branch->id }}</small><br><strong>{{ $branch->address }}</strong></h3>
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
                                {{ Form::open(array('url' => '/branch/'.$branch->id, 'method' => 'put', 'id' => 'branch-update', 'class' => 'form-horizontal')) }}
                                    <div class="panel-title line">
                                        <div class="caption"><i class="fa fa-home c-gray m-r-10"></i> Datos de la sucursal</div>
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
                                        <label class="col-sm-2 control-label">Dirección: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <input type="text" name="address" class="form-control" value="{{ $branch->address }}">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Código postal: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <input type="text" name="zipcode" class="form-control" value="{{ $branch->zipcode }}">
                                        </div>
                                    </div>                                    

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Teléfono: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <input type="text" name="phone" class="form-control" value="{{ $branch->phone }}">
                                        </div>
                                    </div> 
                                      
                                    <input type="hidden" id="id" name="id" value="{{ $branch->id }}">

                                    <input type="hidden" id="coid" value="{{ $branch->country_id }}">
                                    <input type="hidden" id="esid" value="{{ $branch->estate_id }}">
                                    <input type="hidden" id="ciid" value="{{ $branch->city_id }}">                          
                                {{ Form::close() }}

                                {{ Form::open(array('url' => '/branch/'.$branch->id, 'method' => 'delete', 'id' => 'branch-delete')) }}
                                    <input type="hidden" id="id" name="id" value="{{ $branch->id }}">
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
            <a href="#" class="btn btn-danger delete-ad m-r-10 m-t-10"><i class="fa fa-times"></i> Eliminar sucursal</a>
            <button class="btn btn-success m-t-10" id="submit-update"><i class="fa fa-check"></i> Guardar cambios</button>
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

<script>
$(document).on("ready", function() {
    var id = $("#id").val();
    var status = '';


    $(".delete-ad").on('click', function(event) {
        event.preventDefault();

        if (confirm("Desea eliminar la sucursal? \nNo se puede revertir.")) {
            location.href = $(this).attr('href');
            $("#branch-delete").submit();
        }
    });

    $("#submit-update").on("click", function() {
        $("#branch-update").submit();
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
    
});
</script>

@stop