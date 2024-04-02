# Deploy

* Es el proceso de llevar los cambios o nuevas funcionalidades de los equipos locales (de los desarrolladores) al ambiente de producción (el que usan los usuarios finales)
* "Subirlo a Internet"
* Si queremos desplegar, Nodejs tiene que estar instalado en el computador que lo ejecute siempre.
* Servidores para hacer deploy gratis: HEROKU, Firebase, GitHub Pages, netlify
* HEROKU es un servicio en la nube que permite desplegar aplicaciones en distintos lenguajes. Es gratuito.
  * [Sitio](https://www.heroku.com/)
  * Registrarse
  * Boton Create new app
  * Completar App name
  * Instalar Herokucli
  * Crear repo GIT (gitignore para la carpeta node_modules)
  * Modificar en app.js const port = process.env.PORT || 3000
  * Modificar en package.json "start" : "node app.js"

```sh
heroku --version
heroku login
heroku git:remote -a <repo que te da heroku>
git push heroku master
...log....
https://<url>  deployed to Heroku

heroku open
```
