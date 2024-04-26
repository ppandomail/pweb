const { Database } = require("@sqlitecloud/drivers");

async function getAlbums() {
  const database = new Database(
    "sqlitecloud://admin:HolaMundo123!!!@ctccla0bsk.sqlite.cloud:8860"
  );
  await database.sql("USE DATABASE chinook.sqlite");
  return await database.sql("SELECT * FROM albums");
}

module.exports = getAlbums;
