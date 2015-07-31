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
                                                <a href="/assets/img/landings/landing.jpg" class="btn btn-default btn-icon btn-rounded magnific" title="Landing page"><i class="fa fa-search"></i></a>
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
                                        <a class="url" target="_blank" data-qr="qr-landing" href="{{url()}}/landing/{{Auth::user()->username}}">{{url()}}/landing/{{Auth::user()->username}}</a>
                                    </p>
                                </div>

                                <div class="col col-md-3 col-centered">
                                    <div id="qr-landing" class="qrcode"></div>
                                    <?php $list = AweberList::current()->page('landing')->first(); ?>
                                    @if(count($list) > 0)
                                    <div><a class="btn btn-primary m-t-10 edit-setup-page" data-list-data='{{ $list }}' data-page="landing" href="#"><i class="fa fa-gear"></i> Configurar</a></div>
                                    @else
                                    <div><a class="btn btn-info m-t-10 setup-page" data-page="landing" href="#"><i class="fa fa-gear"></i> Configurar</a></div>
                                    @endif
                                </div>
                            </div>


                            <div class="row article landing m-t-20">
                                <div class="col-md-3">
                                    <div class="thumbnail">
                                        <div class="overlay">
                                            <div class="thumbnail-actions">
                                                <a href="/assets/img/landings/landing.jpg" class="btn btn-default btn-icon btn-rounded magnific" title="Landing page"><i class="fa fa-search"></i></a>
                                            </div>
                                        </div>
                                        <img src="/assets/img/landings/live.png" alt="/animal" class="img-responsive">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h3><a href="#">Hangouts page</a></h3>
                                    <div class="search-info">
                                        {{--<span class="search-date"><i class="fa fa-rocket"></i>Inactiva</span>--}}
                                    </div>
                                    <p><br>
                                        <a class="url" target="_blank" data-qr="qr-live" href="{{url()}}/live/{{Auth::user()->username}}">{{url()}}/live/{{Auth::user()->username}}</a>
                                    </p>
                                </div>

                                <div class="col col-md-3 col-centered">
                                    <div id="qr-live" class="qrcode"></div>
                                    <?php $list = AweberList::current()->page('live')->first(); ?>
                                    @if(count($list) > 0)
                                    <div><a class="btn btn-primary m-t-10 edit-setup-page" data-list-data='{{ $list }}' data-page="landing" href="#"><i class="fa fa-gear"></i> Configurar</a></div>
                                    @else
                                    <div><a class="btn btn-info m-t-10 setup-page" data-page="landing" href="#"><i class="fa fa-gear"></i> Configurar</a></div>
                                    @endif
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal" id="modal-setup">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form action="/dashboard/setup-page" method="POST">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="myModalLabel"><strong>Configurar página</strong> </h4>
                </div>
                <div class="modal-body ">

                    <div class="row">
                        <div class="col-md-12" align="center">
                            <h3>Lista de aweber:</h3>
                            <textarea name="aweber-code" id="aweber-code" class="col-md-12" rows="10" placeholder="Inserta tu formulario de aweber aquí..."></textarea>
                        </div>

                    </div>

                </div>
                <div class="modal-footer text-center">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
                <input type="hidden" id="page" name="page" value="">
            </form>
        </div>
    </div>
</div>

<div class="modal" id="modal-edit-setup">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <form action="#">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="myModalLabel"><strong>Configurar página</strong> </h4>
                </div>
                <div class="modal-body ">

                    <div class="row">
                        <div class="col-md-12">
                            <h3>Lista de aweber:</h3>
                            <table class="table table-striped">

                                <tbody>
                                    <tr>
                                        <td><strong>Form ID:</strong></td>
                                        <td class="meta_web_form_id"></td>
                                    </tr>
                                    <tr>
                                        <td><strong>List ID:</strong></td>
                                        <td class="listname"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <button type="button" id="delete-list" class="btn btn-danger pull-right m-10">Eliminar lista</button>
                    </div>

                </div>
                <div class="modal-footer text-center">
                    <button type="submit" data-dismiss="modal" class="btn btn-info">Cerrar</button>
                </div>
                <input type="hidden" id="page-edit" name="page" value="">
            </form>
        </div>
    </div>
</div>

@stop

@section('javascript')
<script src="/assets/plugins/magnific/jquery.magnific-popup.min.js"></script>
<script src="/assets/plugins/qrcode/qrcode.min.js"></script>
<script>
    $(document).on("ready", function(){


        $(".setup-page").on("click", function(){
            $("#page").val($(this).data('page'));
            $("#modal-setup").modal();
        });

        $("#delete-list").on("click", function(){
            var page =  $("#page-edit").val();
            if(confirm("Esta seguro que desea eliminar la lista de aweber?\nNo se puede revertir.")){
                location.href="/dashboard/delete-list/" + page;
            }
        });


        $(".edit-setup-page").on("click", function(){
            var data = $(this).data('list-data');

            $(".meta_web_form_id").text(data.meta_web_form_id);
            $(".listname").text(data.listname);

            $("#page-edit").val($(this).data('page'));
            $("#modal-edit-setup").modal();
        });

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