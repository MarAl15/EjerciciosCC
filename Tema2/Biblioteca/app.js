var express = require('express');
var app = express();

var libro = require("./Libro.js");
var biblioteca = new Array;

// Establecer el puerto dependiendo del PaaS que sea
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Agregar un libro
app.put('/Biblioteca/:titulo/:autor/', function( req, response ) {
	var nuevo_libro = new libro.Libro(req.params.titulo,req.params.autor);
	biblioteca.push(nuevo_libro);
	response.status(200).send(nuevo_libro);
});

// Mostrar todos los libros que haya en un momento determinado
app.get('/Biblioteca', function(request, response) {
	response.status(200).send(biblioteca);
});


// Escucha en un puerto determinado
if(!module.parent){
	app.listen(app.get('port'), function() {
		console.log("Node app is running at localhost:" + app.get('port'));
	});
}

// Exporta la variable para poder hacer tests
module.exports = app;
