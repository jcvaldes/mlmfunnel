<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf-8">
</head>
<body>
	<h2>Un nuevo prospecto se ha registrado.</h2>

	<hr>

	<strong>Nombre: </strong> {{ $name }} <br>
	<strong>Email: </strong> {{ $email }} <br>
	<strong>Teléfono: </strong> {{ $phone }} <br>

	<a href="{{ url() }}"> Ver mas </a><br>
</body>
</html>
