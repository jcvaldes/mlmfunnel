@extends('backend.layouts.master')

@section('css')
@stop

@section('content')

<div id="main-content">
    <div class="page-title"> <i class="icon-custom-left"></i>
        <h2 class="pull-left">Usuarios <small> listado general</small></h2>
        @if(Auth::user()->isAdmin())
        <a href="/user/create" class="btn btn-success pull-right m-20"> Nuevo usuario </a>
        @endif
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default">

                <div class="panel-body">
                    <div class="row">

                        @foreach ($users as $key => $user)                                    
                        <div class="col-md-4 member-entry">
                            <div class="row member">
                                <div class="col-xs-3">
                                    <img src="{{ $user->getProfilePicture() }}" alt="avatar 1" class="pull-left img-responsive">
                                </div>
                                <div class="col-xs-9">
                                    <h3 class="m-t-0 member-name"><strong>{{ $user->full_name }}</strong></h3>
                                    <div>
                                        <p><i class="fa fa-envelope-o c-gray-light p-r-10"></i> {{ $user->email }}</p>
                                        <p><i class="fa fa-briefcase c-gray-light p-r-10"></i> {{ $user->getTypeName() }}</p>
                                        @if($user->getBranch() != "")
                                        <p><i class="fa fa-home c-blue p-r-10"></i> {{ $user->getBranch() }}</p>
                                        @endif
                                        @if(Auth::user()->isAdmin())
                                        <p>
                                            <button type="button" class="btn btn-danger delete-user" data-id="{{ $user->id }}"> Eliminar</button> 
                                            <a href="/user/{{ $user->id }}/edit" class="btn btn-success"> Editar</a>
                                        </p>
                                        @endif

                                    </div>                                            
                                </div>
                            </div>
                        </div>
                        @endforeach



                    </div>
                    <div class="m-t-30 align-center">
                        {{ $users->links() }}

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
    $(".delete-user").on("click", function(event){
        event.preventDefault();

        var u = $(this);

        if(confirm("Desea eliminar el usuario?\nNo se puede revertir.")){
            var id = $(this).data('id');
            u.closest('div.member-entry').hide();                
            $.ajax({
                url: '/user/' + id,
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