# Tema ["Desplegando aplicaciones en la nube: Uso de PaaS y DBaaS"](https://jj.github.io/CC/documentos/temas/PaaS)


## Ejercicio 1

**Darse de alta en algún servicio PaaS tal como [Heroku](https://www.heroku.com/), [zeit](https://zeit.co/), [BlueMix](https://console.bluemix.net/) u [OpenShift](https://www.openshift.com/).**

Como podemos observar en las imágenes, me he dado de alta en los servicios PaaS de Heroku y Openshift ya que son los más fiables, y los que ofrecen más opciones a la hora de elegir lenguajes.

<p align="center">
<img src="https://github.com/MarAl15/EjerciciosCC/blob/master/Tema2/images/openshift.png" height="370">
</p>
<p align="center">
<img src="https://github.com/MarAl15/EjerciciosCC/blob/master/Tema2/images/heroku.png" height="370">
</p>
 
 
## Ejercicio 2

**Crear una aplicación en OpenShift o en algún otro PaaS en el que se haya dado uno de alta. Realizar un despliegue de prueba usando alguno de los ejemplos incluidos con el PaaS.**

El proceso se realizará en Heroku, a partir de la [aplicación simple](https://github.com/heroku/python-getting-started.git) extraída del repositorio de su GitHub. 

Para desplegarla, primero debemos crear una aplicación en Heroku, la cual prepara a este para recibir el código fuente:

```console
mar@mar-SATELLITE-L750:.../python-getting-started$ heroku create
Creating app... done, ⬢ still-chamber-82573
https://still-chamber-82573.herokuapp.com/ | https://git.heroku.com/still-chamber-82573.git
```

Como podemos observar, en nuestro caso, Heroku genera el nombre aleatorio `still-chamber-82573` para la aplicación. También se puede pasar un parámetro especificando otro nombre. 

Y ya podemos desplegar código:
```console
mar@mar-SATELLITE-L750:.../python-getting-started$ git push heroku master
Counting objects: 446, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (196/196), done.
Writing objects: 100% (446/446), 74.21 KiB | 0 bytes/s, done.
Total 446 (delta 224), reused 446 (delta 224)
remote: Compressing source files... done.
remote: Building source:
remote: 
remote: -----> Python app detected
remote:        Using supported version of Python 3.7 (python-3.7.0)
remote: -----> Installing python-3.7.0
remote: -----> Installing pip
remote: -----> Installing SQLite3
remote: -----> Installing requirements with pip
remote:        Collecting django (from -r /tmp/build_293b965c381026bcfad2a79c34b6d16f/requirements.txt (line 1))
remote:          Downloading https://files.pythonhosted.org/packages/d1/e5/2676be45ea49cfd09a663f289376b3888accd57ff06c953297bfdee1fb08/Django-2.1.3-py3-none-any.whl (7.3MB)
remote:        Collecting gunicorn (from -r /tmp/build_293b965c381026bcfad2a79c34b6d16f/requirements.txt (line 2))
remote:          Downloading https://files.pythonhosted.org/packages/8c/da/b8dd8deb741bff556db53902d4706774c8e1e67265f69528c14c003644e6/gunicorn-19.9.0-py2.py3-none-any.whl (112kB)
remote:        Collecting django-heroku (from -r /tmp/build_293b965c381026bcfad2a79c34b6d16f/requirements.txt (line 3))
remote:          Downloading https://files.pythonhosted.org/packages/59/af/5475a876c5addd5a3494db47d9f7be93cc14d3a7603542b194572791b6c6/django_heroku-0.3.1-py2.py3-none-any.whl
remote:        Collecting pytz (from django->-r /tmp/build_293b965c381026bcfad2a79c34b6d16f/requirements.txt (line 1))
remote:          Downloading https://files.pythonhosted.org/packages/f8/0e/2365ddc010afb3d79147f1dd544e5ee24bf4ece58ab99b16fbb465ce6dc0/pytz-2018.7-py2.py3-none-any.whl (506kB)
remote:        Collecting dj-database-url>=0.5.0 (from django-heroku->-r /tmp/build_293b965c381026bcfad2a79c34b6d16f/requirements.txt (line 3))
remote:          Downloading https://files.pythonhosted.org/packages/d4/a6/4b8578c1848690d0c307c7c0596af2077536c9ef2a04d42b00fabaa7e49d/dj_database_url-0.5.0-py2.py3-none-any.whl
remote:        Collecting psycopg2 (from django-heroku->-r /tmp/build_293b965c381026bcfad2a79c34b6d16f/requirements.txt (line 3))
remote:          Downloading https://files.pythonhosted.org/packages/37/88/40748331bf75d068a07bbea7dc658faceb0ce2e9fffdde550e76d5475e59/psycopg2-2.7.5-cp37-cp37m-manylinux1_x86_64.whl (2.7MB)
remote:        Collecting whitenoise (from django-heroku->-r /tmp/build_293b965c381026bcfad2a79c34b6d16f/requirements.txt (line 3))
remote:          Downloading https://files.pythonhosted.org/packages/07/2e/c77e71cb448f1a507bc2dfec1d5c24e35d14a737837bea6cdfd6d1ff66bd/whitenoise-4.1-py2.py3-none-any.whl
remote:        Installing collected packages: pytz, django, gunicorn, dj-database-url, psycopg2, whitenoise, django-heroku
remote:        Successfully installed dj-database-url-0.5.0 django-2.1.3 django-heroku-0.3.1 gunicorn-19.9.0 psycopg2-2.7.5 pytz-2018.7 whitenoise-4.1
remote: 
remote: -----> $ python manage.py collectstatic --noinput
remote:        120 static files copied to '/tmp/build_293b965c381026bcfad2a79c34b6d16f/staticfiles', 376 post-processed.
remote: 
remote: -----> Discovering process types
remote:        Procfile declares types -> web
remote: 
remote: -----> Compressing...
remote:        Done: 57M
remote: -----> Launching...
remote:        Released v5
remote:        https://still-chamber-82573.herokuapp.com/ deployed to Heroku
remote: 
remote: Verifying deploy... done.
To https://git.heroku.com/still-chamber-82573.git
 * [new branch]      master -> master
```

A continuación verificamos si al menos una de las instancias de la aplicación está funcionando:
```console
mar@mar-SATELLITE-L750:.../python-getting-started$ heroku ps:scale web=1
Scaling dynos... done, now running web at 1:Free
```

Se puede acceder a la aplicación a través del URL generado por el nombre de la aplicación, pero existe un atajo práctico, el cual se puede usar para abrir el sitio web como sigue:
```console
mar@mar-SATELLITE-L750:.../python-getting-started$ heroku open
```

<p align="center">
<img src="https://github.com/MarAl15/EjerciciosCC/blob/master/Tema2/images/ej2-heroku-despliegue.png" height="380">
</p>

 
## Ejercicio 3

**Realizar una app en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.**

Generamos el directorio Biblioteca con la ayuda de `express`.
```console
mar@mar-SATELLITE-L750:~/UGR/CC/EjerciciosCC/Tema2$ express Biblioteca

  warning: the default view engine will not be jade in future releases
  warning: use `--view=jade' or `--help' for additional options


   create : Biblioteca/
   create : Biblioteca/public/
   create : Biblioteca/public/javascripts/
   create : Biblioteca/public/images/
   create : Biblioteca/public/stylesheets/
   create : Biblioteca/public/stylesheets/style.css
   create : Biblioteca/routes/
   create : Biblioteca/routes/index.js
   create : Biblioteca/routes/users.js
   create : Biblioteca/views/
   create : Biblioteca/views/error.jade
   create : Biblioteca/views/index.jade
   create : Biblioteca/views/layout.jade
   create : Biblioteca/app.js
   create : Biblioteca/package.json
   create : Biblioteca/bin/
   create : Biblioteca/bin/www

   change directory:
     $ cd Biblioteca

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=biblioteca:* npm start

```

Como se nos indica, cambiamos de directorio:
```console
mar@mar-SATELLITE-L750:~/UGR/CC/EjerciciosCC/Tema2$ cd Biblioteca/
```
e instalamos las dependencias:
```console
mar@mar-SATELLITE-L750:~/UGR/CC/EjerciciosCC/Tema2/Biblioteca$ npm install
npm WARN deprecated jade@1.11.0: Jade has been renamed to pug, please install the latest version of pug instead of jade
npm WARN deprecated constantinople@3.0.2: Please update to at least constantinople 3.1.1
npm WARN deprecated transformers@2.1.0: Deprecated, use jstransformer
npm notice created a lockfile as package-lock.json. You should commit this file.
added 99 packages from 139 contributors and audited 194 packages in 7.383s
found 2 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

Intentado arreglar las vulnerabilidades:
```console
mar@mar-SATELLITE-L750:~/UGR/CC/EjerciciosCC/Tema2/Biblioteca$ npm audit fix
up to date in 0.81s
fixed 0 of 2 vulnerabilities in 194 scanned packages
  2 vulnerabilities required manual review and could not be updated
  
mar@mar-SATELLITE-L750:~/UGR/CC/EjerciciosCC/Tema2/Biblioteca$ npm uninstall jade --save
removed 47 packages and audited 140 packages in 1.981s
found 0 vulnerabilities

mar@mar-SATELLITE-L750:~/UGR/CC/EjerciciosCC/Tema2/Biblioteca$ npm install
audited 140 packages in 1.916s
found 0 vulnerabilities
``` 

Y ya podemos modificar el código del fichero `app.js`:
```node
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
app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});
```

Para un correcto funcionamiento, debemos crear el fichero `Libro.js` como sigue:
```node
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
```

Y, por último, comprobamos que todo funciona bien ejecutando en una terminal:
```console
mar@mar-SATELLITE-L750:~/UGR/CC/EjerciciosCC/Tema2/Biblioteca$ node app.js
Node app is running at localhost:5000
```

- Para la creación de libros, se ejecuta en otra terminal:
```console
mar@mar-SATELLITE-L750:~$ curl -X PUT http://127.0.0.1:5000/Biblioteca/DiezNegritos/AgathaChristie
{"titulo":"DiezNegritos","autor":"AgathaChristie"}

mar@mar-SATELLITE-L750:~$ curl -X PUT http://127.0.0.1:5000/Biblioteca/LaVueltaAlMundoEnOchentaDias/JulioVerne
{"titulo":"LaVueltaAlMundoEnOchentaDias","autor":"JulioVerne"}

mar@mar-SATELLITE-L750:~$ curl -X PUT http://127.0.0.1:5000/Biblioteca/LaVozDelViolin/AndreaCamilleri
{"titulo":"LaVozDelViolin","autor":"AndreaCamilleri"}
```

- Para la visualización de la pequeña biblioteca, se accede a http://127.0.0.1:5000/Biblioteca/:

<p align="center">
<img src="https://github.com/MarAl15/EjerciciosCC/blob/master/Tema2/images/eje3-biblioteca.png" height="200">
</p>
 
 
## Ejercicio 4

**Crea pruebas para las diferentes rutas de la aplicación.**

Añadimos al final del fichero `app.js`:
```node
// Escucha en un puerto determinado
if(!module.parent){
	app.listen(app.get('port'), function() {
		console.log("Node app is running at localhost:" + app.get('port'));
	});
}

// Exporta la variable para poder hacer tests
module.exports = app;
``` 

Y dentro de la carpeta `test` creamos el fichero `test.js` con algunas pruebas para comprobar si el funcionamiento es correcto:
```node
var request = require('supertest'),
app = require('../app.js');

describe( "PUT Biblioteca", function() {
	it('Creación correcta', function (done) {
	request(app)
		.put('/Biblioteca/DiezNegritos/AgathaChristie')
		.expect('Content-Type', /json/)
		.expect(200, done);
	});

	it('Error de PUT', function (done) {
	request(app)
		.put('/Biblioteca')
		.expect(404, done);
	});
});

describe( "GET Biblioteca", function() {
	it('Devolución correcta', function (done) {
	request(app)
		.get('/Biblioteca')
		.expect('Content-Type', /json/)
		.expect(200, done);
	});

	it('Error de GET', function (done) {
	request(app)
		.get('/Biblioteca/DiezNegritos')
		.expect(404, done);
	});
});
```

Y lo ejecutamos con `mocha`:
```console
mar@mar-SATELLITE-L750:~/UGR/CC/EjerciciosCC/Tema2/Biblioteca$ ./node_modules/mocha/bin/mocha


  PUT Biblioteca
    ✓ Creación correcta
    ✓ Error de PUT

  GET Biblioteca
    ✓ Devolución correcta
    ✓ Error de GET


  4 passing (59ms)
```






