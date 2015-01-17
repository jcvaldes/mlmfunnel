@extends('backend.layouts.master')

@section('css')
<link rel="stylesheet" href="{{ asset('/assets/plugins/magnific/magnific-popup.css') }}">    
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/datatables/dataTables.tableTools.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/plugins/font-awesome-animation/font-awesome-animation.min.css') }}">

<style>
[class^="icon-"], [class*=" icon-"] {
    font-size: 30px; 
}

.big-icon{
    font-size: 80px;
}
</style>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-rc.5/angular.min.js"></script>
<script src="{{ asset('/assets/js/assign-manager.angular.js')}}"></script>
@stop

@section('content')
<div ng-app="assignManagerApp">
    <div id="main-content">
        <div class="page-title">
            <i class="icon-custom-left"></i>
            <h3 class="pull-left"><small>Cliente #{{ $customer->id }}</small><br><strong>{{ $customer->name }} {{ $customer->lastname }}</strong></h3>

            @if(Auth::user()->isAdmin() && $customer->manager_id == NULL)
            <a href="#" id="assign" class="btn btn-primary pull-right m-20"> Asignar </a>
            @endif

            @if($customer->manager_id != NULL)
            {{ $customer->getEstado() }}
            @endif

            <div class="font-animation pull-right hide">
                <i class="fa fa-spinner faa-spin animated" style="display: inline-block; font-size:2em;border:none;"></i> 
            </div>

            <br>

            @include('backend.partials.alert')

        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="tabcordion">
                    <ul id="myTab" class="nav nav-tabs">
                        <li class="active"><a href="#customer_general" data-toggle="tab">General</a></li>                    
                    </ul>
                    <div id="myTabContent" class="tab-content">
                        <div class="tab-pane fade active in" id="customer_general">
                            <div class="row">
                                <div class="col-md-12">
                                    {{ Form::open(array('url' => '/customer/'.$customer->id, 'method' => 'put', 'id' => 'customer-update', 'class' => 'form-horizontal')) }}
                                    <div class="panel-title line">
                                        <div class="caption"><i class="fa fa-phone c-gray m-r-10"></i> Datos del cliente</div>
                                    </div>



                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Nombres: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <input type="text" name="name" class="form-control" value="{{ $customer->name }}">
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Apellidos: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <input type="text" name="lastname" class="form-control" value="{{ $customer->lastname }}">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Correo electrónico: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <input type="email" name="email" class="form-control" value="{{ $customer->email }}">
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Teléfono: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <input type="text" name="phone" class="form-control" value="{{ $customer->phone }}">
                                        </div>
                                    </div>

                                    <hr>
                                    <div class="panel-title line">
                                        <div class="caption"><i class="fa fa-home c-gray m-r-10"></i> Datos del inmueble</div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Código del inmueble: <span class="asterisk">*</span></label>
                                        <div class="col-sm-5">
                                            <input type="text" name="code" class="form-control" value="{{ $customer->code }}">
                                        </div>
                                        <div class="col-sm-2">
                                            <a href="/property/{{ $customer->code }}" class="btn btn-info" target="_blank"> Ver</a>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Categoría: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <select class="form-control required" id="category_id" name="category_id">
                                                <option selected="selected" disabled>-- Seleccione --</option>
                                                @foreach ($categories as $key => $category)
                                                <option value="{{ $category->id }}" 
                                                    @if($category->id == $customer->category_id) selected @endif
                                                    >{{ $category->category }}
                                                </option>
                                                @endforeach                                                              
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Ciudad: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <select class="form-control required" id="city_id" name="city_id">
                                                <option selected="selected" disabled>-- Seleccione --</option>
                                                @foreach ($cities as $key => $city)
                                                <option value="{{ $city->id }}" 
                                                    @if($city->id == $customer->city_id) selected @endif
                                                    >{{ $city->name }}
                                                </option>
                                                @endforeach                                                              
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Portal: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <select class="form-control required" id="portal_id" name="portal_id">
                                                <option selected="selected" disabled>-- Seleccione --</option>
                                                @foreach ($portals as $key => $portal)
                                                <option value="{{ $portal->id }}" 
                                                    @if($portal->id == $customer->portal_id) selected @endif
                                                    >{{ $portal->portal }}
                                                </option>
                                                @endforeach                                                              
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Servicio: <span class="asterisk">*</span></label>
                                        <div class="col-sm-7">
                                            <select class="form-control required" id="service_id" name="service_id">
                                                <option selected="selected" disabled>-- Seleccione --</option>
                                                @foreach ($services as $key => $service)
                                                <option value="{{ $service->id }}" 
                                                    @if($service->id == $customer->service_id) selected @endif
                                                    >{{ $service->service }}
                                                </option>
                                                @endforeach                                                              
                                            </select>
                                        </div>
                                    </div>


                                    <hr>
                                    <div class="panel-title line">
                                        <div class="caption"><i class="fa fa-home c-gray m-r-10"></i> Observaciones</div>
                                    </div>


                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Observación:</label>
                                        <div class="col-sm-7">
                                            <textarea rows="6" name="observation" class="form-control">{{ $customer->observation }}</textarea>
                                        </div>
                                    </div>

                                    <input type="hidden" id="id" name="id" value="{{ $customer->id }}">                          
                                    {{ Form::close() }}

                                    {{ Form::open(array('url' => '/customer/'.$customer->id, 'method' => 'delete', 'id' => 'customer-delete')) }}
                                    <input type="hidden" id="id" name="id" value="{{ $customer->id }}">
                                    {{ Form::close() }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 m-t-20 m-b-40 align-center">
                <a href="/customer" class="btn btn-default m-r-10 m-t-10"><i class="fa fa-reply"></i> Volver</a>
                @if(Auth::user()->isCreator())
                <a href="#" class="btn btn-danger delete-ad m-r-10 m-t-10"><i class="fa fa-times"></i> Eliminar cliente</a>
                <button class="btn btn-success m-t-10" id="submit-update"><i class="fa fa-check"></i> Guardar cambios</button>
                @endif
            </div>
        </div>


    </div>


    @if($customer->estado == 'prospecto')
    <div class="modal fade" id="modal" aria-hidden="true" style="display: none;" ng-controller="ManagerZoneListCtrl">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title"><strong>Selecciona</strong> el ManagerZone </h4>
                    <input type="text" class="form-control" placeholder="Filtrar" ng-model="query">
                </div>
                <div class="modal-body">
                    <div class="row">



                        <div class="col-md-4 portfolio-item" ng-repeat="manager in managers | filter:query">
                            <a href="#">
                                <img class="img-responsive" src="@{{ manager.profile_picture || 'http://placehold.it/250/ffffff/000000&text='+manager.full_name}}" alt="">
                            </a>
                            <h3>
                                <a href="#">@{{ manager.full_name | limitTo : 20}}</a>
                            </h3>
                            <p>@{{ manager.email }}</p>
                            <button class="btn btn-lg btn-success select-manager" ng-click="assign({{$customer->id}}, manager.id)">Seleccionar</button>
                        </div>


                    </div>

                </div>            
            </div>
        </div>
    </div>
    @elseif($customer->estado == 'asignado')
    <div class="modal fade" id="modal" aria-hidden="true" style="display: none;" ng-controller="AgentListCtrl">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title"><strong>Selecciona</strong> el Agente para la <strong>Negociación</strong> </h4>
                    <input type="text" class="form-control" placeholder="Filtrar" ng-model="query">
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-4 portfolio-item" ng-repeat="agent in agents | filter:query">
                            <a href="#">
                                <img class="img-responsive" src="@{{ agent.profile_picture || 'http://placehold.it/250/ffffff/000000&text='+agent.full_name}}" alt="">
                            </a>
                            <h3>
                                <a href="#">@{{ agent.full_name | limitTo : 20}}</a>
                            </h3>
                            <p>@{{ agent.email }}</p>
                            <button class="btn btn-lg btn-success select-agent" ng-click="nogotiate({{$customer->id}}, agent.id)">Seleccionar</button>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    </div>

    @elseif($customer->estado == 'negociacion')

    <div class="modal fade modal-hd" id="modal" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title"><strong>Finalizar</strong> proceso de <strong>Negociación</strong> </h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 portfolio-item text-center">
                            <a href="#">
                                <i class="fa fa-money big-icon"></i>
                            </a>
                            <h3>
                                <a href="#">Interesado</a>
                            </h3>                            
                            <button class="btn btn-lg btn-info select-finish" data-estado="interesado">Interesado</button>
                        </div>

                        <div class="col-md-6 portfolio-item text-center">
                            <a href="#" style="color: #18a689">
                                <i class="fa fa-legal big-icon" ></i>
                            </a>
                            <h3>
                                <a href="#" style="color: #18a689">Compró</a>
                            </h3>                            
                            <button class="btn btn-lg btn-success select-finish" data-estado="compro">Compró</button>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    </div>

    @endif
</div>
@stop

@section('javascript')

<script src="{{ asset('/assets/plugins/magnific/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('/assets/plugins/bootstrap-switch/bootstrap-switch.js') }}"></script>
<script src="{{ asset('/assets/plugins/bootstrap-progressbar/bootstrap-progressbar.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dynamic/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.bootstrap.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/dataTables.tableTools.js') }}"></script>
<script src="{{ asset('/assets/plugins/datatables/table.editable.js') }}"></script>
<script src="{{ asset('/assets/js/table_dynamic.js') }}"></script>
<script src="{{ asset('/assets/js/ecommerce.js') }}"></script>

<script>
$(document).on("ready", function() {
    var id = $("#id").val();
    var status = '';


    $(".delete-ad").on('click', function(event) {
        event.preventDefault();

        if (confirm("Desea eliminar el cliente? \nNo se puede revertir.")) {
            location.href = $(this).attr('href');
            $("#customer-delete").submit();
        }
    });

    $("#submit-update").on("click", function() {
        $("#customer-update").submit();
    });

    /* modal */
    $("#assign").on("click", function(){
        $("#modal").modal();
    });

    $("#assigned").on("click", function(){
        $("#modal").modal();
    });

    $("#negotiation").on("click", function(){
        $("#modal").modal();
    });

    $(".select-finish").on("click", function(){
        var estado = $(this).data('estado');
        $(".modal-hd").modal('hide');
        $(".font-animation").removeClass('hide');

        $.post('/customer/finish/md', {id: id, 'estado': estado}, function(data, textStatus, xhr) {
            if(estado == 'interesado'){
                $("#negotiation").text('Interesado').removeClass('btn-info').addClass('btn-default');
            }else if(estado == 'compro'){
                $("#negotiation").text('Compró').removeClass('btn-info').addClass('btn-success');
            }
            $(".font-animation").addClass('hide');
        });
    });

    /*$(document).on("click", '.select-manager', function(){
        $("#modal").modal('hide');
    });*/

});
</script>

@stop