"use strict";

/* 
  Definición de la clase Libro: 
    var este_libro = new Libro(titulo,autor);
    	`titulo` = título del libro.
		`autor` = persona que escribió el libro.
*/

exports.Libro = function(titulo, autor){
	this.titulo = titulo;
	this.autor = autor;
	
	//métodos
	this.vars = vars;
}

// Devuelve las variables de instancia
function vars() {
    return ['titulo','autor'];
}
