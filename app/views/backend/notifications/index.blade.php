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
                        <li class="active"><a href="#admin" data-toggle="tab">Administrador</a></li>
                        <li class=""><a href="#user" data-toggle="tab">Usuario</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="space20"></div>

                        <div class="tab-pane active" id="admin"> {{-- Administrador --}}
                            <div class="row profile">

                                <div class="col-md-6"> {{-- Correos que se envian a los Administradores. --}}
                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <h3 class=""><i class="fa fa-envelope c-gray m-l-10"></i> Correos electronicos.</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Nuevo usuario</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('emails', ['key'=>'admin-new-user', 'type'=>'admin']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', ['key'=>'admin-new-user', 'type'=>'admin']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">{{-- Mensajes de texto que se envian a los Administradores. --}}
                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <h3 class=""><i class="fa fa-phone c-gray m-l-10"></i> Mensajes de texto.</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Nuevo usuario</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('sms', ['key'=>'admin-new-user', 'type'=>'admin']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', ['key'=>'admin-new-user', 'type'=>'admin']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="user"> {{-- Usuario --}}
                            <div class="row profile">

                                <div class="col-md-6"> {{-- Correos que se envian a los Usuarios. --}}
                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <h3 class=""><i class="fa fa-envelope c-gray m-l-10"></i> Correos electronicos.</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Al registrarse</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('emails', ['key'=>'user-register', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', ['key'=>'user-register', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Proxima suspensión</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('emails', ['key'=>'next-suspension', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', ['key'=>'next-suspension', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Suspensión</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('emails', ['key'=>'suspension', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', ['key'=>'suspension', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Proxima desactivación</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('emails', ['key'=>'next-deactivation', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', ['key'=>'next-deactivation', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Desactivación</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('emails', ['key'=>'deactivation', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', ['key'=>'deactivation', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Reactivación</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('emails', ['key'=>'reactivation', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', ['key'=>'reactivation', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-blue pull-left"><strong>Nuevo Prospecto</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('emails', ['key'=>'new-prospect', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', ['key'=>'new-prospect', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">{{-- Mensajes de texto que se envian a los Usuarios. --}}
                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <h3 class=""><i class="fa fa-phone c-gray m-l-10"></i> Mensajes de texto.</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Al registrarse</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('sms', ['key'=>'user-register', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', ['key'=>'user-register', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Proxima suspensión</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('sms', ['key'=>'next-suspension', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', ['key'=>'next-suspension', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Suspensión</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('sms', ['key'=>'suspension', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', ['key'=>'suspension', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Proxima Desactivación</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('sms', ['key'=>'next-deactivation', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', ['key'=>'next-deactivation', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Desactivación</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('sms', ['key'=>'deactivation', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', ['key'=>'deactivation', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Reactivación</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('sms', ['key'=>'reactivation', 'type'=>'admin']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', ['key'=>'reactivation', 'type'=>'admin']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-blue pull-left"><strong>Nuevo Prospecto</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('sms', ['key'=>'new-prospect', 'type'=>'user']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', ['key'=>'new-prospect', 'type'=>'user']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {{--<div class="tab-pane" id="prospect"> {{-- Prospecto -}}
                            <div class="row profile">

                                <div class="col-md-6"> {{-- Correos que se envian a los Prospectos. -}}
                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <h3 class=""><i class="fa fa-envelope c-gray m-l-10"></i> Correos electronicos.</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Confirmación</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('emails', ['key'=>'prospect-confirm', 'type'=>'prospect']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', ['key'=>'prospect-confirm', 'type'=>'prospect']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">{{-- Mensajes de texto que se envian a los Prospectos. -}}
                                    <div class="row profile-classic">
                                        <div class="col-md-12">
                                            <div class="panel">
                                                <h3 class=""><i class="fa fa-phone c-gray m-l-10"></i> Mensajes de texto.</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="message-item">
                                        <div class="media">
                                            <div class="media-body c-gray">
                                                <div class="forum-title">
                                                    <div class="c-dark pull-left"><strong>Confirmación</strong></div>
                                                    <div class="pull-right">
                                                        <a href="{{ URL::route('sms', ['key'=>'prospect-confirm', 'type'=>'prospect']) }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', ['key'=>'prospect-confirm', 'type'=>'prospect']) }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>--}}

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

<script type="text/javascript">
$(document).on("ready", function() {
    /* BUTTONS */
    $(".type-btn").on("click", function(){
        var type = $(this).data('type');

        $("#emails-row").addClass('hide');
        $("#sms-row").addClass('hide');

        $("#"+type+"-row").removeClass('hide');

        $("button.btn-warning").removeClass('btn-inwarningfo').addClass('btn-info');
        $(this).removeClass('btn-info').addClass('btn-warning');
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