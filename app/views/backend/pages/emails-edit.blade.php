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
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title"><strong>Personalizar Correo</strong></h3>
                </div>
                <div class="panel-body">
                <form action="/dashboard/emails" method="post" class="form-horizontal" role="form" id="settings">
                    <div class="row">
                        <div class="col-md-8">
                            <h4 class="m-l-10">Asunto:</h4>                            
                            <input type="text" name="{{ $key }}:title" id="title" class="form-control m-l-10" value="{{ Setting::key($key.':title')->first()->value }}">

                            <h4 class="m-l-10">Cuerpo del mensaje:</h4>                            
                            <textarea name="{{ $key }}:body" id="body" cols="30" rows="10" class="form-control m-l-10">{{ Setting::key($key.':body')->first()->value }}</textarea>
                            
                        </div>

                        <div class="col-md-4">
                            <h4 class="m-l-10">Variables de usuario:</h4>
                            <p class="m-l-10" style="margin-bottom:27px">Utiliza los botones de abajo para personalizar tu email.</p>     

                            <span class="btn btn-md btn-info col-md-5 m-5 vars" data-code="$user->full_name">Nombre</span>
                            <span class="btn btn-md btn-info col-md-5 m-5 vars" data-code="$user->email">Email</span>
                            <span class="btn btn-md btn-info col-md-5 m-5 vars" data-code="$user->phone">Teléfono</span>
                            <span class="btn btn-md btn-info col-md-5 m-5 vars" data-code="$user->getUrl()">URL</span>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 text-center">
                            <button type="submit" class="btn btn-primary m-10">Guardar</button>
                        </div>
                    </div>
                </form>
                </div>

               

            </div>
        </div>
    </div>
</div>

@stop

@section('javascript')
    <script>
        $(document).on("ready", function(){
            var $vars = $("span.vars"),
                $title = $("#title"),
                $body = $("#body");

            var prevFocus;
            $("#title,#body").focus(function() {
                prevFocus = $(this);
            });

            $vars.on("click", function(){
                var code = "\{\{ " + $(this).data('code') + " \}\}";
                if(typeof(prevFocus) != "undefined" && prevFocus.attr('id') == 'title') {
                    $title.val($title.val() + code);
                }else if(typeof(prevFocus) != "undefined" && prevFocus.attr('id') == 'body') {
                    $body.val($body.val() + code);
                }
            });
        })
    </script>
    
@stop