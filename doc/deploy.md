# Deploy

## DOCKER

### ¿Qué es Docker?

* Docker es un software de código abierto utilizado para desplegar aplicaciones dentro de contenedores virtuales (minicomputadoras con lo mínimo e indispensable para que la aplicación funcione)
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

Es un archivo que se crea en la raíz del proyecto.

Lo primero que hay que hacer cuando queres crear tu Dockerfile es preguntarte qué queremos hacer. Nuestro objetivo es lanzar una aplicacion con Node.

Para ello nuestro Docker debe contener todas las dependencias necesarias para lanzar NODE (Un LINUX con NODE y listo)

El Primer paso para crear el Dockerfile es entrar a DockerHub (Este sitio contiene muchas imágenes prediseñadas para ahorrarte tiempo) y buscar la imagen que contenga nuestras precondiciones. Ej: [https://hub.docker.com/_/node](https://hub.docker.com/_/node)

Node ya viene con SO

### Contenido

```sh
# Un archivo docker (dockerfile) comienza siempre importanto la imagen base. 
# Utilizamos la palabra clave 'FROM' para hacerlo.
# En nuestro ejemplo, queremos importar la imagen de NODE
# Así que escribimos 'node' para el nombre de la imagen y 'latest' para la versión.
FROM node

# Para lanzar nuestro código node, debemos importarlo a nuestra imagen.
# Utilizamos la palabra clave WORKDIR para crear el directorio "app".
# Dentro de esta carpeta irán los artefactos de la aplicación
WORKDIR /app

# Utilizamos la palabra clave 'COPY' para importar el codigo.
# El primer parámetro '.' indica TODO el contenido de la carpeta donde estamos parados
# El segundo parámetro '.' es la ruta donde poner los archivos en la imagen.(app) 
COPY . .

# Utilizamos el comando RUN para Instalar las dependencias de nuestro proyecto
# Esto se ejecuta al construir la imagen 
RUN npm install


# Utilizamos el comando EXPOSE  para exponer el puerto 3000  del contenedor que es donde se estaria levantando nuestra aplicacion
# Levanta en el puerto 3000
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
* **Imagen** -> es el producto software (archivos). Es la aplicación empaquetada
* **Contenedor** -> es la máquina virtual, se crea cuando se ejecuta la imagen

### Construyendo la imagen

```sh
docker build -t nombre_imagen .
```

* El punto es porque estoy parado en el proyecto, sino poner la ruta

### Ver las imágenes creadas

```sh
docker images
```

### Ver los contenedores

```sh
docker ps
```

### Arrancar la aplicación

```sh
docker run -p 8080:3000 nombre_imagen 
```

* -p -> macheo de puertos:
  * 3000 en el puerto del contenedor
  * 8080 en mi máquina
* Si no está localmente la busca en el docker hub

### Entrar al contenedor

```sh
docker ps
docker exec -it id_contenedor /bin/bash
root@...:/app#ls
<ctrl> + <d> : sale del contenedor
```

* -it -> iterativo
* id_contenedor: alcanza con los primeros cuatro números. Ej: 0532

### Apagar el contenedor

```sh
docker stop id_contenedor
```

### Eliminar imagenes

```sh
docker rmi mi_imagen -f
```

## SUBIR IMAGEN A DOCKER HUB

1. Loguearse en DockerHub con la cuenta de GitHub
1. Crear un repositorio donde se alojaran nuestras imagenes. Por ejemplo: ppando/mi_imagen
1. En nuestra consola, renombrar la imagen que generamos previamente con el nombre del repositorio que creamos

    ```sh
    docker tag mi_imagen ppando/mi_imagen:1.0.0
    docker login
    docker push ppando/mi_imagen:1.0.0
    ````

## DEPLOY

### Deployar aplicación

* Vamos a deployar en un servidor gratuito llamado [RENDER](https://render.com/)
* Para ello los pasos son:

#### Deploy de mi repo GitHub

1. Loguearse en RENDER con la cuenta de GitHub
1. New -> Web Service
1. Seleccionar la opción "Build and deploy from a Git repository"
1. Seleccionar el repositorio GitHub que queremos deployar
1. Cargar los datos necesarios:
    * Name
    * Runtime: NODE
    * Build Command: "NPM install"
    * Start Command: "NODE index.js"
    * Option FREE
1. Botón Create Web Service

* Si se comitea algo en GitHub se autodeploya

#### Deploy de la imagen publicada en Docker Hub

1. Loguearse en RENDER con la cuenta de GitHub
1. New -> Web Service
1. Seleccionar la opción "Deploy an existing image from a registry"
1. Cargar los datos necesarios:
    * Image URL: ppando/mi_imagen:1.0.0
    * Environment variable: PORT = 3000
1. Botón Next
1. Option FREE
1. Botón Create Web Service

* El desploy es más rápido en comparación con la opción de deployar desde un repo de Git

---

#### Alternativa si no pueden instalar Docker (docker en la nube)

[https://app.codeanywhere.com/](https://app.codeanywhere.com/)

1. Loguearse con el usuario de GitHub
1. Crear un workspace (seleccionando el repositorio GitHub a utilizar para construir la imagen)
1. Se abre un editor como un VSCode
1. Abrir una terminal
1. Ejecutar los comandos docker vistos:

    ```sh
    docker build -t imagen_desde_code .
    docker images
    docker tag imagen_desde_code ppando/mi_imagen:2.0.0
    docker push ppando/mi_imagen:2.0.0
    docker login
    docker push ppando/mi_imagen:2.0.0
    ```
