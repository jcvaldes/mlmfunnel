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
            <form action="/dashboard/user" method="post" class="form-horizontal" role="form" id="settings">
                <!-- BEGIN TABS -->
                <div class="tabbable tabbable-custom form">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#general_settings" data-toggle="tab">Nuevo Usuario</a></li>
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
                                                    <div class="caption"><i class="fa fa-info c-gray m-r-10"></i> Datos personales</div>
                                                </div>
                                                <div class="panel-body">

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Nombre y Apellido:</div> 
                                                        <div class="col-md-6">
                                                            {{ Form::text('full_name', Input::old('full_name'), array('class' => 'form-control')) }}
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="control-label col-md-3">Teléfono:</div> 
                                                        <div class="col-md-6">
                                                            {{ Form::text('phone', Input::old('phone'), array('class' => 'form-control')) }}
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Nombre de usuario:</div> 
                                                        <div class="col-md-6">
                                                            {{ Form::text('username', Input::old('username'), array('class' => 'form-control')) }}
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="control-label col-md-3">Correo Electrónico:</div> 
                                                        <div class="col-md-6">
                                                            {{ Form::text('email', Input::old('email'), array('class' => 'form-control')) }}
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Contraseña:</div> 
                                                        <div class="col-md-6">
                                                            {{ Form::password('password', array('class' => 'form-control')) }}
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Confirmar contraseña:</div> 
                                                        <div class="col-md-6">
                                                            {{ Form::password('password_confirmation', array('class' => 'form-control')) }}
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                    <div class="row">
                                                        <div class="control-label col-md-3">Tipo de usuario:</div> 
                                                        <div class="col-md-6">
                                                            <select class="form-control required" id="type" name="type">
                                                                <option selected="selected" disabled>-- Seleccione --</option>
                                                                <option value="admin">Administrador</option>
                                                                <option value="user">Usuario</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3"></div> 
                                                        <div class="col-md-6">
                                                            <label>
                                                            {{ Form::checkbox('notify', '1', 0) }} Enviar Notificacion Por Email
                                                        </label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div class="col-sm-12">
                                        <div class="align-center">
                                            <button class="btn btn-primary m-r-20 save-user">Guardar</button>
                                            <a href="/dashboard" class="btn btn-default">Cancelar</a>
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


</div>

@stop

@section('javascript')
<script src="{{ asset('/assets/js/animations.js') }}"></script>
@stop