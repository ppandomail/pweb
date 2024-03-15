# Postman

## Concepto

* Plataforma que nos permite crear peticiones sobre APIs de forma sencilla y poder testearlas (estructura e información json correcta, que el mensaje haya llegado - status code == 200 - )
* Se organiza en **Workspaces** (se clasifican según su visibilidad en: personales, privados, de equipo o públicos) dentro de cada se subdivide en **Collections** y dentro de las colecciones están los **Request**

## Instalación

* Linux

```sh
sudo snap install postman
```

* [Descargando el paquete desde la web de Postman](https://www.postman.com/downloads/)

## Primeros pasos

1. Crear una Collection (New / Import)
1. Crear un Request (Add Request)
    * Introducir URL. Ejemplo: https://jsonplaceholder.typicode.com/posts
    * Seleccionar Método. Ejemplo: GET

| Método | Uso |
| -- | -- |
| GET | Para solicitar datos |
| POST | Para generar un recurso |
| PUT | Para actualizar enviando todo el objeto a modificar |
| PATCH | Para actualizar enviando solo lo que queremos modificar |
| DELETE | Para borrar un recurso |

1. Una vez que tenemos el request seteado con el botón **Send** se ejecuta el Request y en la parte inferior se verá la respuesta del servidor en base a esa consulta.
1. Cada vez que realizamos una petición obtenemos una respuesta con un código en relación a si la misma fue exitosa o no. Los códigos más comunes son:

| Código | Significado |
| -- | -- |
| 1XX | Informacional |
| 2XX | Exito. Ejemplo 200 -> Transferencia fue correcta |
| 3XX | Redirección |
| 4XX | Error en el cliente. Ejemplo 404 -> Recurso no encontrado |
| 5XX | Error en el servidor |

## Variables

* Postman permite la generación y utilización de variables.
* Para usarlas, primero es necesario que la variable este generada a nivel de entorno o de colección.
* El llamado de la variable se realiza utilizado doble llaves y el nombre de la variable **{{nombre_variable}}** en donde se la desee insertar. Ejemplo en la URL: GET {{nombre_variable}}

## Tests

* Postman posee la posibilidad de realizar diferentes scripts (en JavaScript) para personalizar el comportamiento de las ejecuciones, poder realizar diferentes test y guardar información en caso de necesario, entre otras cosas.
* Para hacer esto existen dos secciones diferentes:
  * Los scripts que figuren en **Pre-request Scripts** se ejecutaran previo a realizar el request
  * Todo lo que figure en **Test** se ejecutará una vez que la petición termina.

```js
pm.test("Status code is 200", function () {
pm.response.to.have.status(200);
});
```

* Postman posee algunos snippets que facilita la generación de scripts.

## Guardar información en una variable

* Para acceder al body en formato json del response -> pm.response.json()
* Para acceder a los headers del response -> pm.response.headers.all()
* Para acceder a las cookies -> pm.cookies.get("nombre de la cookie")

* Una vez que accedemos a la información que queremos guardar con los siguientes métodos podrás guardala en una variable:

* Para cuando utilizamos una variable de colección

```js
pm.collectionVariables.set(cont, 1)

const jsonData = pm.response.json()
pm.collectionVariables.set('userID', jsonData.data.id)
```

* Para cuando utilizamos una variable de entorno

```js
pm.environment.set(cont, 1)
```

## Practica

* [Link 1](https://restful-booker.herokuapp.com/)
* [Link 2](https://gorest.co.in/)
