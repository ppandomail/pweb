/*

await: 

. Para indicar que estamos usando una función asíncrona y ese codigo va a tomar un tiempo
. Sólo esta disponible en las funciones async

async: 

. Para especificar que una función adentro esta manejando código asíncrono.

. Ambas ayudan a escribir las promesas de una mejor forma.

*/

async function resquestHandler(req, res) {
  try {
    const user = await User.findById(req.userId);
    const tasks = await Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    res.send("Tak Completed");
  } catch (err) {
    res.send(err);
  }
}
