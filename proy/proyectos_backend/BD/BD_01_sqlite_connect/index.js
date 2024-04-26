/*

Base de datos:

. Es una colección organizada de datos que se almacenan de forma persistente en un sistema informático.
. Los datos se organizan en tablas o colecciones y se relacionan entre sí utilizando diferentes técnicas y estructuras de datos.
. Las bases de datos permiten almacenar, recuperar, modificar y eliminar datos de manera eficiente.
. También ofrecen funcionalidades para realizar consultas complejas, realizar análisis de datos, garantizar la integridad de los datos y aplicar reglas de seguridad y acceso.
. Existen diferentes tipos de bases de datos, incluyendo bases de datos relacionales, bases de datos NoSQL, bases de datos en memoria, bases de datos orientadas a objetos, entre otros.
. Cada tipo tiene sus propias características y se adapta a diferentes necesidades y requisitos de las aplicaciones.


. Como conectar Node a una BD (por ejemplo: SQLite, MySQL, Postgress, MongoDB, Redis, etc.)
. SQLite Cloud: es un servicio en la nube para sqlite
  . [URL de SQLite Cloud](https://sqlitecloud.io/)
  . registrarse
  . nombre de proyecto y password
  . crear un nodo (tarda 4 minutos aprox)

. Se instala en proyecto: npm i @sqlitecloud/drivers

*/

const { Database } = require("@sqlitecloud/drivers");

async function connectDB() {
  const database = new Database(
    "sqlitecloud://admin:HolaMundo123!!!@ctccla0bsk.sqlite.cloud:8860"
  );
  await database.sql("USE DATABASE chinook.sqlite");
  resultado = await database.sql("SELECT * FROM albums");
  console.log(resultado);
}

connectDB();
