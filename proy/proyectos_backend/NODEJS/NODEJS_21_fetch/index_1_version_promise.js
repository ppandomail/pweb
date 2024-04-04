/*

fetch:

. Es una API que viene incluida
. Permite traer datos (recursos) de una URL de forma asíncrona (la solicitud se realiza en segundo plano y no bloquea la ejecución del resto del código JS)
. Sitio que nos da datos falsos: https://jsonplaceholder.typicode.com/

JSON (JavaScript Object Notation):

. Es un formato ligero de intercambio de datos.
. Usado para representar y transmitir datos en aplicaciones web.
. Compuesto por una colección de pares de clave-valor
. Ejemplo:

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

*/

fetch("https://jsonplaceholder.typicode.com/posts")
  // manipular la respuesta recibida
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });
