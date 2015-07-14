<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js sidebar-large lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js sidebar-large lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js sidebar-large lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js sidebar-large"> <!--<![endif]-->

<head>
    <!-- BEGIN META SECTION -->
    <meta charset="utf-8">
    <title>Registro :: {{ Setting::key('app_name')->first()->value }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta content="" name="description" />
    <meta content="themes-lab" name="author" />
    <link rel="shortcut icon" href="/assets/img/favicon.png">
    <!-- END META SECTION -->
    <!-- BEGIN MANDATORY STYLE -->
    <link href="/assets/css/icons/icons.min.css" rel="stylesheet">
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/css/plugins.min.css" rel="stylesheet">
    <link href="/assets/plugins/bootstrap-loading/lada.min.css" rel="stylesheet">
    <link href="/assets/css/style.min.css" rel="stylesheet">
    <link href="#" rel="stylesheet" id="theme-color">
    <!-- END  MANDATORY STYLE -->
    <!-- BEGIN PAGE LEVEL STYLE -->
    <link href="/assets/css/animate-custom.css" rel="stylesheet">
    <style>
    #login-block {
        padding-top: 0px;
    }
    </style>
    <!-- END PAGE LEVEL STYLE -->
    <script src="/assets/plugins/modernizr/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>

<body class="login fade-in" data-page="signup" >
    <!-- START SIGNUP BOX -->
    <div class="container" id="login-block">
        <div class="row">
            <div class="col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
                <div class="login-box clearfix animated flipInY">
                    <div class="page-icon animated bounceInDown">
                        <img src="/assets/img/account/register-icon.png" alt="Register icon" />
                    </div>

                    <div class="login-form">
                        <!-- Start Error box -->
                        @if($errors->all())
	                        <div class="alert alert-danger ">
	                            <button type="button" class="close" data-dismiss="alert">&times;</button>
	                            <h4>Error!</h4>
	                            @foreach ($errors->all('<li>:message</li>') as $message)
								    {{ $message }}
								@endforeach
	                        </div>
                        @endif
                        <h3>¡Registrate!</h3>
                        <hr>
                        <!-- End Error box -->
                        {{ Form::open(['route' => 'register', 'method' => 'POST', 'role' => 'form', 'novalidate']) }}
                        	{{ Form::text('full_name', Input::old('full_name'), array('placeholder'=>'Nombre y Apellido:', 'class' => 'input-field')) }}

                        	{{ Form::text('phone', Input::old('phone'), array('placeholder'=>'Teléfono:', 'class' => 'input-field')) }}

                            {{ Form::text('username', Input::old('username'), array('placeholder'=>'Nombre de usuario:', 'class' => 'input-field')) }}

							{{ Form::text('email', Input::old('email'), array('placeholder'=>'Correo Electrónico:', 'class' => 'input-field')) }}

							{{ Form::password('password', array('placeholder'=>'Contraseña:', 'class' => 'input-field')) }}

                            {{ Form::password('password_confirmation', array('placeholder'=>'Confirmar contraseña:', 'class' => 'input-field')) }}

                            <button  type="submit" class="btn btn-login ladda-button" data-style="expand-left"><span class="ladda-label">Registrar</span></button>

                        {{Form::close()}}

                        <div class="login-links">
                            <a href="/auth/forgot">Olvidaste tu contraseña?</a>
                            <br>
                            <a href="/auth/login">Ya tienes una cuenta? <strong>Acceder</strong></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- END SIGNUP BOX -->
    <!-- BEGIN MANDATORY SCRIPTS -->
    <script src="/assets/plugins/jquery-1.11.js"></script>
    <script src="/assets/plugins/jquery-migrate-1.2.1.js"></script>
    <script src="/assets/plugins/jquery-ui/jquery-ui-1.10.4.min.js"></script>
    <script src="/assets/plugins/jquery-mobile/jquery.mobile-1.4.2.js"></script>
    <script src="/assets/plugins/bootstrap/bootstrap.min.js"></script>
    <script src="/assets/plugins/jquery.cookie.min.js" type="text/javascript"></script>
    <!-- END MANDATORY SCRIPTS -->
    <!-- BEGIN PAGE LEVEL SCRIPTS -->
    <script src="/assets/plugins/backstretch/backstretch.min.js"></script>
    <script src="/assets/plugins/bootstrap-loading/lada.min.js"></script>
    <script src="/assets/js/account.js"></script>
    <!-- END PAGE LEVEL SCRIPTS -->

    @if(Setting::key('show-chat-register')->first()->value=='1')
    {{ Setting::key('chat-code')->first()->value }}
    @endif
</body>

</html>
