# Deploy

## DOCKER

### ¿Qué es Docker?

* Docker es un software de código abierto utilizado para desplegar aplicaciones dentro de contenedores virtuales
* Permite a los usuarios crear entornos independientes y aislados para desplegar sus aplicaciones (CONTENEDORES)

### ¿Por qué utilizar Docker como desarrollador?

* **Docker es rápido**. A diferencia de una máquina virtual, tu aplicación puede iniciarse en pocos segundos y detenerse igual de rápido
* **Docker es multiplataforma**. Puedes lanzar tu contenedor en cualquier sistema
* **Los contenedores pueden construirse y destruirse más rápido que en una máquina virtual**
* **Se terminaron las dificultades para configurar tu entorno de trabajo**. Una vez configurado tu Docker, no tenés que volver a instalar tus dependencias manualmente. Si cambias de PC o si alguien nuevo lo requiere, solo tendrás que darle tu configuración (Dockerfile)
* **Tu espacio de trabajo siempre limpio**, ya que cada uno de tus entornos estará aislado y podes eliminarlo en cualquier momento sin que afecte al resto
* **Será más fácil desplegar tu proyecto en tu servidor para ponerlo en línea**

### Instalación

[https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

---

## DOCKERIZANDO MI APLICACION

### DockerFile

Lo primero que hay que hacer cuando queres crear tu Dockerfile es preguntarte qué queremos hacer. Nuestro objetivo es lanzar una aplicacion con Node.

Para ello nuestro Docker debe contener todas las dependencias necesarias para lanzar NODE (Un LINUX con NODE y listo)

El Primer paso para crear el Dockerfile es entrar a DockerHub (Este sitio contiene muchas imágenes prediseñadas para ahorrarte tiempo) y buscar la imagen que contenga nuestras precondiciones. Ej: [https://hub.docker.com/_/node](https://hub.docker.com/_/node)

### Contenido

``` bash
# Un archivo docker (dockerfile) comienza siempre importanto la imagen base. 
# Utilizamos la palabra clave 'FROM' para hacerlo.
# En nuestro ejemplo, queremos importar la imagen de NODE
# Así que escribimos 'node' para el nombre de la imagen y 'latest' para la versión.
FROM node

# Para lanzar nuestro código node, debemos importarlo a nuestra imagen.
# Utilizamos la palabra clave WORKDIR para crear el directorio "app".
WORKDIR /app

# Utilizamos la palabra clave 'COPY' para importar el codigo.
# El primer parámetro '.' indica TODO el contenido de la carpeta donde estamos parados
# El segundo parámetro '.' es la ruta donde poner los archivos en la imagen.(app) 
COPY . .

# Utilizamos el comando RUN para Instalar las dependencias de nuestro proyecto
# Esto se ejecuta al construir la imagen 
RUN npm install


# Utilizamos el comando EXPOSE  para exponer el puerto 3000  del contenedor que es donde se estaria levantando nuestra aplicacion
EXPOSE 3000

# Utilizaremos el comando CMD para ejecutar dentro del contendor y fijar la app a levantar (Facilmente sobreescribible)
CMD ["node", "index.js"]

# Opcionalmente existe el comando  ENTRYPOINT para ejecutar dentro del contendor el servidor NODE
# ENTRYPOINT ["node"]
```

### Diferencias entre RUN, CMD y ENTRYPOINT

| RUN | CMD | ENTRYPOINT |
| -- | -- | -- |
| * Corre cuando se esta construyendo la imagen | * Comando por default | * Se define SOLO el comando |
| | * Puede llevar parámetros | * Sin parámetros |
| | * Fácilmente sobrescribible | * No se puede sobreescribir |
| | | * Misma versión de imagen para cualquier app se llame como se llame |

## IMAGEN DOCKER

### ¿Qué es una imagen docker?

* Es un archivo ejecutable e independiente que se utiliza para crear un contenedor.
* Esta imagen contiene las bibliotecas, dependencias y los archivos que el contenedor necesita para ejecutarse.

### Construyendo la imagen

``` bash
docker build -t nombre_imagen .
```

### Ver las imágenes creadas

``` bash
docker images
```

### Arrancar la aplicación

``` bash
docker run -p 8080:3000 nombre_imagen 
```

### Entrar al contenedor

``` bash
docker ps
docker exec -it id_contenedor /bin/bash
```

## SUBIR IMAGEN A DOCKER HUB

1. Loguearse con la cuenta de Github
1. Crear un repositorio donde se alojaran nuestras imagenes.
1. En nuestra consola, renombrar la imagen que generamos previamente con el nombre del repositorio que creamos.
1. docker tag local-image:tagname new-repo:tagname
1. docker login
1. docker push new-repo:tagname

## DEPLOY

### Deployar aplicación

* Vamos a deployar en un servidor gratuito llamado [RENDER](https://render.com/)
* Para ello los pasos son:

#### Deploy de mi repo GitHub

1. Loguearse con la cuenta de GitHub
1. New -> Web Service
1. Seleccionar la opción "Build and deploy from a Git repository"
1. Seleccionar el repositorio GitHub que queremos deployar
1. Cargar los datos necesarios:
    * Runtime: NODE
    * Build Command: "NPM install"
    * Start Command: "NODE index.js"
    * Option FREE

#### Deploy de la imagen publicada en Docker Hub

1. Loguearse con la cuenta de GitHub
1. New -> Web Service
1. Seleccionar la opción "Deploy an existing image from a registry"
1. Cargar los datos necesarios:
    * Image URL: lpolitano/mi_imagen:1.0.5
    * Environment variable: PORT = 3000

---

#### Alternativa si no pueden instalar Docker

[https://app.codeanywhere.com/](https://app.codeanywhere.com/)

1. Loguearse con el usuario de GitHub
1. Crear un workspace (seleccionando el repositorio GitHub a utilizar)
1. Se abre un editor como un VSCode
1. Abrir una terminal
1. Ejecutar los comandos docker vistos
