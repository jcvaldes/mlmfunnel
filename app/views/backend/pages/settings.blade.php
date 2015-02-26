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
    var crop;
    var h = $(window).height();
    h = (h / 100) * 60;
    $("#avatar figcaption i").on("click", function() {
        var angle = 0;
        if ($(this).hasClass('fa-rotate-right')) {
            angle = -90;
        } else {
            angle = 90;
        }
        /* post */
        $.post('/dashboard/avatar/rotate', {
            angle: angle
        }, function(data, textStatus, xhr) {
            $("#avatar img").prop('src', data.avatar + '?nocahe=' + Math.random());
            $("#user-header img").prop('src', data.avatar + '?nocahe=' + Math.random());
        }, 'json');
    });
    $("#avatar, #avatar figcaption, #avatar p").dropzone({
        url: "/dashboard/avatar",
        createImageThumbnails: false,
        init: function() {
            this.on("success", function(file) {
                $(".font-animation").css('display', 'none');
                $.get('/dashboard/avatar', function(data) {
                    $("#avatar img").prop('src', data.avatar);
                    $("#image-body").html('<img src="" id="image_crop2" style="max-width:100%"/>');
                    $("#image_crop2").prop('src', data.avatar + '?nocahe=' + Math.random());
                    $("#modal-view").modal();
                    $('#modal-view').on('shown.bs.modal', function(e) {
                        img_width = $('#modal-view img').parent().parent().parent().width();
                        console.log(img_width);
                        $('#modal-view img').width(img_width);
                        $('#modal-view img').height('auto');
                        crop = $('#image_crop2').Jcrop({
                            bgOpacity: 0.8,
                            bgColor: 'transparent',
                            addClass: 'jcrop-dark',
                            aspectRatio: 1 / 1,
                            onSelect: updateCoords
                        }, function() {
                            crop_2 = this;
                            crop_2.setSelect([img_width / 3, 65, img_width / 1.5, 65 + 285]);
                            crop_2.setOptions({
                                bgFade: true
                            });
                            crop_2.ui.selection.addClass('jcrop-selection');
                        });
                    })
                }, 'json');
            });
            this.on("addedfile", function(file) {
                $(".font-animation").css('display', 'inline-block');
            });
        }
    });

    function updateCoords(c) {
        jQuery('#x').val(c.x);
        jQuery('#y').val(c.y);
        jQuery('#w').val(c.w);
        jQuery('#h').val(c.h);
    };
    /* SAVE CROP */
    $("#save-crop").on("click", function() {
        var options = {
            x: $("#x").val(),
            y: $("#y").val(),
            w: $("#w").val(),
            h: $("#h").val(),
            i: img_width
        }
        $.post('/dashboard/avatar/crop', options, function(data, textStatus, xhr) {
            console.log(data);
            $("#avatar img").prop('src', data.avatar + '?nocahe=' + Math.random());
            $("#user-header img").prop('src', data.avatar + '?nocahe=' + Math.random());
            crop.destroy();
        }, 'json');
    })
});
</script>
@stop