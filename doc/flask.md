# Flask

1. Introducción
2. Plantillas
3. Formularios
4. Login de usuarios
5. Base de datos
6. Blueprints
7. Parámetros de configuración
8. Gestión y manejo de errores
9. Logs
10. Seguridad en las vistas
11. Tests

## Introducción

* Flask es un micro framework para Python
* Permite crear aplicaciones web de todo tipo rapidamente.

### Configuración del entorno de programación
* Python instalado.
* Virtualenv instalado. Virtualenv nos permite aislar nuestra aplicación junto con todas sus dependencias de otras aplicaciones Python que tengamos en nuestro sistema, de manera que las librerías de cada una de las aplicaciones no entren en conflicto.

```
$ mkdir prueba-flask
$ cd prueba-flask
$ virtualenv venv
$ source venv/bin/activate    # en Linux/Mac
$ venv\Scripts\activate.bat   # en Windows
```
* Sabemos que el entorno está activo porque el prompt comienza con la palabra "venv"

```
(venv) usuario:~/Proyectos/prueba-flask$
```

### Instalación de Flask

```
$ pip install flask
```

* De manera que dentro de nuestro entorno "venv", se instalarán el framework y las librerías que necesite.
* Podemos ver todas las dependencias de nuestra aplicación si ejecutamos el siguiente comando:

```
$ pip freeze
```


### Aplicación "Hola Mundo!"

1. Crear y editar el archivo hello.py

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hola mundo!'
```

* Flask se encarga de hacernos transparente el cómo a partir de una petición URL se ejecuta finalmente nuestra rutina.
* El decorador "route" de la aplicación app es el encargado de decirle a Flask qué URL debe ejecutar su correspondiente función.
* La función debe devolver la respuesta que será mostrada en el navegador del usuario.

2. Ejecutar el servidor interno 

```
$ export FLASK_APP=hello.py
$ flask run
```

* Otra forma de hacerlo es modificar el archivo "activate" del entorno de Python (venv/bin/activate) agregando al final del archivo:

```
export FLASK_APP=hello.py   # En Linux/Mac
set "FLASK_APP=hello.py"    # En Windows
```
* Para que los cambios realizados se tengan en cuenta debemos salir del entorno Python y volver a entrar:

```
$ source venv/bin/deactivate
$ source venv/bin/activate
```

* Luego lanzamos el servidor de Flask:

```
$ flask run
```

3. Para comprobar que nuestra aplicación funciona, podemos entrar al navegador y en la barra de direcciones introducir "localhost:5000/"

* Para cambiar el puerto por cualquier motivo lo podemos hacer de dos formas distintas:
  * Estableciendo la variable de entorno FLASK_RUN_PORT en un puerto diferente.
  * Indicando el puerto al lanzar el servidor: flask run --port 6000

* Para aceptar peticiones de otras computadoras de nuestra red lanzaremos el servidor de la siguiente manera: flask run --host 0.0.0.0
* Para salir del servidor (CTRL + C)


### Aplicación con formato

1. Crear y editar el archivo formato.py

```python
from flask import Flask

app = Flask(__name__)

@app.route('/contacto')
def contacto():
    return '<h1>Contacto</h1>'
```

* Aclaración: al definir una URL terminada con '/', si el usuario accede a esa URL sin dicho caracter, Flask lo redigirá a la URL terminada en '/'. En cambio, si la URL se define sin terminar en '/' y el usuario accede indicando la '/' al final, Flask dará un error HTTP 404.

2. Ejecutar el servidor interno

```
$ export FLASK_APP=formato.py
$ flask run
```

* En un navegador: localhost:5000/contacto

### Aplicación con parámetro

* En una aplicación web no todas las páginas tienen una URL definida de antemano, como es el caso de la página principal.
* A una URL le podemos agregar secciones variables o parametrizadas con "param".
* La vista recibirá "param" como un parámetro con ese mismo nombre.
* Opcionalmente se puede indicar un conversor "converter" para especificar el tipo de dicho parámetro así "converter:param" 

1. Crear y editar el archivo parametros.py

```python
from flask import Flask

app = Flask(__name__)

@app.route('/hola/<string:nombre>')
def hola(nombre):
    return f'<h1>Hola {nombre}</h1>'
```

2. Ejecutar el servidor interno

```
$ export FLASK_APP=parametros.py
$ flask run
```

* En un navegador: localhost:5000/hola/Pablo

* Por defecto, en Flask existen los siguientes conversores:
  * string: conversor por defecto, acepta cualquier cadena que no contenga el carácter '/'
  * int
  * float
  * path: como string pero acepta cadenas con '/'
  * uuid: acepta cadenas con formato UUID (32 dígitos hexadecimales). Ejemplo: 550e8400-e29b-41d4-a716-446655440000 


## Uso de plantillas para las páginas HTML

* Uso de plantillas para la generación de contenido HTML dinámico
* En Flask, por convención, a las funciones que están asociadas a una URL se les llama "vistas".

1. Crear dentro del proyecto una carpeta llamada 'templates', Flask buscará las plantillas dentro de este directorio.
2. Crear dentro de la carpeta 'templates' un archivo html. Ej. index.html

```html
<html>
<head>
    <title> Flask App </title>
</head>
<body>
    <h1>Hola</h1>
    <h2>Bienvenidos</h2>
</body>
</html>
```

3. Crear archivo .py

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/home')
def home():
    return render_template('index.html')
```

### Template con pasaje de parámetro


```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/home')
def home():
    return render_template('index.html', nombre='mundo')
```

```html
<html>
<head>
    <title> Flask App </title>
</head>
<body>
    <h1>Hola {{nombre}}</h1>
</body>
</html>
```

* En el archivo html, se utiliza una sintaxis llamada jinja2 (igual que en django)
* Una plantilla jinja2 no es más que un archivo que contiene datos estáticos junto con bloques para generar contenido dinámico.
* El resultado de renderizar una plantilla es un documento HTML en el que los bloques de generación de contenido dinámico han sido procesados.

### Archivos estáticos

* Su contenido no cambia a lo largo del ciclo de ejecución de una aplicación web. 
* Ejemplo: archivos CSS, imágenes, código javascript
* Flask facilita una vista para servir los recursos estáticos de nuestra aplicación, evitando de preocuparnos de configuraciones.
* Estoa archivos se deben ubicar en un directorio llamado "static" situado al mismo nivel que el directorio "template". Este directorio estará accesible en la URL "/static"

## Uso de formularios en Flask

* A través de los formularios los usuarios pueden interactuar con la aplicación enviando cualquier tipo de información al servidor.
* El protocolo HTTP define una serie de de métodos de petición para indicar la acción que se desea realizar sobre un recurso determinado:
  * GET: debe emplearse para solicitar un recurso (recuperar datos)
  * POST: se utiliza para enviar una entidad a un recurso específico, de manera que sen envian datos al servidor donde son procesados.

```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/contacto', methods=['POST'])   # Por default es 'GET'
def contacto():
    nombre = request.form.get('nombre')     # 'nombre' es el valor del attr 'name' del input
    return render_template('contacto.html', nombre=nombre)
```

* Archivo base: layout.html

```html
<html>
<head>
    <title> Flask App </title>
</head>
<body>
    {% block body %}
    {% endblock %}
</body>
</html>
```

* Archivo index.html

```html
{% extends 'layout.html' %}
{% block body %}
<h1>Bienvenido</h1>
<form action="{{ url_for('contacto') }}" method='post'>
    <input type='text' name='nombre' placeholder='Ingresa un nombre'>
    <button>Enviar</button>
</form>
{% endblock %}
```

* Archivo contacto.html

```html
{% extends 'layout.html' %}
{% block body %}
<h1>Hola {{nombre}}</h1>
{% endblock %}
```