// Importar el módulo de Express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir una ruta para la raíz del sitio
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

// Escuchar en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

