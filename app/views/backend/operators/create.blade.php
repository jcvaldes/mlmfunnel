@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/css/profile.min.css') }}">
@stop

@section('content')

<div id="main-content">
    @include('backend.partials.alert')
    <div class="row">
        <div class="col-md-12">
            <form action="/operator" method="post" class="form-horizontal" role="form" id="settings">
                <!-- BEGIN TABS -->
                <div class="tabbable tabbable-custom form">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#general_settings" data-toggle="tab">Datos del operador</a></li>
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
                                                        <div class="control-label col-md-3">Nombre:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="full_name" value="">
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Usuario:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="username" id="username" value="">                                                           
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="control-label col-md-3">Password:</div> 
                                                        <div class="col-md-6">
                                                            <input type="text" class="form-control" name="password" id="password" value="">                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                    
                                    
                                    <div class="col-sm-12">
                                        <div class="align-center">
                                            <button class="btn btn-primary m-r-20 save-user">Guardar</button>
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
</div>

@stop

@section('javascript')
<script src="{{ asset('/assets/js/animations.js') }}"></script>
@stop