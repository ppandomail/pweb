/*

NPM (Node Package Manager):

. Además de módulos creados por nosotros y módulos que vienen con nodejs existen otros módulos creados por desarrolladores de la comunidad (módulos de 3ros. que son open source)
. Repo de módulos: https://www.npmjs.com 
. Ver módulos colors, cowsay, pa11y, etc.
. Permite administrar paquetes de nodejs: instalar módulos, desinstalar módulos, etc.
. Viene instalado junto con nodejs (son programas relacionados pero tienen desarrollos distintos)

npm --version

npm install colors       # también npm i colors

. Agregó 2 archivos y 1 carpeta:
  . package.json : tiene las dependencias
  . package-lock.json : lista de las dependencias por cada módulo instalado para el funcionamiento interno de nodejs
  . node_modules : en esta carpeta se descargan los módulos

*/

require('colors')

console.log('hello world'.bgGreen)
console.log('google.com'.bgYellow)

/*

Si se borra la carpeta node_modules o no se sube a repo de Git, en vez de instalar cada una de las 
dependencias, se instala masivamente de acuerdo a lo declarado en el package.json

npm install


NPM init

1. Crear una carpeta. Ej: NODEJS_14_npm_init
  mkdir NODEJS_14_npm_init

2. Iniciar nuevo proyecto en nodejs
  npm init
  # pregunta por: name, version, description, archivo inicial, git repository, keywords, author, license
  # se crea un package.json con más información

3. Otra forma (más rápida) de iniciar nuevo proyecto en nodejs
  npm init -y

4. Instalar dependencias
  npm i colors
  # se crea archivo package-lock.json y carpeta node_modules 

5. Crear carpeta src y dentro archivo app.js con la instrucción:
  console.log('Hello world')

6. Modificar sección de scripts dentro de package.json
  "scripts" : {
    "start" : "node src/app.js",
    "dev" : "node src/app.js"
  },

7. Ejecutar:
  npm start    #cuando es start sin run
  npm run dev  #cuando no es start con run

8. Instalar módulo de desarrollo "nodemon" para reiniciar automáticamente la aplicación cuando se detectan cambios
  npm i nodemon -D
  # -D hace que el módulo sea de desarrollo y no esencial para la aplicación
  # Crea en package.json la sección: 
  # "devDependencies": {
  #  "nodemon": "^3.1.0"
  # }

9. Modificar sección de scripts dentro de package.json
  "scripts" : {
    "start" : "node src/app.js",
    "dev" : "nodemon src/app.js"
  },

10. Ejecutar:
  npm run dev
  # Al realizar cambios en app.js se reinicia automáticamente la aplicación

*/
