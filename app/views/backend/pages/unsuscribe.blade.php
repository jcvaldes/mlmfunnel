<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js sidebar-large lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js sidebar-large lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js sidebar-large lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js sidebar-large"><!--<![endif]-->

<head>
    <!-- BEGIN META SECTION -->
    <meta charset="utf-8">
    <title>Unsuscribe :: {{ Setting::key('app_name')->first()->value }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta content="" name="description" />
    <meta content="themes-lab" name="author" />
    <link rel="shortcut icon" href="assets/img/favicon.png">
    <!-- END META SECTION -->
    <!-- BEGIN MANDATORY STYLE -->
    <link href="/assets/css/icons/icons.min.css" rel="stylesheet">
    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="/assets/css/plugins.min.css" rel="stylesheet">
    <link href="/assets/css/style.min.css" rel="stylesheet">
    <link href="404.html#" rel="stylesheet" id="theme-color">
    <!-- END  MANDATORY STYLE -->
    <script src="/assets/plugins/modernizr/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>

<body class="error-page">
    <div class="row">
        <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-offset-1 col-xs-10">
            <div class="error-container">
                <div class="error-main">                    
                    <h2>Administrar Suscripción</h2>
                    
                    <h4>Seleccione cuales notificaciones desea recibir:</h4>
                    <br>
                    <form action="/dashboard/unsuscribe" method="post" class="form-horizontal">
                    <div class="row profile-classic">
                        <div class="col-md-12">

                            <div class="panel-body">
                                <div class="row-fluid col-md-6">
                                    <label>
                                        {{ Form::checkbox('notif_email', 1, $user->notif_email) }} Via Email
                                    </label>                                    
                                </div>
                                <div class="row-fluid col-md-6">
                                    <label>
                                        {{ Form::checkbox('notif_phone', 1, $user->notif_phone) }} Via Teléfono
                                    </label>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <br>
                    <button class="btn btn-dark" type="submit">Guardar</button>
                    </form>                    
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="copyright">© {{ Setting::key('app_name')->first()->value }}</div>
    </div>

    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/assets/plugins/jquery-1.11.js"></script>
    <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
    <script src="/assets/plugins/bootstrap/bootstrap.min.js"></script>
    <script src="/assets/plugins/nprogress/nprogress.js" type="text/javascript"></script>
    <script src="/assets/js/application.js"></script>
</body>

</html>
