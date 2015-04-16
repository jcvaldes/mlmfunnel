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
                        <li class=""><a href="#prospect" data-toggle="tab">Prospecto</a></li>
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
                                                        <a href="{{ URL::route('emails', 'admin-new-user') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', 'admin-new-user') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('sms', 'admin-new-user') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', 'admin-new-user') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('emails', 'user-register') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', 'user-register') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('emails', 'next-suspension') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', 'next-suspension') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('emails', 'suspension') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', 'suspension') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('emails', 'next-deactivation') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', 'next-deactivation') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('emails', 'deactivation') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', 'deactivation') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('emails', 'reactivation') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', 'reactivation') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('emails', 'new-prospect') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', 'new-prospect') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('sms', 'user-register') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', 'user-register') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('sms', 'next-suspension') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', 'next-suspension') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('sms', 'suspension') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', 'suspension') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('sms', 'next-deactivation') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', 'next-deactivation') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('sms', 'deactivation') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', 'deactivation') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('sms', 'reactivation') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', 'reactivation') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
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
                                                        <a href="{{ URL::route('sms', 'new-prospect') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', 'new-prospect') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane" id="prospect"> {{-- Prospecto --}}
                            <div class="row profile">

                                <div class="col-md-6"> {{-- Correos que se envian a los Prospectos. --}}
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
                                                        <a href="{{ URL::route('emails', 'prospect-confirm') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('emails-p', 'prospect-confirm') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">{{-- Mensajes de texto que se envian a los Prospectos. --}}
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
                                                        <a href="{{ URL::route('sms', 'prospect-confirm') }}" class="btn btn-success btn-sm" title="Editar"> <i class="fa fa-edit"></i> </a>
                                                        <a target="_blank" href="{{ URL::route('sms-p', 'prospect-confirm') }}" class="btn btn-primary btn-sm" title="Vista previa"> <i class="fa fa-external-link-square"></i> </a>
                                                    </div>
                                                </div>
                                            </div>
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
<script src="{{ asset('/assets/plugins/dropzone/dropzone.min.js') }}"></script>
<script src="{{ asset('/assets/js/animations.js') }}"></script>

<script src="{{ asset('/assets/plugins/jcrop/jquery.Jcrop.min.js') }}"></script>

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