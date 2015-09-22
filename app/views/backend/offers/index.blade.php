@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.tableTools.css') }}">
@stop

@section('content')

<div id="main-content">
    @include('backend.partials.alert')

    <div class="page-title col-md-4">
        <h3><strong>Ofertas</strong></h3>
    </div>

    <div class="pull-right">
        <a href="/dashboard/offers/create" class="btn btn-success"> <i class="fa fa-plus"></i> Crear oferta</a>
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
                                        <th><strong>Oferta</strong></th>
                                        <th><strong>Registro</strong></th>
                                        <th><strong>Mensualidad</strong></th>
                                        <th class="text-center"><strong>Tipo</strong></th>
                                        <th class="text-center"><strong>Ver</strong></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($offers as $offer)
                                    <tr>
                                        <td>{{ $offer->name }}</td>
                                        <td>{{ $offer->register }}</td>
                                        <td>{{ $offer->subscription }}</td>

                                        <td class="text-center">
                                            {{ $offer->getType() }}
                                        </td>

                                        <td class="text-center">
                                            <a class="btn btn-info" title="Editar" href="/dashboard/offers/{{ $offer->id }}"> <i class="fa fa-edit"></i> </a>
                                            <a class="btn btn-danger" title="Eliminar" onclick="return confirm('Esta seguro que desea eliminar esta oferta?')" href="/dashboard/offers/{{ $offer->id }}/delete"> <i class="fa fa-trash-o"></i> </a>
                                        </td>
                                    </tr>
                                    @endforeach

                                    @if(count($offers) == 0)
                                        <tr>
                                            <td colspan="5">
                                                <h4 class="text-center">No hay ofertas</h4>
                                            </td>
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


@stop

@section('javascript')

<script src="{{ asset('/assets/plugins/datatables/dynamic/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.bootstrap.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.tableTools.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/table.editable.js') }}"></script>

@stop