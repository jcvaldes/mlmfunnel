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
                <span class="btn btn-info m-r-10 m-b-10"><i class="fa fa-calendar m-r-10"></i> <strong>Vence el: {{ Auth::user()->getSubscriptionEnds() }}</strong></span>
                <a href="{{ URL::route('payments.subscription') }}" class="btn btn-primary m-r-10 m-b-10"><i class="fa fa-dollar m-r-10"></i> Pagar Mensualidad</a>
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
                                                <th><strong>Token</strong></th>
                                                <th><strong>Descripción</strong></th>                                                
                                                <th class="text-center"><strong>Status</strong></th>
                                                <th><strong>Total</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php $total = 0; ?>
                                            @foreach($payments as $payment)
                                            @if($payment->status == 'approved')
                                                <?php $total += $payment->total; ?>
                                            @endif
                                            <tr>
                                                <td>{{ $payment->getId() }}</td>
                                                <td>{{ $payment->getComputerDate() }}</td>
                                                <td>{{ $payment->token }}</td>
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
                                            @if(count($payments))
                                            <tr>
                                                <td colspan="4"></td>
                                                <td class="text-right"><strong>Total: </strong></td>
                                                <td>${{ $total }}</td>
                                            </tr>
                                            @endif
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>


<div class="modal fade" id="modal-prospect" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 class="modal-title"><strong>Editar prospecto</strong></h4>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="field-1" class="control-label">Nombre</label>
                            <input type="text" class="form-control" id="name" name="name" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="field-2" class="control-label">Teléfono</label>
                            <input type="text" class="form-control"  id="phone" name="phone" placeholder="">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label for="field-3" class="control-label">Email</label>
                            <input type="text" class="form-control" id="email" name="email" placeholder="">
                        </div>
                    </div>
                </div>                
            </div>
            <div class="modal-footer text-center">
                <input type="hidden" id="id" value=""/>

                <button type="button" class="btn btn-primary" id="save" data-dismiss="modal"><i class="fa fa-check"></i> Guardar</button>
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
@stop