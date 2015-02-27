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
                            <div class="col-xs-12 col-sm-10 col-sm-offset-1" style="font-size:18px;text-align:justify;">


                                <strong>¡Hola {{ Auth::user()->name() }}!</strong>
                                <br><br>Tu cuenta ha sido suspendida porque no hemos recibido tu pago en los últimos 30 días.
                                <br><br>
                                <strong>¿Qué significa esto?</strong>
                                <br><br>
                                Tu enlace de prospección ha sido suspendido momentáneamente y dentro del sistema sólo puedes acceder a la página Prospectos y visualizar los que ya tienes almacenados, sin embargo algunas funciones estarán deshabilitadas. <br><br>
                                No te preocupes, no es nada grave ;)
                                <br><br>
                                Para resolver el problema, basta con que te pongas en contacto con nosotros para regularizar tu pago y arreglaremos todo inmediatamente.
                                <br><br>
                                Email: facturacion@dineroysalud.net
                                <br>
                                Teléfono: +14088928615
                                <br><br>
                                
                                <strong style="text-decoration:underline">Nota Importante</strong>
                                <br><br>
                                Ten en cuenta por favor que si no sabemos de ti para el próximo vencimiento, tu cuenta será desactivada automáticamente y todos tus datos se perderán. Nos encantaría que siguieras formando parte de nuestra familia, así que ponte en contacto con nosotros hoy mismo y todo volverá a la normalidad rápidamente.
                                <br><br>
                                ¡Muchas gracias!
                                <br><br>
                                -El Equipo De DineroySalud-     
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

