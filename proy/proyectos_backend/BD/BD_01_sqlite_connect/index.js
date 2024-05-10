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

async function connectDB() {
  const database = new Database(
    "sqlitecloud://admin:HolaMundo123!!!@ctccla0bsk.sqlite.cloud:8860"
  );
  await database.sql("USE DATABASE test");
  resultado = await database.sql(
    "SELECT p.nome, p.sobrenome, c.nome " + 
    "FROM pessoas AS p, cidades AS c " +
    "WHERE p.cidade_id = c.cidade_id");
  console.log(resultado);
}

connectDB();
