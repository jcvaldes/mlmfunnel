@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/magnific/magnific-popup.css') }}">    

<link href="{{ asset('/assets/plugins/datetimepicker/jquery.datetimepicker.css') }}" rel="stylesheet">
<link href="{{ asset('/assets/plugins/pickadate/themes/default.css') }}" rel="stylesheet">
<link href="{{ asset('/assets/plugins/pickadate/themes/default.date.css') }}" rel="stylesheet">
<link href="{{ asset('/assets/plugins/pickadate/themes/default.time.css') }}" rel="stylesheet">

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
                    <h3 class="panel-title"><strong>Listado</strong> de prospectos</h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12 table-responsive table-blue filter-left">

                            <div class="row">
                                

                            <div class="col-md-2">
                                <h4>Filtrar por página:</h4>
                            </div>
                            <div class="col-md-2">
                                <select class="form-control filter" id="filter-page">
                                    <option value="landing">Landing</option>
                                    <option value="herbalife">Herbalife</option>
                                    <option value="sugar">Sugar</option>
                                </select>
                            </div>

                            <div class="col col-md-8 buttons-page">

                                @foreach (range('A', 'Z') as $letra) 
                                <button type="button" class="btn btn-sm btn-info filter-word" data-word="{{ $letra }}">{{ $letra }}</button>
                                @endforeach 

                                <button type="button" class="btn btn-sm btn-danger filter-word" data-word="">Todas</button>                                 

                            </div>


                        <div class="col-md-12">
                            <hr>
                        </div>

                        
                            </div>


                            <div class="row">

                                <div class="col-md-3">
                                    <h4>Desde:</h4>
                                    <input class="pickadate form-control" id="start" data-inline="true" data-date-format="yyyy-mm-dd" type="text" placeholder="Fecha inicial" />
                                </div>

                                <div class="col-md-3">
                                    <h4 >Hasta:</h4>
                                    <input class="pickadate form-control" id="end" data-inline="true" data-date-format="yyyy-mm-dd" type="text" placeholder="Fecha final" /> 
                                </div>

                                <div class="col-md-6">
                                    <button class="btn btn-lg btn-info m-10 col-md-3" id="filter-day">Hoy</button>
                                    <button class="btn btn-lg btn-info m-10 col-md-4" id="filter-week">Semana</button>
                                    <button class="btn btn-lg btn-info m-10 col-md-3" id="filter-month">Mes</button>
                                </div>

                                <div class="col-md-12">
                                   <hr>
                               </div>


                           </div>

                           

                        <table id="datatable" cellpadding="0" cellspacing="0" border="0" class="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Letra</th>
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
                                    <td>{{ $prospect->getInitialWord() }}</td>
                                    <td>{{ $prospect->name }}</td>
                                    <td>{{ $prospect->email }} </td>
                                    <td>{{ $prospect->phone }}</td>
                                    <td>{{ $prospect->type }}</td>    
                                    <th style="text-align:center">{{ $prospect->getComputerDate() }}</th>
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
<script src="{{ asset('/assets/plugins/bootstrap-datepicker/bootstrap-datepicker.js') }}"></script>

<script src="{{ asset('/assets/plugins/bootstrap-switch/bootstrap-switch.js') }}"></script>
<script src="{{ asset('/assets/plugins/bootstrap-progressbar/bootstrap-progressbar.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dynamic/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.bootstrap.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.tableTools.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/table.editable.js') }}"></script>
<script src="{{ asset('/assets/js/table_prospects.js') }}"></script> 


@stop