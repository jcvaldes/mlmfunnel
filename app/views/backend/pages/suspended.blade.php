@extends('backend.layouts.master')

@section('css')
@endsection

@section('content')

<div id="main-content" class="dashboard">

   


    <div class="row m-t-10">
        <div class="col-md-12">
            <div class="tabcordion">
                <ul id="myTab" class="nav nav-tabs nav-dark">
                    <li class="active"><a href="#products" data-toggle="tab">Cuenta suspendida</a></li>
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade active in" id="products">
                     <div class="row p-20">
                         <div class="row">
                            <div class="col-xs-12 col-sm-10 col-sm-offset-1">
                                <h2><strong>Hola {{ Auth::user()->name() }}!</strong> Tu cuenta ha sido suspendida porque hemos tenido un inconveniente con tu pago, comunicate con nosotros para resolver el problema.</h2>
                            </div>                  
                        </div>
                    </div>
                </div>                            
            </div>




        </div>
    </div>



</div>




    
</div>


@endsection

@section('javascript')




<script>
$(document).on("ready", function(){
    
});
</script>
@stop

