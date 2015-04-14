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
                    <h3 class="panel-title"><strong>Mensaje de texto:</strong> {{ $title or '' }}</h3>
                </div>
                <div class="panel-body">
                <form action="/dashboard/emails" method="post" class="form-horizontal" role="form" id="settings">
                    <div class="row">
                        <div class="col-md-8">

                            <h4 class="m-l-10">Texto: <small>Maximo: 160 caracteres</small></h4>
                            <textarea name="{{ $key }}:text" id="text" cols="30" rows="10" class="form-control m-l-10">{{ Setting::key($key.':text')->first()->value }}</textarea>

                        </div>

                        <div class="col-md-4">
                            <h4 class="m-l-10">Variables de usuario:</h4>
                            <p class="m-l-10" style="margin-bottom:27px">Utiliza los botones de abajo para personalizar tu email.</p>

                            <span class="btn btn-md btn-info col-md-5 m-5 vars" data-code="name">Nombre</span>
                            <span class="btn btn-md btn-info col-md-5 m-5 vars" data-code="email">Email</span>
                            <span class="btn btn-md btn-info col-md-5 m-5 vars" data-code="phone">Teléfono</span>
                            <span class="btn btn-md btn-info col-md-5 m-5 vars" data-code="url">URL</span>
                            <span class="btn btn-md btn-info col-md-5 m-5 vars" data-code="system">Sistema</span>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 text-center">
                            <a href="/dashboard/settings#notifications" class="btn btn-danger m-10">Cancelar</a>
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
            $("#text").focus(function() {
                prevFocus = $(this);
            });

            $vars.on("click", function(){
                var code = "%" + $(this).data('code') + "%";
                if(typeof(prevFocus) != "undefined" && prevFocus.attr('id') == 'text') {
                    insertAtCaret('text', code);
                    //$title.val($title.val() + code);
                }
            });
        })

        function enableTab(id) {
            var el = document.getElementById(id);
            el.onkeydown = function(e) {
                if (e.keyCode === 9) {
                    var val = this.value,
                    start = this.selectionStart,
                    end = this.selectionEnd;
                    this.value = val.substring(0, start) + '\t' + val.substring(end);
                    this.selectionStart = this.selectionEnd = start + 1;
                    return false;
                }
            };
        }
        enableTab('text');


        function insertAtCaret(areaId,text) {
            var txtarea = document.getElementById(areaId);
            var scrollPos = txtarea.scrollTop;
            var strPos = 0;
            var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
                "ff" : (document.selection ? "ie" : false ) );
            if (br == "ie") {
                txtarea.focus();
                var range = document.selection.createRange();
                range.moveStart ('character', -txtarea.value.length);
                strPos = range.text.length;
            }
            else if (br == "ff") strPos = txtarea.selectionStart;

            var front = (txtarea.value).substring(0,strPos);
            var back = (txtarea.value).substring(strPos,txtarea.value.length);
            txtarea.value=front+text+back;
            strPos = strPos + text.length;
            if (br == "ie") {
                txtarea.focus();
                var range = document.selection.createRange();
                range.moveStart ('character', -txtarea.value.length);
                range.moveStart ('character', strPos);
                range.moveEnd ('character', 0);
                range.select();
            }
            else if (br == "ff") {
                txtarea.selectionStart = strPos;
                txtarea.selectionEnd = strPos;
                txtarea.focus();
            }
            txtarea.scrollTop = scrollPos;
        }
    </script>

@stop