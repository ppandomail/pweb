# Express

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
