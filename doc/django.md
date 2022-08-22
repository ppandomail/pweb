# Django

1. Introducción
2. Plantillas
3. BBDD
4. Panel de administración


## Introducción

* Django es un framework de desarrollo web de código abierto y gratuito.
* Sirve para crear sitios web.
* Su nombre se inspira en el guitarrista Django Reinhardt, del cual Adrian Holovaty, uno de sus cocreadores, es admirador.
* Escrito en Python.
* Respeta el patrón de diseño MVC (en Dyango se llama MTV - Modelo Template Vista)
  1. T petición a V
  1. V demanda datos a M
  1. M envia datos a V
  1. V envia información a T
* Cuenta con un panel de administración que permite crear, consultar, actualizar y eliminar contenido.
* Tiene un ORM que se encarga de la comunicación con la base de datos. Es compatible con PostgreSQL, MySQL, SQLite, etc.
* Tiene opciones de protección contra ataques de SQL injection o XSS (cross site scripting)
* Empresas que usan Django:
  * Pinterest
  * Reddit
  * Spotify
  * Instagram

### Instalación 

``` 
$ pip install Django==4.0.1
$ python -m django --version
```

### Crear proyecto Django

``` 
$ django-admin startproject <nombre-proyecto>
```

* Crea carpeta <nombre_proyecto> con los archivos: settings.py, urls.py y wsgi.py

Luego para crear BD db.sqlite3 y poner en funcionamiento el proyecto:

```
$ python manage.py migrate
```

Luego para ejecutar el servidor
```
$ python manage.py runserver
```

Abrir el navegador y escribir 127.0.0.1:8000 y nos lleva a la página de bienvenida del proyecto.

### Primera página

1. Crear y editar archivo views.py dentro de la carpeta del proyecto.

```python
from django.http import HttpResponse

def saludo(request):
    return HttpResponse('Hola Mundo')

def despedida(request):
    return HttpResponse('Adiós mundo cruel')
```

2. Editar archivo urls.py

```python
from proy_django.views import saludo, despedida

urlpatterns = [
    path('admin/', admin.site.urls),    # tupla que viene por default
    path('saludo/', saludo),
    path('chau/', despedida),
]
```

3. Ejecutar servidor de prueba

```
$ python manage.py runserver
```

4. En navegador, introducir:
  * localhost:8000/saludo/
  * localhost:8000/chau/


### Darle formato al texto

```python
from django.http import HttpResponse

def fecha(request):
    fecha_actual = datetime.datetime.now()
    documento = """ <html>
                    <body>
                      <h2> Fecha y hora actual %s </h2>
                    </body>
                    </html> """ % fecha_actual
    return HttpResponse(documento)
```

```python
from proy_django.views import fecha

urlpatterns = [
    path('admin/', admin.site.urls),
    path('fecha/', fecha),    
]
```

### Pasaje de parámetros a través de la URL

```python
from django.http import HttpResponse

def calcula_edad(request, edad, año):
    periodo = año -2021
    edad_futura = edad + periodo
    documento = """ <html>
                    <body>
                      <h2> En el año %s tendrás %s años</h2>
                    </body>
                    </html> """ %(año, edad_futura)
    return HttpResponse(documento)
```

```python
from proy_django.views import calcula_edad

urlpatterns = [
    path('admin/', admin.site.urls),
    path('edades/<int:edad>/<int:año>', calcula_edad),    
]
```

* En el navegador introducir -> localhost:8000/edades/46/2030

## Plantillas

* Cadenas de texto (HTML casi siempre)
* Sirven para separar la parte lógica (datos) de la parte visual (presentación) de un documento web.
* Ventajas:
  * Se pueden realizar cambios en el diseño con independencia del código (lógica) de la vista.
  * Se puede diversificar el trabajo del proyecto: programadores a código y diseñadores a presentación.

1. Crear y editar archivo html. Ejemplo: index.html

```html
<html>
<body>
    <h1> Hola mundo </h1>
</body>
</html>
```

2. En views.py

```python
from django.http import HttpResponse
from django.template import Template, Context

def saludo(request):
    doc_externo = open('index.html')
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    doc = plt.render(ctx)
    return HttpResponse(doc)
```

### Variables en plantillas

```python
from django.http import HttpResponse
from django.template import Template, Context

def saludo(request):
    doc_externo = open('index.html')
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context({'nom': 'mundo'})
    doc = plt.render(ctx)
    return HttpResponse(doc)
```

```html
<html>
<body>
    <h1> Hola {{nom}} </h1>
</body>
</html>
```

### Propiedades en plantillas

```python
from django.http import HttpResponse
from django.template import Template, Context

def saludo(request):
    doc_externo = open('index.html')
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context({'fecha': datetime.datetime.now()})
    doc = plt.render(ctx)
    return HttpResponse(doc)
```

```html
<html>
<body>
    <h1> {{fecha.day}} </h1>
</body>
</html>
```

### Listas en Plantillas

```python
from django.http import HttpResponse
from django.template import Template, Context

def saludo(request):
    doc_externo = open('index.html')
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context({'temas': ['t1', 't2', 't3']})
    doc = plt.render(ctx)
    return HttpResponse(doc)
```

```html
<html>
<body>
    <h1> {{temas}} </h1>     <!-- Muestra toda la lista -->
    <h1> {{temas.1}} </h1>   <!-- Muestra 2do elemento  -->

    <p> Temas: </p>
    <ul> {% for t in temas %}
         <li> {{t}} </li>
         {% endfor %}
    </ul>

    <p> Temas: </p>
    <p>
        <ul>
        {% if temas %}
            {% for t in temas %}
            <li> {{t.upper}} </li>    <!-- es t.upper y no t.upper() -->
            {% endfor %}
        {% else %}
            <p> No hay elementos </p>
        <% endif %>
        </ul>
    </p>

    {# Es un comentario #}
    {% comment %}
      comentarios en varias lineas
    <% endcomment %>

</body>
</html>
```

### Cargador de plantillas

```python
from django.shortcuts import render

def saludo(request):
    return render(request, 'index.html', {'nom': 'Pablo'})
```

### Plantillas incrustadas

* Ejemplo incrustar barra.html en index.html

1. Crear y editar archivo barra.html

```html
<html>
    <style>
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            text-transform: uppercase;
        } 
        li {
            display: inline;
            margin: 0 20px;
        }
    </style>
<body>
    <ul>
        <li> Home </li>
        <li> Contacto </li>
        <li> Acerca de </li>
    </ul>
</body>
</html>
```

2. Crear y editar archivo index.html

```html
<html>
<body>
    {% include 'barra.html' %}
    <!-- código -->
</body>
</html>
```

### Herencia de plantillas

* Hay un archivo padre base.html que tiene una cabecera, un bloque cambiante (hijos) y un pie.

1. Crear y editar plantilla padre (Ej. base.html)

```html
<html>
<head>
    <title> 
        {% block title %}
        {% endblock %}
    </title>
</head>
<body>
    <h1> Informática </h1>
    <h2> Cursos de programación: </h2>
    {% block content %}
    {% endblock %}
    <p> Gracias por su visita </p>
</body>
</html>
```

2. Crear y editar plantilla hija (Ej. cursoc.html)

```html
{% extends 'base.html' %}

{% block title %} Curso C {% endblock %}

{% block content %}
    <p> Estamos a día: {{fecha}} </p>
{% endblock %}
```

3. Crear vista

```python
from django.shortcuts import render
def  cursoc(request):
    fecha_actual = datetime.datetime.now()
    return render(request, 'cursoc.html', {'fecha': fecha_actual})
```

4. Registrar url en urls.py

```python
urlpatterns = [
    path('cursoc/', cursoc),
]
```

## BBDD

* Ejemplo proyecto: Tienda Online

1. Crear proyecto:

```
$ django-admin startproject TiendaOnline 
```

2. Crear aplicación:

```
$ cd TiendaOnline
$ python manage.py startapp gestionPedidos 
```

Crea la siguiente estructura de carpetas:

* TiendaOnline
  * TiendaOnline
  * manage.py
  * gestionPedidos
    * migrations
    * admin.py
    * apps.py
    * models.py
    * tests.py
    * views.py

3. Editar archivo models.py

```python
from django.db import models

class Clientes(models.Model):
    nom = models.CharField(max_length=30)
    dir = models.CharField(max_length=50)
    mail = models.EmailField()
    tel = models.CharField(max_length=10)

    def __str__(self):
        pass

class Articulos(models.Model):
    nom = models.CharField(max_length=30)
    secc = models.CharField(max_length=20)
    precio = models.IntegerField()

    def __str__(self):
        pass

class Pedidos(models.Model):
    num = models.IntegerField()
    fecha = models.DateField()
    entregado = models.BooleanField()

    def __str__(self):
        pass
```

4. Registrar en settings.py

```python
INSTALLED_APPS = [
    #...
    'gestionPedidos',
]
```

5. Verificar si venimos bien

```
$ python manage.py check gestionPedidos

si muestra esto, esta ok:
System check identified no issues (0 silenced)
```

6. Crear BBDD

```
$ python manage.py makemigrations
```

* Crea BBDD archivo db.sqlite3  (ver con DB Browser)

7. Generar sqls

```
$ python manage.py sqlmigrate gestionPedidos 0001
```

8. Utilizar el código sql para crear la BBDD

```
$ python manage.py migrate
```

* Django por defecto agrega a todas las tablas un campo "id" que va a utilizar siempre como PK


### Manejo de datos 

```python

# INSERT
art = Articulos(nom='Mesa', secc='decoración', precio=9000)
art.save()

# UPDATE
art.precio = 9900
art.save()

# DELETE
art = Articulos.objects.get(id=6)
art.delete()

# SELECT
lista = Articulos.objects.all()

# SELECT con WHERE
lista = Articulos.objects.filter(secc='deportes')

# SELECT con WHERE y AND
lista = Articulos.objects.filter(nom='mesa', secc='decoración')

# SELECT con WHERE, AND y >
lista = Articulos.objects.filter(secc='deportes', precio__gte = 1000)

# SELECT con WHERE, AND y <
lista = Articulos.objects.filter(secc='deportes', precio__lte = 1000)

# SELECT con WHERE y ORDER BY ASC
lista = Articulos.objects.filter(precio__gte = 500).order_by('precio')

# SELECT con WHERE y ORDER BY DESC
lista = Articulos.objects.filter(precio__gte = 500).order_by('-precio')
```

* Cada cambio en el modelo, hacer las migraciones

```
$ python manage.py makemigrations
$ python manage.py migrate
```

## Panel de administración

* Usuarios, contenido, etc.

1. Ejecutar el servidor

```
$ python manage.py runserver
```

2. Acceder al panel de administración de django -> 127.0.0.1:8000/admin

3. Crear superusuario
  * Deterner servidor
  * $ python manage.py createsuperuser
4. Ejecutar el servidor
5. Volver al panel de administración
6. Loguearse
  
