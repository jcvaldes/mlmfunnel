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
            <div class="page-title col-md-12">
                @if($status == 'active')
                    <h3><strong>Activos</strong></h3>
                @elseif($status == 'belated')
                    <h3><strong>Atrasados</strong></h3>
                @elseif($status == 'suspended')
                    <h3><strong>Suspendidos</strong></h3>
                @elseif($status == 'inactive')
                    <h3><strong>Inactivos</strong></h3>
                @endif                
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
                                                <th><strong>Nombre</strong></th>
                                                <th><strong>Correo</strong></th>
                                                <th><strong>Telefono</strong></th>                                                
                                                <th class="text-center"><strong>Status</strong></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            @foreach($users as $user)
                                           
                                            <tr>
                                                <td>{{ $user->id }}</td>
                                                <td>{{ $user->full_name }}</td>
                                                <td>{{ $user->email }}</td>
                                                <td>{{ $user->phone }}</td>

                                                <td class="text-center">
                                                    {{ $user->getStatus() }}                                                    
                                                </td>

                                                                                               
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