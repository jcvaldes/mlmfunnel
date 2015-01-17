@if(Session::has('alert'))
    <div class="alert alert-{{ Session::get('alert.type') }} fade in">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <strong>Aviso!</strong> {{ Session::get('alert.message') }}
    </div>
@endif

@if($errors->all())
<div class="alert alert-danger ">
	<button type="button" class="close" data-dismiss="alert">&times;</button>
	<h4>Error!</h4>
	@foreach ($errors->all('<li>:message</li>') as $message)
	{{ $message }}
	@endforeach
</div>
@endif