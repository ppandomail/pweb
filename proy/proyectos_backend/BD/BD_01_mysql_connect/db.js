const mysql = require("mysql2/promise");

async function connectDB() {
  // credenciales obtener de PlanetScale botón Connect
  const conn = await mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "db",
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const resultado = await conn.query('SELECT "Bemvindo" AS Resultado');
  console.log(resultado);
}

module.exports = connectDB;
