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
                                </div>

                                <div class="col col-md-3 col-centered">
                                    <div><a class="btn btn-info m-t-10 setup-page" href="/dashboard/landings/landing"><i class="fa fa-gear"></i> Configurar</a></div>
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