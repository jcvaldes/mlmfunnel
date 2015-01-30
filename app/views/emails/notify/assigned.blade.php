<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
</head>
<body>
	<h2>Tiene un potencial cliente asignado.</h2>

	<hr>

	<strong>General Manager: </strong> {{ $gm }} <br>

	<strong>Cliente: </strong> <a href="{{ URL::to('customer') }}"> {{ $cliente }} </a><br>
</body>
</html>
