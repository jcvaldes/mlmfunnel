@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="/assets/plugins/magnific/magnific-popup.css">
<style>
    .qrcode {
      width:160px;
      height:160px;
      margin-top:15px;
    }

    a.url{
        text-shadow: 0 0 2px #999;
        font-size:24px;
    }
</style>
@stop

@section('content')

<div id="main-content">
    @include('backend.partials.alert')
    
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading bg-blue">
                    <h3 class="panel-title"><strong>Listado</strong> de landings</h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12 table-responsive table-blue filter-right">

                            <div class="row article landing">
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <div class="overlay">
                                            <div class="thumbnail-actions">
                                                <a href="/assets/img/landings/landing.jpg" class="btn btn-default btn-icon btn-rounded magnific" title="/animal 1"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <img src="/assets/img/landings/landing.jpg" alt="/animal" class="img-responsive">
                                    </div>    
                                </div>
                                <div class="col-md-6">
                                    <h3><a href="#">Landing page</a></h3>
                                    <div class="search-info">
                                        {{--<span class="search-date"><i class="fa fa-rocket"></i>Inactiva</span>--}}
                                    </div>
                                    <p><br>
                                        <a class="url" data-qr="qr-landing" href="{{url()}}/{{Auth::user()->username}}/landing">{{url()}}/{{Auth::user()->username}}/landing</a>
                                    </p>                                    
                                </div>

                                <div class="col col-md-3 center">
                                    <div id="qr-landing" class="qrcode"></div>
                                    <div><a class="btn btn-info f-right m-t-10" href="/dashboard/landing/configure/"><i class="fa fa-gear"></i> Configurar</a></div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@stop

@section('javascript')
<script src="/assets/plugins/magnific/jquery.magnific-popup.min.js"></script>
<script src="/assets/plugins/qrcode/qrcode.min.js"></script>
<script>
    $(document).on("ready", function(){
        
        $.each($("a.url"), function(index, el) {
            var qrcode = new QRCode($(this).data('qr'), {
                text: $(this).text(),
                width: 128,
                height: 128,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
        });
    })
</script>
@stop