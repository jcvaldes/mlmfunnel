@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/font-awesome-animation/font-awesome-animation.min.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/dropzone/dropzone.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/jcrop/jquery.Jcrop.min.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/css/profile.min.css') }}">
@stop

@section('content')

<div id="main-content">
    @include('backend.partials.alert')
    <div class="row">
        <div class="col-md-12">
            <form action="/dashboard/settings" method="post" class="form-horizontal" role="form" id="settings">
                <!-- BEGIN TABS -->
                <div class="tabbable tabbable-custom form">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#general" data-toggle="tab">General</a></li>
                        <li class=""><a href="#integration" data-toggle="tab">Integración</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="space20"></div>
                        <div class="tab-pane active" id="general">
                            <div class="row profile">
                                <div class="col-md-12">

                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <div class="panel-title line">
                                                    <div class="caption"><i class="fa fa-gear c-gray m-r-10"></i> Configuración del sistema</div>
                                                </div>
                                                <div class="panel-body">


                                                    <div class="row">
                                                        <div class="control-label col-md-3">Logo: <br><small>Tamaño recomendado: 130x40px</small></div>
                                                        <div class="col-md-6">
                                                            <figure id="avatar" class="logo">

                                                                <img id="dropzone" src="{{ Setting::key('app_logo')->first()->value }}" alt=""/>
                                                                <figcaption>
                                                                    <p>Cambiar imagen</p>
                                                                </figcaption>

                                                            </figure>
                                                            <div class="font-animation logo">
                                                                <i class="fa fa-spinner faa-spin animated" style="display: inline-block; font-size:2em"></i>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="control-label col-md-3">Nombre:</div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="app_name" value="{{ Setting::key('app_name')->first()->value }}">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Correo Electronico:</div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="app_mail" value="{{ Setting::key('app_mail')->first()->value }}">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Dirección:</div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="app_address" value="{{ Setting::key('app_address')->first()->value }}">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">URL:</div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="app_url" value="{{ Setting::key('app_url')->first()->value }}">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3"></div>
                                                        <div class="col-md-6">
                                                            <label>
                                                                {{ Form::checkbox('app_export', '1', (Setting::key('app_export')->first()->value == '1')) }} Exportar prospectos
                                                            </label>
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <div class="panel-title line">
                                                    <div class="caption"><i class="fa fa-bell c-gray m-r-10"></i> Notificaciones: <br><small class="p-l-40">Envio de SMS</small></div>
                                                </div>
                                                <div class="panel-body">
                                                    <div class="row-fluid col-md-6">
                                                        <label>
                                                            {{ Form::radio('sms_way', 'heywire', (Setting::key('sms_way')->first()->value == 'heywire')) }} Via Heywire
                                                        </label>
                                                    </div>
                                                    <div class="row-fluid col-md-6">
                                                        <label>
                                                            {{ Form::radio('sms_way', 'clickatell', (Setting::key('sms_way')->first()->value == 'clickatell')) }} Via Clickatell
                                                        </label>
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

                        <div class="tab-pane" id="integration">
                            <div class="row profile">
                                <div class="col-md-12">

                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <div class="panel-title line">
                                                    <div class="caption"><i class="fa fa-dollar c-gray m-r-10"></i> PayPal</div>
                                                </div>
                                                <div class="panel-body">


                                                    <div class="row">
                                                        <div class="control-label col-md-3">Correo PayPal:</div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="paypal_mail" value="{{ Setting::key('paypal_mail')->first()->value }}">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Costo registro:</div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="payment_register-cost" value="{{ Setting::key('payment_register-cost')->first()->value }}">
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="control-label col-md-3">Costo mensualidad:</div>
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="payment_subscription-cost" value="{{ Setting::key('payment_subscription-cost')->first()->value }}">
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <div class="panel-title line">
                                                    <div class="caption"><i class="fa fa-bar-chart-o c-gray m-r-10"></i> Analytics</div>
                                                </div>
                                                <div class="panel-body">


                                                    <div class="row">
                                                        <div class="control-label col-md-3">Código:</div>
                                                        <div class="col-md-6">
                                                        <textarea name="analytics_code" rows="6" class="form-control">{{ Setting::key('analytics_code')->first()->value }}</textarea>
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



    <div class="modal fade" id="modal-view" aria-hidden="true">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <form action="#">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title" id="myModalLabel"><strong>Recortar imagen</strong> </h4>
                    </div>
                    <div class="modal-body ">

                        <div class="row">
                            <div class="col-md-12 text-center" id="image-body">

                            </div>
                        </div>

                    </div>
                    <input type="hidden" id="x" name="x" />
                    <input type="hidden" id="y" name="y" />
                    <input type="hidden" id="w" name="w" />
                    <input type="hidden" id="h" name="h" />
                    <div class="modal-footer text-center">
                        <button type="button" class="btn btn-primary" data-dismiss="modal" id="save-crop">Recortar y guardar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


</div>

@stop

@section('javascript')
<script src="{{ asset('/assets/plugins/dropzone/dropzone.min.js') }}"></script>
<script src="{{ asset('/assets/js/animations.js') }}"></script>

<script src="{{ asset('/assets/plugins/jcrop/jquery.Jcrop.min.js') }}"></script>

<script type="text/javascript">
$(document).on("ready", function() {
    $("#avatar, #avatar figcaption, #avatar p").dropzone({
        url: "/dashboard/logo",
        createImageThumbnails: false,
        init: function() {
            this.on("success", function(file) {
                $.get('/dashboard/logo', function(data) {
                   $("#avatar img").prop('src', data.logo + '?nocahe=' + Math.random());
                   $("a.navbar-brand").css('background', "url('"+data.logo + '?nocahe=' + Math.random()+"') no-repeat center");
               }, 'json');
            });

            this.on("addedfile", function(file) {
                $(".font-animation").css('display', 'inline-block');
            });

            this.on("complete", function(file) {
                $(".font-animation").css('display', 'none');
            });

            this.on("addedfile", function(file, uploadprogress) {
                console.log(uploadprogress);
            });
        }
    });

    /* RELAOD */
    var hash = window.location.hash;
    hash && $('ul.nav a[href="' + hash + '"]').tab('show');



    $('.nav-tabs a').click(function (e) {
        $(this).tab('show');
        var scrollmem = $('body').scrollTop();
        window.location.hash = this.hash;
        $('html,body').scrollTop(scrollmem);
    });


});
</script>
@stop