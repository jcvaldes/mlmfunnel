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

    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading bg-blue">
                    <h3 class="panel-title"><strong>Publicidad</strong></h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        {{-- 1 --}}
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

                        {{-- 2 --}}
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
    </div>
</div>


@stop

@section('javascript')
<script src="/assets/plugins/magnific/jquery.magnific-popup.min.js"></script>
<script>
    $(document).on("ready", function(){


    })
</script>
@stop