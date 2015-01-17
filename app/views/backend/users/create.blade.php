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
            <form action="/user" method="post" class="form-horizontal" role="form" id="settings">
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
                                    <div class="row">
                                        <div class="col-md-12">
                                            <ul class="list-unstyled profile-nav col-md-3">
                                                <li>
                                                    <figure id="avatar">

                                                        <img id="dropzone" src="/assets/img/avatars/avatar1_big.png" alt=""/>    
                                                        <figcaption>
                                                            <i class="fa fa-rotate-left rotate"></i>
                                                            <p>Cambiar imagen</p>
                                                            <i class="fa fa-rotate-right rotate"></i>
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

                                                        <h1>Nuevo usuario</h1>
                                                        
                                                    
                                                        <div class="m-t-10"></div>
                                                        
                                                        <div class="m-t-20"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <hr>
                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <div class="panel-title line">
                                                    <div class="caption"><i class="fa fa-info c-gray m-r-10"></i> Datos personales</div>
                                                </div>
                                                <div class="panel-body">
                                                    
                                                    
                                                    <div class="row">
                                                        <div class="control-label col-md-3">Nombre:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="full_name" value="">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Correo Electronico:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="email" id="email" value="">
                                                            <div class="alert alert-danger fade in hide" id="email-alert">
                                                                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                                                <strong>Alerta!</strong> El correo electronico ya esta registrado en nuestra base de datos.                                        
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Tipo de usuario:</div> 
                                                        <div class="col-md-6">
                                                            <select class="form-control required" id="type" name="type">
                                                                <option selected="selected" disabled>-- Seleccione --</option>
                                                                <option value="GeneralManager">General Manager</option>
                                                                <option value="ManagerZone">Manager Zone</option>
                                                                <option value="Agent">Agent</option>
                                                                <option value="Receptionist">Receptionist</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Sucursal:</div> 
                                                        <div class="col-md-6">
                                                            <select class="form-control required" id="branch_id" name="branch_id">
                                                            <option selected="selected" disabled>-- Seleccione --</option>
                                                            @foreach ($branches as $key => $branch)
                                                            <option value="{{ $branch->id }}">{{ $branch->address }} ({{ $branch->id }})</option>
                                                            @endforeach                                                              
                                                        </select>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="col-sm-12">
                                        <div class="align-center">
                                            <button class="btn btn-primary m-r-20 save-user" disabled>Guardar</button>
                                            <a href="/" class="btn btn-default">Cancelar</a>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <!--END TABS-->
            </form>=
        </div>
    </div>



    <div class="modal fade" id="modal-view" aria-hidden="true">
        <div class="modal-dialog modal-lg">
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


$(document).on("ready", function(){
    var crop;

    $("#avatar figcaption i").on("click", function(){
        var angle = 0;
        if($(this).hasClass('fa-rotate-right')){
            angle = -90;
        }else{
            angle = 90;
        }

        // post

        $.post('/upload/rotate',{ angle : angle }, function(data, textStatus, xhr) {
            $("#avatar img").prop('src', data.avatar+'?nocahe='+Math.random());
            $("#user-header img").prop('src', data.avatar+'?nocahe='+Math.random());
        }, 'json');
    });

    $("#avatar, #avatar figcaption, #avatar p").dropzone({
        url: "/upload/",
        createImageThumbnails : false,
        init: function() {
            this.on("success", function(file) { 
                $(".font-animation").css('display', 'none');
                

                $.get('/upload', function(data) {                    
                    //$("#avatar img").prop('src', data.avatar);

                    $("#image-body").html('<img src="" id="image_crop2" style="max-width: 100%"/>');

                    $("#image_crop2").prop('src', data.upload+'?nocahe='+Math.random());
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
                            crop_2.setSelect([img_width/3, 65, img_width/1.5, 65 + 285]);
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

    function updateCoords(c)
    {
        jQuery('#x').val(c.x);
        jQuery('#y').val(c.y);
        jQuery('#w').val(c.w);
        jQuery('#h').val(c.h);
    };

    /* SAVE CROP */

    $("#save-crop").on("click", function(){
        var options = {
            x : $("#x").val(), 
            y : $("#y").val(), 
            w : $("#w").val(), 
            h : $("#h").val(),
            i : img_width
        }
        $.post('/upload/crop',options, function(data, textStatus, xhr) {
            console.log(data);
           $("#avatar img").prop('src', data.avatar+'?nocahe='+Math.random());
           crop.destroy();
       }, 'json');
    })

    /* ajax */

    $("#email").on("change", function(){
        var e = $(this).val();

        $.post('/verify-user-email', {email: e}, function(data, textStatus, xhr) {
            if(data == 'false'){
                email = false;
                $(".save-user").prop('disabled', true);
                $("#email-alert").removeClass('hide');
            }else if(data == 'true'){
                $(".save-user").prop('disabled', false);
                $("#email-alert").addClass('hide');
            }
        });
    });


});

</script>
@stop