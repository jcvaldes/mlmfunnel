@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="/assets/plugins/magnific/magnific-popup.css">
<style>
    .qrcode {
      width:128px;
      height:128px;
      margin-right: auto;
      margin-left: auto;
    }

    a.url{
        text-shadow: 0 0 2px #999;
        font-size:20px;
    }
    .col-centered{
      display: block;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
</style>
@stop

@section('content')

<div id="main-content">
    @include('backend.partials.alert')

    {{-- <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading bg-blue">
                    <h3 class="panel-title"><strong>Publicidad</strong></h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <!-- 1 -->
                        <div class="col-md-6 col-sm-6 col-xs-12 table-responsive table-blue filter-right">
                            <div class="row article landing">
                                <div class="col-md-6">
                                    <div class="thumbnail">
                                        <div class="overlay">
                                            <div class="thumbnail-actions">
                                                <a href="/assets/img/landings/landing.jpg" class="btn btn-default btn-icon btn-rounded magnific" title="Landing page"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <img src="/assets/img/landings/landing.jpg" alt="/animal" class="img-responsive">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3><a href="#">Publicidad #1</a></h3>
                                    <p><br>
                                        <a class="btn btn-primary" target="_blank" href="#">Ver</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- 2 -->
                        <div class="col-md-6 col-sm-6 col-xs-12 table-responsive table-blue filter-right">
                            <div class="row article landing">
                                <div class="col-md-6">
                                    <div class="thumbnail">
                                        <div class="overlay">
                                            <div class="thumbnail-actions">
                                                <a href="/assets/img/landings/landing.jpg" class="btn btn-default btn-icon btn-rounded magnific" title="Landing page"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <img src="/assets/img/landings/landing.jpg" alt="/animal" class="img-responsive">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3><a href="#">Publicidad #2</a></h3>
                                    <p><br>
                                        <a class="btn btn-primary" target="_blank" href="#">Ver</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> --}}

    <div class="row">
    <div class="col-md-12">
        <form action="/dashboard/settings" method="post" class="form-horizontal" role="form" id="settings">
            <!-- BEGIN TABS -->
            <div class="tabbable tabbable-custom form">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#firmas" data-toggle="tab">Firmas de email</a></li>
                    <li class=""><a href="#emails" data-toggle="tab">Email para amigos</a></li>
                    <li class=""><a href="#posts" data-toggle="tab">Post para redes sociales</a></li>
                    <li class=""><a href="#images" data-toggle="tab">Graficos para redes sociales</a></li>
                </ul>
                <div class="tab-content">
                    <div class="space20"></div>
                    <div class="tab-pane active" id="firmas">
                        <div class="row profile">
                            <div class="col-md-12">

                                <div class="row profile-classic">
                                    <div class="col-md-12">
                                        <div class="panel">

                                            <div class="panel-body">

                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h1>Firma 1</h1>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <h3>¿Deseas Conocer Una Forma De Generar Ingresos Residuales y Disfrutar De Una Vida Plena De Bienestar? <br> Haz Clic Aquí: <a href="{{url()}}/landing/{{Auth::user()->username}}" "email me">{{url()}}/landing/{{Auth::user()->username}}</a></h3>
                                                    </div>
                                                    <div class="col-md-2 text-center">
                                                        <button type="button" class="btn btn-info">Copiar</button>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h1>Firma 2</h1>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <h3>¿Te gustaría verte y sentirte increíble y además estar generando ingresos al mismo tiempo? Entonces, creo que esto te gustará. <br> Clic Aquí: <a href="{{url()}}/landing/{{Auth::user()->username}}" "email me">{{url()}}/landing/{{Auth::user()->username}}</a></h3>
                                                    </div>
                                                    <div class="col-md-2 text-center">
                                                        <button type="button" class="btn btn-info">Copiar</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="tab-pane" id="emails">
                        <div class="row profile">
                            <div class="col-md-12">

                                <div class="row profile-classic">
                                    <div class="col-md-12">
                                        <div class="panel">

                                            <div class="panel-body">

                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h1>Email 1</h1>
                                                        <h3>Asunto: NOMBRE, esto me parece muy interesante, miralo y hablamos</h3>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <h4>Hola NOMBRE, cómo estás? <br>

                                                        Te escribo brevemente para compartirte un video que me parece que puede interesarte. <br>

                                                        Dale clic al enlace para verlo: <a href="{{url()}}/landing/{{Auth::user()->username}}" "email me">{{url()}}/landing/{{Auth::user()->username}}</a> <br>

                                                        Miralo cuando tengas un momento y luego hablamos de cómo te pareció :) <br>

                                                        <br>Abrazos! <br>

                                                        <br><strong>{{Auth::user()->full_name}}</strong>
                                                        </h4>
                                                    </div>
                                                    <div class="col-md-2 text-center">
                                                        <button type="button" class="btn btn-info">Copiar</button>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h1>Email 2</h1>
                                                        <h3>Asunto: NOMBRE, mira lo que encontré. Esta SUPER interesante</h3>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <h4>Qué tal NOMBRE, <br>

                                                        Quise tomarme un momento para compartirte este video. No sé si sea para ti pero definitivamente creo que tienes que verlo: <br>

                                                        Clic Aquí: <a href="{{url()}}/landing/{{Auth::user()->username}}" "email me">{{url()}}/landing/{{Auth::user()->username}}</a> <br>

                                                        Miralo con calma y después si te parece, hablamos del tema.<br>

                                                        <br>Abrazos! <br>

                                                        <br><strong>{{Auth::user()->full_name}}</strong>
                                                        </h4>
                                                    </div>
                                                    <div class="col-md-2 text-center">
                                                        <button type="button" class="btn btn-info">Copiar</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div class="tab-pane" id="posts">
                        <div class="row profile">
                            <div class="col-md-12">

                                <div class="row profile-classic">
                                    <div class="col-md-12">
                                        <div class="panel">

                                            <div class="panel-body">

                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h1>Post 1</h1>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <h4>Woow! <br><br>
                                                            La combinación para la felicidad plena: ¡Salud, Dinero y Amor! <br><br>
                                                            Del amor te encargas tú... de la Salud y el Dinero, esta oportunidad: <br><br>
                                                            Clic Aquí: <a href="{{url()}}/landing/{{Auth::user()->username}}" "email me">{{url()}}/landing/{{Auth::user()->username}}</a>
                                                        </h4>
                                                    </div>
                                                    <div class="col-md-2 text-center">
                                                        <button type="button" class="btn btn-info">Copiar</button>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h1>Post 2</h1>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <h4>Hola amigos! <br><br>
                                                            Acabo de encontrar una la combinación perfecta para verse bien, sentirse bien, al tiempo de generar ingresos.<br><br>
                                                            Más detalles en el siguiente video: <a href="{{url()}}/landing/{{Auth::user()->username}}" "email me">{{url()}}/landing/{{Auth::user()->username}}</a>
                                                        </h4>
                                                    </div>
                                                    <div class="col-md-2 text-center">
                                                        <button type="button" class="btn btn-info">Copiar</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="tab-pane" id="images">
                        <div class="row profile">
                            <div class="col-md-12">

                                <div class="row profile-classic">
                                    <div class="col-md-12">
                                        <div class="panel">

                                            <div class="panel-body">
                                                @foreach(range(1,4) as $r)
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <h1>Grafico #{{ $r }}</h1>
                                                            <img src="/assets/img/facebook/{{ $r }}.jpg" alt="">
                                                            <hr>
                                                        </div>

                                                    </div>
                                                @endforeach
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



@stop

@section('javascript')
<script src="/assets/plugins/magnific/jquery.magnific-popup.min.js"></script>
<script>
    $(document).on("ready", function(){
         /* RELAOD */
        var hash = window.location.hash;
        hash && $('ul.nav a[href="' + hash + '"]').tab('show');

        $('.nav-tabs a').click(function (e) {
            $(this).tab('show');
            var scrollmem = $('body').scrollTop();
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
        });
    })
</script>
@stop