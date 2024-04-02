# Nodejs

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
