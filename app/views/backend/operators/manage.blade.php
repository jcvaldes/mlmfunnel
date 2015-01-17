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
            {{ Form::open(array('url' => '/operator/'.$operator->id, 'method' => 'put', 'id' => 'operator-update', 'class' => 'form-horizontal')) }}
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
                                                    <div class="caption"><i class="fa fa-info c-gray m-r-10"></i> Editar operador</div>
                                                </div>
                                                <div class="panel-body">
                                                    
                                                    
                                                    <div class="row">
                                                        <div class="control-label col-md-3">Nombre:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="full_name" value="{{ $operator->full_name }}">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Usuario:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="username" id="username" value="{{ $operator->username }}">                                                           
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Password:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="password" id="password" value="{{ $operator->password }}">                                                           
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
            {{ Form::close() }}
        </div>
    </div>

</div>

@stop

@section('javascript')
<script src="{{ asset('/assets/js/animations.js') }}"></script>
@stop