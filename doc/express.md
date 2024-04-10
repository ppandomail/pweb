# Express

## Routing

* Crear un servidor que puede enviar distintas rutas. Ejemplo: /profile, /dashboard, /product, etc.

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('Hello world!')
});

app.get("/about", (req, res) => {
  res.send("About")
});

app.get("/weather", (req, res) => {
  res.send("The current weather is Nice")
});


app.use((req, res) => {
  res.status(404).send("No se encontró tu página")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

## HTTP Methods

| Verbo | Significado |
| -- | -- |
| GET | Cliente trata de obtener algo |
| POST | Cliente envia datos al servidor para guardarlos |
| PUT | Cliente trata de actualizar algo |
| DELETE | Cliente trata de eliminar algo |

* Todas las url que escriba en la barra de direcciones del navegador serán peticiones GET
* El resto de las peticiones (POST, PUT, DELETE) puedo probarlas por Postman o instalando en VSC el plugin Thunder Client (aparece un rayo) y un botón New Request

```js
const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.send('Lista de productos')
})

app.post("/products", (req, res) => {
  res.send("Creando productos")
})

app.put("/productos", (req, res) => {
  res.send("Actualizando producto")
});

app.delete("/productos", (req, res) => {
  res.send("Eliminando producto")
})

app.listen(3000)
console.log('Server on port 3000')
```

## Http Response

* ¿Qué puede responder el servidor: texto, archivos html, videos, audios, json, xml, etc.

```js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send('Hello world')
})

app.get("/miarchivo", (req, res) => {
  res.sendFile('./javascript.png', {
    root: __dirname
  })
})

app.get("/user", (req, res) => {
  res.json({"name" : "pepe"})
})
// Validador de json: https://jsonformatter.curiousconcept.com/
// Extensión de Chrome JSON Viewer: https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh

app.get("/isAlive", (req, res) => {
  res.sendStatus(204)
})
// 204: Este código significa que el servidor ha procesado con éxito la solicitud, pero no va a devolver ningún contenido

app.listen(3000)
console.log('Server on port 3000')
```

## Request body

* El cliente puede enviarle al servidor: texto, un objeto json, archivo, datos a partir de un formulario html, etc.
* Estructura del request y del response:
  * **endpoint**: Ruta. Ej: /endpoint
  * **header**: Formato de los datos. Ej: json
  * **body**: Datos. Ej: {...}

```js
const express = require("express");
const app = express();

// Es para que express procese el texto que le envia el cliente. Sin esta línea req.body es undefined
app.use(express.text())

// Es para que express procese el json que le envia el cliente. Sin esta línea req.body es vacio {}
app.use(express.json())

// Es para que express pueda entender los datos que vienen de un formulario.
app.use(express.urlencoded({extended: false}))

//Lo pruebo con el cliente rest (plugin Thunder Client) Body -> Text : Hello world
app.post("/texto", (req, res) => {
  console.log(req.body)
  res.send('Recibí un texto')
})

//Lo pruebo con el cliente rest (plugin Thunder Client) Body -> Json : { "email" : "pepe@gmail.com"}
app.post("/user", (req, res) => {
  console.log(req.body)
  res.send('Nuevo usuario creado')
})

//Lo pruebo con el cliente rest (plugin Thunder Client) Body -> Form-encode :
//title  mi primer título
//desc   descripcion del form 
app.post("/user", (req, res) => {
  console.log(req.body)
  res.send('Nuevo usuario creado')
})

app.listen(3000)
console.log('Server on port 3000')
```

## Request Params

* URL que tenga datos
* Parámetros: valores que pueden ir cambiando
* Ejemplo: hello/joe, hello/pepe, hello/ana

```js
const express = require("express");
const app = express();

app.get("/hello/:username", (req, res) => {
  console.log(req.params)
  res.send('Hello ${req.params.username}')
})
// en el browser  https://localhost:3000/hello/pepe

app.get("/add/:x/:y", (req, res) => {
  const x = parseInt(req.params.x)
  const y = parseInt(req.params.y)
  const result = x + y
  res.send('Result: ${result}')
})
// en el browser  https://localhost:3000/add/20/30

// Otra versión para el add
app.get("/add/:x/:y", (req, res) => {
  const {x, y} = req.params
  res.send('Result: ${parseInt(x) + parseInt(y)}')
})

app.get("/nombre/:nom/edad/:edad", (req, res) => {
  const {nom, edad} = req.params
  res.send('El usuario ${nom} tiene ${edad} años')
})

app.listen(3000)
console.log('Server on port 3000')
```

## Queries

* ? es una consulta
* Ejemplo: hello/joe?x=20&y=30

```js
const express = require("express");
const app = express();

app.get("/add/:username", (req, res) => {
  console.log(req.query)
  const {x, y} = req.query
  res.send('Result: ${parseInt(x) + parseInt(y)}')
})
// en el browser  https://localhost:3000/add/pepe?x=20&y=30

app.get("/search", (req, res) => {
  if (req.query.q === 'javascript books')
    res.send('Lista de libros de javascript')
  else
    res.send('Página normal')
})

app.listen(3000)
console.log('Server on port 3000')
```

## Método all

* all: significa que la ruta funciona con métodos get, post, put, delete

```js
const express = require("express");
const app = express();

app.all("/info", (req, res) => {
  res.send('server info')
})

app.listen(3000)
console.log('Server on port 3000')
```

## Middleware

* Flujo normal: BROWSER ---REQUEST---> /profile
* Flujo middle: BROWSER ---REQUEST---> showInfo() ---> /profile  

* Es una función que se ejecute antes de ejecutar la función de cuaquier ruta. Por ejemplo para loggear algo

```js
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log('Route: ${req.url}  Method: ${req.method}')

  next() // es una función para que express continue con su flujo normal.

})

app.get("/profile", (req, res) => {
  res.send('profile page')
})

app.get("/about", (req, res) => {
  res.send('about page')
})

app.listen(3000)
console.log('Server on port 3000')
```

* Ejemplo flujo de protección de ruta
  * BROWSER ---REQUEST---> isAuthenticated ---> /dashboard
            <--RESPONSE---/
            (Not authorized)

```js
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log('Route: ${req.url}  Method: ${req.method}')
  next()
})

app.use((req, res, next) => {
  if (req.query.login === 'xxx@gmail.com')
    next()
  else
    res.send('Not authorized')
})

app.get("/dashboard", (req, res) => {
  res.send('dashboard page')
})

app.listen(3000)
console.log('Server on port 3000')
```

* Si tendria /profile o /about debajo del middleware no estaría autorizado
* Para que no tenga efecto el middleware pongo los métodos arriba del/los middleware/s

```js
const express = require("express");
const app = express();

app.get("/profile", (req, res) => {
  res.send('profile page')
})

app.get("/about", (req, res) => {
  res.send('about page')
})

app.use((req, res, next) => {
  console.log('Route: ${req.url}  Method: ${req.method}')
  next()
})

app.use((req, res, next) => {
  if (req.query.login === 'xxx@gmail.com')
    next()
  else
    res.send('Not authorized')
})

app.get("/dashboard", (req, res) => {
  res.send('dashboard page')
})

app.listen(3000)
console.log('Server on port 3000')
```

## Middleware de Terceros

* Podemos instalar paquetes que nos permitan agregar middlewares a nuestra aplicación
* Buscar en google: npm morgan (nos permite ver en consola las peticiones que van llegando)

```sh
npm i morgan
```

```js
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan())
// Probar app.use(morgan([combined, common, dev, short, tiny]))

app.get("/profile", (req, res) => {
  res.send('profile page')
})

app.get("/about", (req, res) => {
  res.send('about page')
})

app.listen(3000)
console.log('Server on port 3000')
```

## Rest API CRUD

* Es un servidor que tiene ciertas URLs que nos va a permitir procesar datos
* Ejemplo: aplicación que guarde productos (ejemplo arreglo de JS)
  * GET /products
  * POST /products
  * GET /products/:id
  * PUT /products/:id
  * DELETE /products/:id

```sh
mkdir express-rest-api-crud
npm init -y
npm i express morgan
npm i nodemon -D
touch server.js
```

* En package.json en la sección scripts

```json
"scripts" : {
  "dev" : "nodemon server.js"
},
```

* Se ejecuta...

```sh
npm run dev
```

* Edito el archivo server.js

```js
const express = require("express");
const express = require("morgan");

const app = express();
let products = []

app.use(morgan('dev'))
app.use(express.json())

app.get("/products", (req, res) => {
  res.json(products)
})

app.post("/products", (req, res) => {
  // se crea un nuevo objeto con id 
  const newProduct = {...req.body, id: products.length + 1}
  products.push(newProduct)
  res.send(newProduct)
})

app.put("/products", (req, res) => {
  const newData = req.body
  const productFound = products.find((p) =>  p.id === parseInt(req.params.id))
  if (!productFound)
    return res.status(404).json({message: 'Product not found'})
  products.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p)
  res.json({
    message: "Product updated successfully"
  })
})

app.delete("/products", (req, res) => {
  const productFound = products.find((p) =>  p.id === parseInt(req.params.id))
  if (!productFound)
    return res.status(404).json({message: 'Product not found'})
  products = products.filter( p => p.id !== parseInt(req.params.id))
  res.sendStatus(204)
})

app.get("/products/:id", (req, res) => {
  const productFound = products.find((p) =>  p.id === parseInt(req.params.id))
  if (!productFound)
    return res.status(404).json({message: 'Product not found'})
  res.json(productFound)
})

app.listen(3000)
console.log('Server on port 3000')
```

## Settings

* Cambiar comportamiento por defecto del framework

```js
const express = require("express");

const app = express();

// variables seteadas por el programador
app.set('appname', 'pweb2')
app.set('port', 3000)

// variables de express que el programador le cambia el valor
app.set('case sensitive routing', true)

app.listen(app.get('port'))
console.log("Server ${app.get('appname')} on port ${app.get('port')}")
```

## Static files

* Para servir contenido (múltiples archivos)
* Ejemplo: creo archivo html, css y js dentro de una carpeta con cualquier nombre (convención es llamarla static o public) y los enlazo con el tag link y script respectivamente.

```html
<!DOCTYPE html>
<html>
<head lang="en">
  <meta charset="utf-8">
  <title>Hello world</title>
  <link rel="stylesheet" type="text/css" href="./index.css">
</head>
<body>
  <h1>Hello world</h1>
  <script src="./index.js"></script>
</body>
</html>
```

```css
body {
  background: #202020;
  color: white;
}
```

```js
console.log('Hello world')
```

* Cuando queremos enviar la carpeta static, en vez de estar enviando archivo por archivo podemos decirle a express que toda la carpeta static es pública (accesible desde el browser)

```js
const express = require("express");

const app = express();

app.use(express.static('./static'))

app.listen(3000)
console.log("Server on port 3000")
```

* Si en el browser pongo https://localhost:3000/ vemos que están los css y si abro la consola del navegador está el Hello world

## Express router

* Dividir una aplicación en múltiples partes
* Crear múltiples archivos y al final unirlos todos en una sola aplicación

### Una forma

* Archivo users.js

```js
function UserRoutes(app) {

  app.get("/username", (req, res) => {
    res.send("username route")
  })

  app.get("/profile", (req, res) => {
    res.send("profile page")
  })

}

module.exports = UserRoutes
```

* Archivo home.js

```js
function HomeRoutes(app) {

  app.get("/about", (req, res) => {
    res.send("about page")
  })

  app.get("/dashboard", (req, res) => {
    res.send("dashboard page")
  })

}

module.exports = HomeRoutes
```

* Archivo index.js

```js
const express = require("express");

const app = express();

const HomeRoutes = require("./home")
const UserRoutes = require("./users")

HomeRoutes(app)
UserRoute(app)

app.listen(3000)
console.log("Server on port 3000')"
```

### Otra forma

* Archivo users.js

```js
const express = require('express')

const router = express.Router()

router.get("/username", (req, res) => {
  res.send("username route")
})

router.get("/profile", (req, res) => {
  res.send("profile page")
})

module.exports = router
```

* Archivo home.js

```js
const express = require('express')

const router = express.Router()

router.get("/about", (req, res) => {
  res.send("about page")
})

router.get("/dashboard", (req, res) => {
  res.send("dashboard page")
})

module.exports = router
```

* Archivo index.js

```js
const express = require("express");

const app = express();

const HomeRoutes = require("./home")
const UserRoutes = require("./users")

app.use(HomeRoutes)
app.use(UserRoutes)

app.listen(3000)
console.log("Server on port 3000')"
```

## Template engine

* Motor de plantilla
* Crear múltiples páginas y que todas compartan una misma interface, compartir datos.
* Procesar archivos htmls en el backend y enviarle al frontend estos htmls
* Módulo ejs: Embedded JavaScript templating
* [Sitio EJS](https://ejs.co/)

```sh
npm i ejs
```

* Crear en el proyecto la carpeta views y dentro un archivo index.ejs (no tiene porque estar en una carpeta tampoco tiene porque tener extensión ejs)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Pagina con EJS</title>
</head>
<body>
  <h1>Pagina con Express</h1>

</body>
</html>

```

```js
const express = require("express");
const path = require('path')
const ejs = require('ejs')

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))

app.get('/about', (req, res) => {
  res.render('index')
})

app.listen(3000)
console.log('Server on port 3000')
```

* Pasarle datos desde el servidor al html

```js
app.get('/about', (req, res) => {
  const unTitle = 'Mi pagina creada desde Express'
  res.render('index', { title: unTitle })
})
```

```html
<h1>
  <%= title %>
</h1>
```

## EJS Partials

```js

app.get('/', (req, res) => {
  res.render('index', {title: 'Index page'})
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/dashboard', (req, res) => {
  res.render('dashboard')
})
```

* Archivo header.ejs

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Pagina con EJS</title>
</head>
<body>
```

* Archivo footer.ejs

```html
</body>
</html>
```

* Archivo index.ejs

```html
<%- include('./header'); %>
<h1> <%= title %> </h1>
<%- include('./footer'); %>
```

* Archivo about.ejs

```html
<%- include('./header'); %>
<h1>About</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<%- include('./footer'); %>
```

* Archivo dashboard.ejs

```html
<%- include('./header'); %>
<h1>Dashboard</h1>
<%- include('./footer'); %>
```

## EJS Sintax

* IF

```js

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Index page',
    isActive: true
  })
})
````

```html
<% if (isActive) { %>
  <p>El servidor está activo</p>
<% } else { %>
  <p>El servidor está inactivo</p>
<% } %>

<%= new Date() %>
```

* WHILE

```js

app.get('/', (req, res) => {

  const users = [
    { id: 1, name: "ryan"},
    { id: 2, name: "joe"}
  ]

  res.render('index', {
    title: 'Index page',
    isActive: true,
    users: users
  })
})
```

```html
<ul>
  <% for(let i = 0; i < users.length; i++) { %>
    <li> <%= users[i].name %> </li>
  <% } %>
</ul>
```

## Async code

* Como manejar código que no está en nuestro servidor que podemos consultarlo a otro sistema externo (BD, servidor, etc.)

```sh
npm i axios
```

```js
const axios = require('axios')

app.get('/post', async (req, res) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  res.render('posts', {
    posts: response.data
  })
})
```

```html
<% for (let i = 0; i < posts.length; i++) { %>
    <article> 
      <h1> <%= posts[i].title %> </h1>
      <p> <%= posts[i].body %> </p>
    </article>
<% } %>
```

## Base de Datos

* Como conectar Express a una BD (por ejemplo: MySQL, Postgress, MongoDB, Redis, etc.)
* PlanetScale: es un servicio en la nube para MYSQL (todo siguiente hasta que pide nombre de la base de datos, por ejemplo: expressdb)

```sh
npm i mysql2
```

* Se crea el archivo db.js

```js
const mysql = require('mysql2/promise')

async function connectDB() {
  // credenciales obtener de PlanetScale botón Connect
  const conn = await mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: 'expressdb',
    ssl: {
      rejectUnauthorized: false
    }
  })

  const result = await conn.query('SELECT "Hello world!" AS Result')
  console.log(result)
}

module.exports = connectDB
```

* index.js

```js
const express = require("express");
const path = require('path')
const ejs = require('ejs')
const connectDB = require('./db')

connectDB()

const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))

app.get('/about', (req, res) => {
  res.render('index')
})

app.listen(3000)
console.log('Server on port 3000')
```
