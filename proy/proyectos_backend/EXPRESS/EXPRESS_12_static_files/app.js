/*

Static files:

. Para servir contenido (múltiples archivos)
. Ejemplo: creo archivo html, css y js dentro de una carpeta con cualquier nombre 
  (convención es llamarla static o public) y los enlazo con el tag link y script respectivamente.

. Cuando queremos enviar la carpeta static, en vez de estar enviando archivo por archivo 
  podemos decirle a express que toda la carpeta static es pública (accesible desde el browser)

*/

const express = require("express");

const app = express();

app.use(express.static("./static"));

app.listen(3000);
console.log("Servidor no porto 3000");

/*

. Si en el browser pongo https://localhost:3000/ vemos que están los css
. Si abro la consola del navegador está el texto Bemvindo

*/
