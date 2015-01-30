<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
</head>
<body>
	<h2>Tiene un potencial cliente asignado para comenzar la negociación.</h2>

	<hr>

	<strong>General Zone: </strong> {{ $gz }} <br>

	<strong>Cliente: </strong> <a href="{{ URL::to('customer') }}"> {{ $cliente }} </a><br>
</body>
</html>
