/*

Callbacks:

. Permite escribir código asíncrono
. Nodejs no espera a que se terminen de ejecutar los procesos
. Es una función que espera la respuesta

*/

function resquestHandler(req, res) {
  User.findById(req.userId, function (err, user) {
    if (err) {
      res.send(err);
    } else {
      Tasks.findById(user.tasksId, function (err, tasks) {
        if (err) {
          res.send(err);
        } else {
          tasks.completed = true;
          tasks.save(function (err) {
            if (err) {
              res.send(err);
            } else {
              res.send("Task completed");
            }
          });
        }
      });
    }
  });
}

// Es código válido pero dificil de leer
// Se lo conoce como pirámide de la muerte
// Solución: Promesas
