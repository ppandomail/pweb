# Nodejs

## NPM

* Además de módulos creados por nosotros y módulos que vienen con nodejs
existen otros módulos creados por desarrolladores de la comunidad (módulos de 3ros. que son open source)
* [Repo de módulos](https://www.npmjs.com/)
* NPM : Node Package Manager
  * Permite administrar paquetes de nodejs: instalar módulos, desinstalar módulos, etc.
  * Viene instalado junto con nodejs (son programas relacionados pero tienen desarrollos distintos)
  * Ver módulos colors, cowsay, pa11y, etc.

```sh
npm --version
```

```sh
npm install colors

# también npm i colors
```

* Agregó 2 archivos y 1 carpeta:
  * package.json : tiene las dependencias
  * package-lock.json : lista de las dependencias por cada módulo instalado para el funcionamiento interno de nodejs
  * node_modules : en esta carpeta se descargan los módulos

```js
const colors = require('colors')

console.log('hello world'.bgGreen)
console.log('google.com'.bgYellow)
```

* Si se borra la carpeta node_modules o no se sube a repo de Git, en vez de instalar cada una de las dependencias, se instala masivamente de acuerdo a lo declarado en el package.json

```sh
npm install
```

## NPM init

1. Crear una carpeta. Ejemplo:

    ```sh
    mkdir first-node-project
    ```

1. Iniciar nuevo proyecto en nodejs

    ```sh
    npm init

    #pregunta por: name, version, description, archivo inicial, git repository, keywords, author, license
    #Con esto crea un package.json con más información
    ```

1. Otra forma (más rápida) de iniciar nuevo proyecto en nodejs

    ```sh
    npm init -y
    ```

1. Instalar dependencias

    ```sh
    npm i colors
    ```

1. Modificar sección de scripts dentro de package.json

    ```json
    "scripts" : {
      "start" : "node src/app.js",
      "dev" : "node src/app.js"
    },
    ```

    ```sh
    npm start    #cuando es start sin run
    npm run dev  #cuando no es start con run
    ```

1. Instalar módulo de desarrollo "nodemon" para reiniciar automáticamente la aplicación cuando se detectan cambios

    ```sh
    npm i nodemon -D

    # -D hace que el módulo sea de desarrollo y no esencial para la aplicación
    # Crea en package.json la sección: 
    # "devDependencies": {
    #  "nodemon": "^3.1.0"
    # }
    # Tenemos que poner en la sección script:
    # "dev" : "nodemon src/app.js"
    # Ejecutar: npm run dev
    # Al realizar cambios en app.js se reinicia automáticamente la aplicación
    ```

## Global modules

* Es otra forma de instalar módulos
* Al hacer require, busca
  * 1ro. en carpeta node_modules
  * 2do. entre nuestro modulos del proyecto
  * 3ro. modulos que tiene node instalados
  * 4to. contexto global del sistema: /usr/local/lib

```sh
npm i nodemon -g      # instala el módulo en forma global
npm remove nodemon -g # desinstala el módulo
npm list              # lista módulos instalados en el proyecto
npm list -g           # lista módulos instalados en forma global  
```

## NPX

* Ejecutar aplicaciones de consola que pueden instalarse con nodejs

  ```sh
  npx cowsay Hello world!   #vaca que dice Hello world!
  ```

* Otro ejemplo: creamos una carpeta llamada public y dentro un archivo index.html

    ```html
    <html>
    <head>
      <title>Hello world!</title>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
    </html>
    ```

* Luego ejecutamos un módulo servidor llamado "serve"

  ```sh
  npx serve public   #public es la carpeta creada
  ```

* Otro ejemplo

  ```sh
  npx nodemon index.js
  ```

## Event Loop

### Ejemplo 1

```js
console.log("First")
console.log("Second")
console.log("Third")

First
Second
Third
```

### Ejemplo 2

* Nodejs coloca la función que muestra "Second" como una tarea pendiente y sigue ejecutando la siguiente línea

```js
console.log("First")
setTimeout(() => {
  console.log("Second")
}, 3000)
console.log("Third")

First
Third
Second
```

* Por más que el tiempo sea 0, lo manda a ejecutar a otro lado.

### Ejemplo 3

```js
const http = require("http");

const server = http.createServer((req, res) => {
  
  if (req.url === "/") {
    return res.end("Welcome to the server");
  }

  if (req.url === "/about") {

    // Simulo una tarea pesada (blocking code)
    for (let i = 0; i < 100000; i++) {
      console.log(Math.random() * i)
    }

    return res.end("About page");
  }

  res.end("not found");
});

server.listen(3000)
console.log("Server on port 3000")
```

* Ejecutamos el programa  
* Vamos al navegador y escribimos localhost:3000 y muestra "Welcome to the server" y si escribimos localhost:3000/about vemos que queda procesando a causa de la tarea pesada
* Si abrimos otra pestaña y escribimos localhost:3000 hasta que no termine el procesamiento no va a mostrar "Welcome to the server", es decir, el hilo principal de nodejs está bloqueado, no dejando que continue atendiendo otras peticiones.
* Solución: utilizar código asíncrono que se ejecuta en 2do plano

## Promises

* Permite escribir código asíncrono (sintaxis mas mantenible que callbacks)

```js
const { readFile } = require("fs");

const getText = (pathFile) => {
  return new Promise(function (resolve, reject) {
    readFile(pathFile, "utf-8",
      (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
  });
};

getText('./data/first.txt')
.then(result => console.log(result))
.catch(error => console.log(error))
```

## async / await

* **async**: sirve para especificar que una función adentro esta manejando código asíncrono.
* **await**: para indicar que estamos usando una función asíncrona y ese codigo va a tomar un tiempo

* Ambas ayudan a escribir las promesas de una mejor forma.

```js

// Ejecuta esto y cuando termines me das el resultado

const result = await getText('./data/first.txt')
```

* Para que funcione ese await tiene que estar en una función mas grande y es necesario que sea async

```js
async function read() {
  try {
    const result = await getText('./data/first.txt')
    const result2 = await getText('./data/second.txt')
    console.log(result)
    console.log(result2)
  } catch(error) {
    console.log(error)
  }
}

read()
```

## promisify

* Toma una función  (err, value) => ... y devuelve una versión que devuelve promesas

```js
const { readFile } = require("fs");
const { promisify } = require("util")
const readFilePromise = promisify(readFile)

async function read() {
  try {
    const result = await readFilePromise('./data/first.txt', 'utf-8')
    console.log(result)
  } catch(error) {
    console.log(error)
  }
}

read()
```

## fs/promise

* Dentro de fs hay una carpeta promises que ya tiene módulos que devuelven promesas

```js
const { readFile } = require("fs/promises");

async function read() {
  try {
    const result = await readFile('./data/first.txt', 'utf-8')
    console.log(result)
  } catch(error) {
    console.log(error)
  }
}

read()
```

## Eventos que tratan con datos

```js
const Event = require("events");

const event = new Event();

// en vez de response podria haber sido xy (cualquier nombre)
event.on("response", (data) => {
  console.log(data);
});

event.emit("response", "Hello world!!!");
```

## Streams

* Nos ayudan a poder enviar un archivo grande o a poder dividir un archivo grande en multiples partes para que pueda ser transmitido fácilmente

```js
const { writeFile } = require("fs/promises")

const createBigFile = async () => {
    await writeFile('./data/bigfile.txt', "hello world ".repeat(1000000))
}

createBigFile()
```

```js
const { createReadStream } = require("fs");

const stream = createReadStream("./data/bigfile.txt", "utf-8");

// El evento se dispara en la lectura del archivo
stream.on("data", (chunk) => {
  console.log(chunk);
});

stream.on("close", () => {
  console.log("Ya terminé de leer el archivo");
});
```

## Ecmascript modules

* Hay una forma standard de importar módulos
* Es necesario que el package.json tenga la entrada:

```json
{
  "type" : "module"
}
```

* ECMASCRIPT: reglas que JS sigue (standard)

  ```js
  function add(x, y) {
    return x + y
  }

  function subtract(x, y) {
      return x - y
  }

  function multiply(x, y) {
      return x * y
  }

  function divide(x, y) {
      return x / y
  }

  export default {
      add,
      subtract,
      multiply,
      divide
  }
  ```

  ```js
  import math from './math/index.js'

  console.log(math.add(10, 20));
  ```

* También se puede exportar de forma individual

  ```js
  export function add(x, y) {
    return x + y
  }

  export function subtract(x, y) {
      return x - y
  }

  function multiply(x, y) {
      return x * y
  }

  function divide(x, y) {
      return x / y
  }
  ```

  ```js
  import { add, substract } from './math/index.js'

  console.log(add(10, 20));
  console.log(substract(10, 20));
  ```

## FETCH

* Es una API que viene incluida
* Permite traer datos (recursos) de una URL de forma asíncrona (la solicitud se realiza en segundo plano y no bloquea la ejecución del resto del código JS)
* [Sitio que nos da datos falsos](https://jsonplaceholder.typicode.com/)

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  // manipular la respuesta recibida
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(error => {
    // capturar y manejar cualquier error de red
  })
```

* Lo mismo que el programa de arriba pero con async/await

```js
async function loadData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}

loadData()
```

## JSON

* JSON : JavaScript Object Notation
* Es un formato ligero de intercambio de datos.
* Es muy usado para representar y transmitir datos en aplicaciones web.
* Está compuesto por una colección de pares de clave-valor, donde la clave es una cadena y el valor puede ser de cualquier tipo de dato válido en JSON, como un número, una cadena de texto, un booleano, un objeto JSON anidado o un arreglo de valores.
* { } para delimitar el JSON y los pares clave-valor separados por dos puntos (:)
* Ejemplo:

```json
{
  "nombre": "Juan",
  "edad": 30,
  "activo": true,
  "hobbies": ["futbol", "lectura", "viajes"],
  "direccion": {
    "calle": "Calle Principal",
    "numero": 123,
    "ciudad": "Ciudad Ejemplo"
  }
}
```
