const { tarefa_1, tarefa_2 } = require("./tarefas");

async function main() {
  console.time("Medindo o tempo");
  const valor_1 = await tarefa_1();
  const valor_2 = await tarefa_2();
  console.timeEnd("Medindo o tempo");

  console.log(valor_1);
  console.log(valor_2);
}

main();
