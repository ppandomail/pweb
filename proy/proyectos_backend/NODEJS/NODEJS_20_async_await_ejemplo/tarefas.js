const util = require("util");

// convierte setTimeout callback a promesa
// Toma una función  (err, value) => ... y devuelve una versión que devuelve promesas
const dormir = util.promisify(setTimeout);

module.exports = {
  async tarefa_1() {
    await dormir(4000);
    return "VALOR UM";
  },

  async tarefa_2() {
    await dormir(2000);
    return "VALOR DOIS";
  },
};
