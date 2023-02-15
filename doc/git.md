# GIT

## Sistema de Control de Versiones (SCV)

* En el proceso de desarrollo de software es un requisito casi indispensable mantener un registro de los cambios que se realizan sobre el código fuente a lo largo del tiempo.
* Es debido a esto que cobran importancia los SCV
* Versión:
  * También llamado revisión o edición de un proyecto (código fuente).
  * Hace referencia al estado en el que se encuentra el mismo en un momento dado de su desarrollo o modificación.
* Ventajas:
  * Historial de cambios
  * Creación y fusión de ramas
  * Trazabilidad de cambios en software

## Git

* Es un SCV
* Es un proyecto de código abierto maduro y con un activo mantenimiento desarrollado originalmente por Linus Torvalds.
* Funciona bajo cualquier plataforma (Windows, MacOS, Linux, etc.)
* Está integrado en una amplia variedad de entornos de desarrollo (IDEs)

![Git Flujo](img/git-flujo.png)

| Comando | Uso |
| -- | -- |
| **git init** | crea un proyecto nuevo en git |
| **git add \<file>** | pasa los archivos del working directory al stagging area |
| **git status** | ver en que estado están los archivos |
| **git commit** | pasa del stagging area al local repo |
| **git push** | subir a un repositorio remoto |
| **git pull** | trae los cambios de los desarrolladores |
| **git clone** | hace una copia del servidor central a tu computadora |

## GitHub

* Es una plataforma de alojamiento de código para el control de versiones.
* Es colaborativa -> te permite trabajar junto a otros en proyectos desde cualquier lugar.

### Crear nuevo repositorio con línea de comandos

```shell
echo "# Prueba" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/PariciaD/Prueba.git
git push -u origin main
```

### Guia de inicio rápido

1. Tener una cuenta de GitHub y acceso a Internet
1. New repository y se completa name, public o private, si se agrega archivo README, si se agrega archivo .gitignore. Luego clic en botón "Create repository"
1. Create branch (para mantener las correcciones de errores y el trabajo de cracteristicas separados de nuestra rama de producción). Cuando un cambio está listo se fusionan las ramas.

![Branch en Git](img/git-branch.png)
