@extends('backend.layouts.master')

@section('css')
@stop

@section('content')

<div id="main-content">
    <div class="page-title"> <i class="icon-custom-left"></i>
        <h2 class="pull-left">Operadores <small> listado general</small></h2>
        @if(Auth::user()->isAdmin())
        <a href="/operator/create" class="btn btn-success pull-right m-20"> Nuevo operador </a>
        @endif
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">

                <div class="panel-body">
                    <div class="row">

                        @foreach ($operators as $key => $operator)                                    
                        <div class="col-md-4 member-entry">
                            <div class="row member">
                                
                                <div class="col-xs-9">
                                    <h3 class="m-t-0 member-name"><strong>{{ $operator->full_name }}</strong></h3>
                                    <div>
                                        <p>
                                            <i class="fa fa-user c-gray-light p-r-10"></i> 
                                            {{ $operator->username }}
                                        </p>
                                  
                                        
                                        @if(Auth::user()->isAdmin())
                                        <p>
                                            <i class="fa fa-key c-gray-light p-r-10"></i> 
                                            {{ $operator->password }}
                                        </p>
                                        <p>
                                            <button type="button" class="btn btn-danger delete-operator" data-id="{{ $operator->id }}"> Eliminar</button> 
                                            <a href="/operator/{{ $operator->id }}/edit" class="btn btn-success"> Editar</a>
                                        </p>
                                        @endif

                                    </div>                                            
                                </div>
                            </div>
                        </div>
                        @endforeach



                    </div>
                    <div class="m-t-30 align-center">
                        {{ $operators->links() }}

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


@stop

@section('javascript')
<script src="{{ asset('/assets/plugins/quicksearch/jquery.quicksearch.js') }}"></script>
<script src="{{ asset('/assets/js/members.js') }}"></script>

<script>

$(document).on("ready", function(){
    $(".delete-operator").on("click", function(event){
        event.preventDefault();

        var u = $(this);

        if(confirm("Desea eliminar el operador?\nNo se puede revertir.")){
            var id = $(this).data('id');
            u.closest('div.member-entry').hide();                
            $.ajax({
                url: '/operator/' + id,
                type: 'DELETE',
                success: function(result) {
                    console.log(result);

                }
            });
        }

    })
})

</script>
@stop