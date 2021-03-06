@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/magnific/magnific-popup.css') }}">

<link href="{{ asset('/assets/plugins/datetimepicker/jquery.datetimepicker.css') }}" rel="stylesheet">
<link href="{{ asset('/assets/plugins/pickadate/themes/default.css') }}" rel="stylesheet">
<link href="{{ asset('/assets/plugins/pickadate/themes/default.date.css') }}" rel="stylesheet">
<link href="{{ asset('/assets/plugins/pickadate/themes/default.time.css') }}" rel="stylesheet">

<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.tableTools.css') }}">

<link rel="stylesheet" href="{{ asset('/assets/plugins/jnotify/jNotify.jquery.css') }}">
@stop

@section('content')

<div id="main-content">
    @include('backend.partials.alert')
            <div class="page-title col-md-4">
                <h3><strong>Facturación</strong></h3>
            </div>
            <div class="m-t-10 no-print col-md-8 text-right">
                <span class="btn btn-info m-r-10 m-b-10"><i class="fa fa-calendar m-r-10"></i> <strong>Vence el: {{Auth::user()->getSubscriptionEnds()}}</strong></span>
                @if(Auth::user()->getSubscriptionId())


                <button type="button" class="btn btn-danger m-r-10 m-b-10 unsubscribe"> <i class="fa fa-trash-o m-r-10"></i> Cancelar Subscripción</button>

                @endif

                <button type="button" class="btn btn-white m-r-10 m-b-10" onclick="window.print();"><i class="fa fa-print m-r-10"></i> Imprimir</button>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12 table-responsive">
                                    <table id="products-table" class="table table-tools table-hover">
                                        <thead>
                                            <tr>
                                                <th style="min-width:70px"><strong>ID</strong></th>
                                                <th><strong>Fecha</strong></th>
                                                <th><strong>Descripción</strong></th>
                                                <th class="text-center"><strong>Status</strong></th>
                                                <th><strong>Total</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($payments as $payment)
                                            <tr>
                                                <td>{{ $payment->getId() }}</td>
                                                <td>{{ $payment->getComputerDate() }}</td>
                                                <td>{{ $payment->description }}</td>

                                                <td class="text-center">
                                                    {{ $payment->getStatus() }}
                                                </td>

                                                @if($payment->status == 'approved')
                                                    <td>${{ $payment->total }}</td>
                                                @else
                                                    <td style="text-decoration:line-through">${{ $payment->total }}</td>
                                                @endif
                                            </tr>
                                            @endforeach

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>


<div class="modal fade" id="modal" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title"><strong>Cancelar Subscripción</strong></h4>
            </div>
            <div class="modal-body">
                <div class="row p-10 m-t-0 p-t-0">
                    <h3>Para cancelar tu subscripción sigue estos pasos:</h3>
                    <ul>
                        <li class="m-t-10"> <strong>1)</strong> Ve a <a href="http://paypal.com" target="_blank">PayPal.com</a> y accede a tu cuenta. <br> <small>(Asegurate que sea la misma con la cual te registraste)</small></li>
                        <li class="m-t-10"> <strong>2)</strong> Haz click
                        <a href="https://www.paypal.com/ve/cgi-bin/webscr?cmd=_profile-recurring-payments&encrypted_profile_id={{ Auth::user()->getSubscriptionId() }}" class="" target="_blank"> aquí</a> y te llevaremos a tu subscripción dentro de PayPal.com </li>

                        <li class="m-t-10"> <strong>3)</strong> En la parte superior encontraras el boton para cancelar tu subscripción.</li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-primary" id="save" data-dismiss="modal"><i class="fa fa-check"></i> Cerrar</button>
            </div>
        </div>
    </div>
</div>
<div class="md-overlay"></div> <!-- Overlay Element. Important: place just after last modal -->


@stop

@section('javascript')
<script src="{{ asset('/assets/plugins/bootstrap-datepicker/bootstrap-datepicker.js') }}"></script>

<script src="{{ asset('/assets/plugins/bootstrap-switch/bootstrap-switch.js') }}"></script>
<script src="{{ asset('/assets/plugins/bootstrap-progressbar/bootstrap-progressbar.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dynamic/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.bootstrap.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.tableTools.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/table.editable.js') }}"></script>
<script src="{{ asset('/assets/js/table_prospects.js') }}"></script>

<script src="{{ asset('/assets/plugins/jnotify/jNotify.jquery.min.js') }}"></script>
<script src="{{ asset('/assets/js/notifications.js') }}"></script>
<script src="{{ asset('/assets/plugins/jnotify/jNotify.jquery.min.js') }}"></script>

<script>
$(document).on("ready", function(){
    /* Filtrado */

    $(".unsubscribe").on("click", function(){
        $("#modal").modal();
    });
});
</script>
@stop