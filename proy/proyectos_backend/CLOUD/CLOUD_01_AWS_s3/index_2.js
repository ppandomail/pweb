/*

S3:

. Como configurar AWS para que podamos conectarlo con el servidor de nodejs
. Sitio: https://aws.amazon.com/es/
. Registrarse: ppandomail@gmail.com / HolaMundo123!!!
* Servicios/Almacenamiento/S3
* Botón Crear Bucket (carpeta que está en la nube para poder almacenar archivos)
* Poner nombre del bucket y crearlo.

* Servicios/IAM : administrar el acceso a los recursos de AWS
  1. Crear politica: Servicio: s3, Lectura: GetObject, Escritura: PutObject, Enumerar: ListBucket, Recurso: bucket pweb2, object \*. Siguiente y nombre politica : tutorial 
  2. Crear usuario: nombre: user_pweb2 y asignarle la política.

* En el proyecto crear un archivo .env (ver contenido):
* Instalar módulo dotenv para que lea el archivo .env : npm i dotenv
* Crear archivo config.js (ver contenido)

video: https://www.youtube.com/watch?v=sDVRyFaoI8s&list=PLL0TiOXBeDahTsuVTKGV8SLG4XiCGnstS&index=20
*/
