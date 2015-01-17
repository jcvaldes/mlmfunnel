@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/wizard/wizard.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/jquery-steps/jquery.steps.css') }}">
<style>
.wizard-inline > .content
{
    min-height: 29em !important;
}
.wizard-inline > .steps > ul > li
{
    width: 100%;
}
</style>
@stop

@section('content')

<div id="main-content">    
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>Ingreso de <strong>Sucursal</strong></h3>
                            <p>Completa el siguiente formulario:</p>
                            <!-- BEGIN FORM WIZARD WITH VALIDATION -->
                            <form class="form-wizard" action="/branch" method="POST">

                                <h1>Datos de la Sucursal</h1>
                                <section>
                                    <div class="form-group col-md-6">
                                        <label for="branchid">Número de Sucursal *</label>
                                        <input id="branchid" name="branchid" type="text" class="form-control " disabled value="{{ $id['id'] }}">
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="country_id">País *</label>
                                        <select class="form-control required" id="country_id" name="country_id">
                                            <option selected="selected" disabled>-- Seleccione --</option>          
                                        </select>
                                    </div> 

                                    <div class="form-group col-md-6">
                                        <label for="estate_id">Estado *</label>
                                        <select class="form-control required" id="estate_id" name="estate_id">
                                            <option selected="selected" disabled>-- Seleccione --</option>
                                        </select>
                                    </div>

                                    <div class="form-group col-md-6">
                                        <label for="city_id">Ciudad *</label>
                                        <select class="form-control required" id="city_id" name="city_id">
                                            <option selected="selected" disabled>-- Seleccione --</option>                                                                                                          
                                        </select>
                                    </div>   


                                    
                                    <div class="form-group col-md-6">
                                        <label for="address">Dirección *</label>
                                        <input id="address" name="address" type="text" class="form-control required">
                                    </div>

                                    
                                    <div class="form-group col-md-6">
                                        <label for="zipcode">Código Postal</label>
                                        <input id="zipcode" name="zipcode" type="text" class="form-control">
                                    </div>		

                                    
                                    <div class="form-group col-md-6">
                                        <label for="phone">Teléfono</label>
                                        <input id="phone" name="phone" type="text" class="form-control">
                                    </div>                                                                 

                                    <p class="pull-left m-20">(*) Obligatorio</p>

                                    
                                </section>                                
                            </form>
                            <!-- END FORM WIZARD WITH VALIDATION -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@stop

@section('javascript')

<script type="text/javascript" src="{{ asset('/assets/plugins/jquery-validation/jquery.validate.min.js') }}"></script>
<script type="text/javascript" src="{{ asset('/assets/plugins/jquery-validation/additional-methods.min.js') }}"></script>
<script src="{{ asset('/assets/plugins/wizard/wizard.js') }}"></script>
<script src="{{ asset('/assets/plugins/jquery-steps/jquery.steps.js') }}"></script>



<script>
$(document).on("ready", function(){

    var email = false;

    /****  Inline Form Wizard with Validation  ****/
    $(".form-wizard").steps({
        bodyTag: "section",
        onStepChanging: function (event, currentIndex, newIndex) {
            if (currentIndex > newIndex) {
                return true;
            } 
            

            var form = $(this);
            // Clean up if user went backward before
            if (currentIndex < newIndex) {
                // To remove error styles
                $(".body:eq(" + newIndex + ") label.error", form).remove();
                $(".body:eq(" + newIndex + ") .error", form).removeClass("error");
            }
            // Disable validation on fields that are disabled or hidden.
            form.validate().settings.ignore = ":disabled,:hidden";
            // Start validation; Prevent going forward if false
            return form.valid();
        },
        onStepChanged: function (event, currentIndex, priorIndex) {


        },
        onFinishing: function (event, currentIndex) {
            var form = $(this);
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex) {
            var form = $(this);
            form.submit();
        }
    }).validate({
        errorPlacement: function (error, element) {
            element.before(error);
        },
        rules: {}
    });

    /* ajax */

    var $countries = $("#country_id");
    var $estates = $("#estate_id");
    var $cities = $("#city_id");


    $.get('/api/country', function(data, textStatus, xhr) {
        $countries.prop('disabled', true);
        $.each(data, function(index, val) {            
            var option = '<option value="' + val.id + '">' + val.name + '</option>';
            $countries.append(option);
        });
        $countries.prop('disabled', false);
    }, 'json');

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
        $estates.prop('disabled', true);
        resetEstates();

        $.get('/api/country/' + id, function(data, textStatus, xhr) {
            $.each(data, function(index, val) {
                var option = '<option value="' + val.id + '">' + val.name + '</option>';                
                $estates.append(option);
            });
            $estates.prop('disabled', false);
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
        $cities.prop('disabled', true);
        resetCities();

        $.get('/api/estate/' + id, function(data, textStatus, xhr) {
            $.each(data, function(index, val) {
                var option = '<option value="' + val.id + '">' + val.name + '</option>';                
                $cities.append(option);
            });
            $cities.prop('disabled', false);
        }, 'json');

    }
    
});


</script>

@stop








