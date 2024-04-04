const { tarefa_1, tarefa_2 } = require("./tarefas");

async function main() {
  console.time("Medindo o tempo");
  const resultado = await Promise.all([tarefa_1(), tarefa_2()]);
  console.timeEnd("Medindo o tempo");

  console.log(resultado[0]);
  console.log(resultado[1]);
}

main();
