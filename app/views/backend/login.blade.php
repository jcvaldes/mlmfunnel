<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js sidebar-large lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js sidebar-large lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js sidebar-large lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js sidebar-large"> <!--<![endif]-->

<head>
    <meta charset="utf-8">
    <title>Acceder :: {{ Setting::key('app_name')->first()->value }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta content="{{ Setting::key('app_name')->first()->value }}" name="description" />
    <meta content="themes-lab" name="author" />
    <link rel="shortcut icon" href="assets/img/favicon.png">
    <!-- END META SECTION -->
    <!-- BEGIN MANDATORY STYLE -->
    <link href="{{ asset('assets/css/icons/icons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/plugins.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/plugins/bootstrap-loading/lada.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/css/style.min.css') }}" rel="stylesheet">
    <link href="#" rel="stylesheet" id="theme-color">
    <!-- END  MANDATORY STYLE -->
    <!-- BEGIN PAGE LEVEL STYLE -->
    <link href="{{ asset('assets/css/animate-custom.css') }}" rel="stylesheet">
    <style>
    #login-block {
        padding-top: 0px;
    }
    </style>
    <!-- END PAGE LEVEL STYLE -->
    <script src="{{ asset('assets/plugins/modernizr/modernizr-2.6.2-respond-1.1.0.min.js') }}"></script>
</head>

<body class="login fade-in" data-page="login">
    <!-- BEGIN LOGIN BOX -->
    <div class="container" id="login-block">
        <div class="row">
            <div class="col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
                @include('backend.partials.alert')
                <div class="login-box clearfix animated flipInY">
                    <div class="page-icon animated bounceInDown">
                        <img src="{{ asset('assets/img/account/user-icon.png') }}" alt="Key icon">
                    </div>
                    <div class="login-logo">
                        <a href="#">
                            <img src="{{ asset('assets/img/account/login-logo.png') }}" alt="Company Logo">
                        </a>
                    </div>
                    <hr>
                    <div class="login-form">
                        <!-- BEGIN ERROR BOX -->
                        @if($errors->all())
                        <div class="alert alert-danger ">
                            <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <h4>Error!</h4>
                            @foreach ($errors->all('<li>:message</li>') as $message)
                            {{ $message }}
                            @endforeach
                        </div>
                        @endif
                        <!-- END ERROR BOX -->


                        {{ Form::open(['route' => 'login', 'method' => 'POST', 'role' => 'form', 'novalidate']) }}
                            <div class="form-group">
                                {{Form::email('email', null, ['class'=> 'input-field form-control user', 'placeholder' => 'Email'])}}
                            </div>
                            <div class="form-group">
                                {{Form::password('password', ['class' => 'input-field form-control password', 'placeholder' => 'Password'])}}
                            </div>

                            <button type="submit" class="btn btn-login ladda-button" >Login</button>
                        {{Form::close()}}

                        <div class="login-links">
                            <a href="/auth/forgot">Recuperar Contraseña</a>
                            <br>
                            <a href="http://sistemasdeprospeccion.com/hl/rolandorodas">No tienes una cuenta? <strong>Registrate</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    <!-- END LOCKSCREEN BOX -->
    <!-- BEGIN MANDATORY SCRIPTS -->
    <script src="{{ asset('assets/plugins/jquery-1.11.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-migrate-1.2.1.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-ui/jquery-ui-1.10.4.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery-mobile/jquery.mobile-1.4.2.js') }}"></script>
    <script src="{{ asset('assets/plugins/bootstrap/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/jquery.cookie.min.js') }}" type="text/javascript"></script>
    <!-- END MANDATORY SCRIPTS -->
    <!-- BEGIN PAGE LEVEL SCRIPTS -->
    <script src="{{ asset('assets/plugins/backstretch/backstretch.min.js') }}"></script>
    <script src="{{ asset('assets/plugins/bootstrap-loading/lada.min.js') }}"></script>
    <script src="{{ asset('assets/js/account.js') }}"></script>
    <!-- END PAGE LEVEL SCRIPTS -->

</body>

</html>
