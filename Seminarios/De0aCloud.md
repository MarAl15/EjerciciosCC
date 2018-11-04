# De 0 a Cloud

<p align="center">
<img src="https://github.com/MarAl15/EjerciciosCC/blob/ff0693ee23485403829086bc34a11cab43378426/Seminarios/images/fases.png" height="170">
</p>

Inicialmente el código se maneja con un sistema de control de versiones (SCV), el cual se testeará mediante unos tests y, por último, se hará el despliegue en la Nube.

- **Sistema Control de Versiones (SCV):** Permite guardar los cambios que se hizo - quién lo hizo, cómo lo hizo... quedando claro los cambios realizados.

Sirve además para crear ramas, comparándolas con otras, además de mantener diferentes versiones.

Al realizar un cambio, se suele crear una rama y posteriormente mandar a la master, esto es lo que se conoce como _Call Review_.

_Call Review:_ se realizan los cambios en una rama y pide que se una a la master, para ello es revisada por unos especialistas y si es aceptada, se _mergea_ con la master. (Thrissa)

---
- SaaS (Software como Servicio)
- PaaS (Plataforma como Servicio)
- IaaS (Infraestructura como Servicio)
---

- **Sistemas de orquestación de Máquinas Virtuales:** Qué imágenes quieres de SO, y va creando MV...

## PARTE 1: SCV
1. Nos creamos un repositorio `holaetsiit`
2. Clonamos 
3. `git checkout -b feature/1`
4. `git branch` para comprobar si estamos en la rama `feature/1`

```bash
virtualenv -p python3 env # Creamos el entorno
pip3 install virtualenv3 -user

ls env
which python # Ir al env que hemos creado de forma local
```

### Flask

- Instalar dependencia

`$ vim server.py`

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
```

...........

## PARTE 2: TEST

- Test unitarios

`$vim test.py`

```python
import unittest
import server

class TestMyServer(unittest.TestCase):
	def test_first(self): # Añadimos test
		response = server.hello() # Llamamos a la función que hemos creado anteriormente
		self.assertIn("Hello", response, "Hello was not found in response") # Comprobar 
			# que se cumple la condición, comprobamos que el hello está dentro del response
if __name__ == `__main__`
	unittest.main()	
```
- Test de calidad de código

### Travis

Travis sirve para los tests.

[`.travis.yml`](https://docs.travis-ci.com/user/languages/python/)
```yml
language: python
python:
    - "3.5"
# command to install dependencies
install:
    - pip install -r requirements.txt
# command to run tests
script:
    - python test.py
```

## PARTE 3: DESPLIEGUE

### Heroku CI

Sistema como servicio. Se utiliza para el despliegue.

```bash
npm install -g heroku #-g -> es para instalación global
```

`.travis.yml`
```yml
.... #Anterior
desploy:
    provider: heroku
    api key:
    #...
```
