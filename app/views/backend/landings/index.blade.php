@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="/assets/plugins/magnific/magnific-popup.css">
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

                            <div class="row article">
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
                                <div class="col-md-9">
                                    <h3><a href="#">Landing page</a></h3>
                                    <div class="search-info">
                                        <span class="search-date"><i class="fa fa-rocket"></i>Inactiva</span>
                                    </div>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia , nisi ut aliquid ex ea commodi consequatur? </p>
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
@stop