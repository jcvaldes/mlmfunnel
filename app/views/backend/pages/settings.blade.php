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
                        <li class="active"><a href="#general_settings" data-toggle="tab">Datos personales</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="space20"></div>
                        <div class="tab-pane active" id="general_settings">
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
                                                    <div class="caption"><i class="fa fa-facebook c-gray m-r-10"></i> Redes Sociales</div>
                                                </div>
                                                <div class="panel-body">                                                   

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Twitter:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="app_twitter" value="{{ Setting::key('app_twitter')->first()->value }}">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Facebook:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="app_facebook" value="{{ Setting::key('app_facebook')->first()->value }}">
                                                        </div>
                                                    </div> 

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Google+:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="app_google" value="{{ Setting::key('app_google')->first()->value }}">
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
                                                    <div class="caption"><i class="fa fa-bell c-gray m-r-10"></i> Notificaciones:</div>
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
    
});
</script>
@stop