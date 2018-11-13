# Tema ["Desplegando aplicaciones en la nube: Uso de PaaS y DBaaS"](https://jj.github.io/CC/documentos/temas/PaaS)


## Ejercicio 1

**Darse de alta en algún servicio PaaS tal como [Heroku](https://www.heroku.com/), [zeit](https://zeit.co/), [BlueMix](https://console.bluemix.net/) u [OpenShift](https://www.openshift.com/).**

Como podemos observar en las imágenes, me he dado de alta en los servicios PaaS de Heroku y Openshift ya que son los más fiables, y los que ofrecen más opciones a la hora de elegir lenguajes.

<p align="center">
<img src="https://github.com/MarAl15/EjerciciosCC/blob/master/images/tema2/openshift.png" height="370">
</p>
<p align="center">
<img src="https://github.com/MarAl15/EjerciciosCC/blob/master/images/tema2/heroku.png" height="370">
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
<img src="https://github.com/MarAl15/EjerciciosCC/blob/master/images/tema2/ej2-heroku-despliegue.png" height="380">
</p>

 
## Ejercicio 3

**Realizar una app en express (o el lenguaje y marco elegido) que incluya variables como en el caso anterior.**


