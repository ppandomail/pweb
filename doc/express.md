# Express

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
