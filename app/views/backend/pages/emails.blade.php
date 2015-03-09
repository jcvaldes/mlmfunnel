@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/font-awesome-animation/font-awesome-animation.min.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/dropzone/dropzone.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/jcrop/jquery.Jcrop.min.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/css/profile.min.css') }}">
<style>
    .media,
    .forum-title{
        margin-top: 0px;
    }

    .c-blue{
        padding-top: 10px;
    }
</style>
@stop

@section('content')

<div id="main-content">
    @include('backend.partials.alert')

    <div class="col-md-12">
        <div class="panel forum-questions" style="display: block;">
            <div class="panel-heading no-bd bg-dark">
                <h3 class="panel-title">Configuración de correos</h3>
            </div>
            <div class="panel-body p-0">
                <div class="row-fluid">



                    <div class="message-item">
                        <a href="/dashboard/emails/email-new-prospect">
                        <div class="media">
                            <div class="media-body c-gray">
                                <div class="forum-title">
                                    <div class="c-blue pull-left"><strong>Notificación de nuevo prospecto creado.</strong>
                                    </div>

                                    <a href="/dashboard/emails/email-new-prospect/preview" class="btn btn-primary pull-right">Vista previa</a>
                                </div>
                                
                            </div>
                        </div>
                        </a>
                    </div>


                    <div class="message-item">
                        <a href="/dashboard/emails/email-welcome">
                        <div class="media">
                            <div class="media-body c-gray">
                                <div class="forum-title">
                                    <div class="c-blue pull-left"><strong>Email de bienvenida con datos de acceso a nueva cuenta creada.</strong>
                                    </div>
                                    <a href="/dashboard/emails/email-welcome/preview" class="btn btn-primary pull-right">Vista previa</a>
                                </div>
                                
                            </div>
                        </div>
                        </a>
                    </div>


                    <div class="message-item">
                        <a href="/dashboard/emails/email-next-suspension">
                        <div class="media">
                            <div class="media-body c-gray">
                                <div class="forum-title">
                                    <div class="c-blue pull-left"><strong>Notificación de fecha próxima a suspensión de cuenta.</strong>
                                    </div>
                                    <a href="/dashboard/emails/email-next-suspension/preview" class="btn btn-primary pull-right">Vista previa</a>
                                </div>
                                
                            </div>
                        </div>
                        </a>
                    </div>


                    <div class="message-item">
                        <a href="/dashboard/emails/email-suspension">
                        <div class="media">
                            <div class="media-body c-gray">
                                <div class="forum-title">
                                    <div class="c-blue pull-left"><strong>Notificación de suspensión de cuenta.</strong>
                                    </div>
                                    <a href="/dashboard/emails/email-suspension/preview" class="btn btn-primary pull-right">Vista previa</a>
                                </div>
                                
                            </div>
                        </div>
                        </a>
                    </div>

                    <div class="message-item">
                        <a href="/dashboard/emails/email-next-desactivate">
                        <div class="media">
                            <div class="media-body c-gray">
                                <div class="forum-title">
                                    <div class="c-blue pull-left"><strong>Notificación de fecha próxima a desactivación de cuenta.</strong>
                                    </div>
                                    <a href="/dashboard/emails/email-next-desactivate/preview" class="btn btn-primary pull-right">Vista previa</a>
                                </div>
                                
                            </div>
                        </div>
                        </a>
                    </div>

                    <div class="message-item">
                        <a href="/dashboard/emails/email-desactivate">
                        <div class="media">
                            <div class="media-body c-gray">
                                <div class="forum-title">
                                    <div class="c-blue pull-left"><strong>Notificación de desactivación de cuenta.</strong>
                                    </div>
                                    <a href="/dashboard/emails/email-desactivate/preview" class="btn btn-primary pull-right">Vista previa</a>
                                </div>
                                
                            </div>
                        </div>
                        </a>
                    </div>


                </div>
            </div>
        </div>
    </div>

</div>

@stop

@section('javascript')
<script src="{{ asset('/assets/js/forum.js') }}"></script>
@stop