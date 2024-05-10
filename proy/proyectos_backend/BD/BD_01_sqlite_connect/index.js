/*

SQLite Cloud:

. Es un servicio en la nube para sqlite
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
