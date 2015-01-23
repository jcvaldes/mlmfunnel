@extends('backend.layouts.master')

@section('css')
    <link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.css') }}">
    <link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.tableTools.css') }}">
    
@stop

@section('content')

<div id="main-content">
    @include('backend.partials.alert')    
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading bg-blue">
                    <h3 class="panel-title"><strong>Listado</strong> de clientes</h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12 table-responsive table-blue filter-left">
                            <div class="col-md-3">
                                <h4>Filtrar por landing:</h4>
                            </div>
                            <div class="col-md-3">
                                <select class="form-control" id="landingpages">
                                    <option ="landing">Landing</option>
                                    <option ="herbalife">Herbalife</option>
                                    <option ="sugar">Sugar</option>
                                </select>
                            </div>
                            <div class="col-md-12">
                                <hr>
                            </div>
                            
                            <table id="datatable" cellpadding="0" cellspacing="0" border="0" class="table table-striped table-hover table-dynamic table-tools">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Teléfono</th>
                                        <th>Landing</th>
                                        <th style="text-align:center">Miembro desde</th>
                                        <th style="text-align:center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($prospects as $key => $prospect)      
                                    <tr>
                                        <td>{{ $prospect->name }}</td>
                                        <td>{{ $prospect->email }} </td>
                                        <td>{{ $prospect->phone }}</td>
                                        <td>{{ $prospect->type }}</td>
                                        <th style="text-align:center">{{ $prospect->getHumanDate() }}</th>
                                        <td style="text-align:center"><a href="/prospect/{{ $prospect->id }}" class="btn btn-info">Ver mas</a></td>
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

@stop

@section('javascript')
    <script src="{{ asset('/assets/plugins/bootstrap-switch/bootstrap-switch.js') }}"></script>
    <script src="{{ asset('/assets/plugins/bootstrap-progressbar/bootstrap-progressbar.js') }}"></script>
    <script src="{{ asset('/assets/plugins/datatables/dynamic/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('/assets/plugins/datatables/dataTables.bootstrap.js') }}"></script>
    <script src="{{ asset('/assets/plugins/datatables/dataTables.tableTools.js') }}"></script>
    <script src="{{ asset('/assets/plugins/datatables/table.editable.js') }}"></script>
    <script src="{{ asset('/assets/js/table_prospects.js') }}"></script>
@stop