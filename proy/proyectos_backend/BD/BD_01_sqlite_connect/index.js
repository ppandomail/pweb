/*

SQLite Cloud:

. Es un servicio en la nube para sqlite
. [URL de SQLite Cloud](https://sqlitecloud.io/)
  . registrarse
  . nombre de proyecto y password
  . crear un nodo (tarda 4 minutos aprox)

. [Doc SQLite Cloud](https://docs.sqlitecloud.io/)
. [Tutorial](https://www.sqlitetutorial.net/)

. Se instala en proyecto: npm i @sqlitecloud/drivers

*/

const { Database } = require("@sqlitecloud/drivers");
const { SQLITE_USR, SQLITE_PWD } = require("./config.js");

async function connectDB() {
  const database = new Database(
    "sqlitecloud://" +
      SQLITE_USR +
      ":" +
      SQLITE_PWD +
      "@ctccla0bsk.sqlite.cloud:8860"
  );

  await database.sql("USE DATABASE test");
  resultado = await database.sql(
    "SELECT p.nombre AS nombre_persona, p.apellido AS apellido_persona, c.nombre AS nombre_ciudad " +
      "FROM personas AS p, ciudades AS c " +
      "WHERE p.ciudad_id = c.ciudad_id"
  );
  console.log(resultado);

  resultado = await database.sql("SELECT * FROM personas WHERE nombre != 'Bill'");
  console.log(resultado);
}

connectDB();
