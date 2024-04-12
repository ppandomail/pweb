# Express

## EJS Sintax

* IF

```js

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Index page',
    isActive: true
  })
})
```

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
