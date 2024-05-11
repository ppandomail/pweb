const { Database } = require("@sqlitecloud/drivers");
const { SQLITE_USR, SQLITE_PWD } = require("./config.js");

async function getAlbums() {
  const database = new Database(
    "sqlitecloud://" +
      SQLITE_USR +
      ":" +
      SQLITE_PWD +
      "@ctccla0bsk.sqlite.cloud:8860"
  );
  await database.sql("USE DATABASE chinook.sqlite");
  return await database.sql(
    "SELECT b.title AS title, a.name AS name FROM artists AS a, albums AS b WHERE a.ArtistId = b.ArtistId"
  );
}

module.exports = getAlbums;
