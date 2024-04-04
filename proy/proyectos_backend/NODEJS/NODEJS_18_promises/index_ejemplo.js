/*

Promises:

. Permite escribir código asíncrono
. Sintaxis mas mantenible que callbacks

*/

function resquestHandler(req, res) {
  User.findById(req.userId)
    .then(function (user) {
      return Tasks.findById(user.tasksId);
    })
    .then(function (tasks) {
      tasks.completed = true;
      return tasks.save();
    })
    .then(function () {
      res.send("Tasks completed");
    })
    .catch(function (errors) {
      res.send(errors);
    });
}

// Código simple de entender
// Secuencia de tareas
