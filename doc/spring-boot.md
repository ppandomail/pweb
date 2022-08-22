# Java Spring

1. Introducción
2. Proyecto consola
3. Proyecto rest
4. Proyecto Spring MVC Thymeleaf
5. Proyecto Spring Data (JPA) + Spring MVC
6. Proyecto Spring Data (JPA) + Spring MVC. Relaciones 1:1 y N:N
7. Proyecto Spring Security

## Introducción

### ¿Qué es Spring Boot?

* Es una herramienta que nace con la finalidad de simplificar aún más el desarrollo de aplicaciones basadas en el framework de Spring core.
* Publicado en 2012 y mantenido por la organización Pivotal.
* Busca que el desarrollador se centre en el desarrollo de la solución, dejando de lado la compleja configuración que actualmente tiene Spring Core para poder funcionar.

### ¿Por qué usar Spring Boot?

* Simple configuración.
* Resolución de dependencias: tiene ciertos módulos que permiten trabajar con REST API, web, streaming, SQL, NoSQL, etc.
* Despliegues sencillos: Spring Boot está diseñado para poner una aplicación en funcionamiento lo más rápido posible, con una configuración inicial mínima de Spring. 
* Se puede usar con Java, Kotlin y Groovy. 
* En Spring Boot las aplicaciones son consideradas STANDALONE ya que el framework tienen un servidor Apache Tomcat embebido en el proyecto.

### ¿Qué tipo de proyectos se puede hacer con Spring Boot?

* Aplicaciones de consola, batch.
* Aplicaciones de escritorio.
* Aplicaciones web.
* Backend con servicios rest.
* Diseñar arquitectura de microservicios (Spring Cloud)

### Elementos importantes para el funcionamiento de Spring Boot:

* Apache Maven
* Java 6+
* Gradle

### Usos comunes de Spring Boot para aplicaciones web:

* Crear monolitos backend de controladores y frontend thymeleaf
* Crear un backend de servicios rest e integraarlos con frontend como Angular, React.js, Vue.js

### Empresas que usan Spring Boot:

* MIT
* OpenGo
* Trivago

### ¿Qué es Spring?

* Es un framework para el desarrollo de aplicaciones y contenedor de Inversión de Control (IoC). El framework toma el control.
* Es una extensión que se construyó tomando como referencia a Java EE.
* Basado en la configuración XML y anotaciones.
* IoC: se especifican respuestas deseadas o solicitudes de datos concretas, dejando que la arquitectura externa lleve a cargo acciones de control.
* Es de código abierto para la plataforma Java, Kotlin y Groovy.
* Lanzado en 2003 para Java.

### Ventajas de Spring:

* Tecnología robusta y estable.
* Organización modular.
* Inyección de dependencias.
* Escalabilidad y fácil integración.
* Ecosistema amplio.
* Gran comunidad de desarrolladores la respaldan.

### Empresas que usan Spring:

* Ebay
* Google
* Netflix
* etc.

### Información Técnica y Requisitos:

* Java versión 8 o +
(https://www.oracle.com/technetwork/es/java/javase/downloads/index.html)
* Spring tiene su propio IDE (Spring Tool Suite) está basado en Eclipse (https://spring.io/tools).Es un portable (no necesita instalación)
* Se puede usar cualquier otro IDE (NetBeans, IntelliJ, Eclipse).

### Spring Initializr:

* Spring Boot dá un proyecto base.
* La forma más conocida se encuentra en su página oficial, donde se crea el proyecto, es decir, se completa el formulario (metadata, dependencias) se lo descarga como un .zip y luego se lo importa al IDE. (https://start.spring.io/ )
* Spring Initializr: es una página web que con ciertos pasos vamos a poder configurar un proyecto desde 0.

## Proyecto Consola

### Pasos:

1. Configurar y generar el proyecto con Spring Initializr:
  * Project: Gradle Project
  * Language: Java
  * Spring Boot: (dejar la que viene seleccionada por default)
  * Group: ar.edu.ub
  * Artifact: proyecto_consola
  * Name: proyecto_consola
  * Description: Demo project for Spring Boot
  * Project name: ar.edu.ub.proyecto_consola
  * Packaging: Jar
  * Java: (dejar la que viene seleccionada por default)
  * Dependencies: No dependency selected

2. Copiar el zip generado en el workspace y descomprimirlo.
3. Importar como proyecto Gradle desde el Eclipse.
4. Verificar que compila, sino botón derecho sobre el proyecto (Gradle -> Refresh Gradle Project). Reconstruye el proyecto según el contenido del archivo build.gradle:

```
…
dependencies {
	implementation 'org.springframework.boot:spring-boot-starter'
	testImplementation 'org.springframework.boot:spring-boot-starter-test'
}
```

5. Abrir la clase ProyectoConsolaApplication y hacer que  implemente la interface CommandLineRunner. 
6. Se debe implementar el método public void run(String...args) throws Exception { … }. Ejemplo:

```java
package ar.edu.ub.proyecto_consola;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProyectoConsolaApplication implements CommandLineRunner {

	private static Logger LOG = LoggerFactory.getLogger(ProyectoConsolaApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(ProyectoConsolaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Oi, estamos na aula de Prog3!!!");
		LOG.info("Esto es un mensaje de INFO");
		LOG.warn("Esto es un mensaje de WARNING");
		LOG.error("Esto es un mensaje de ERROR");
	}

}
```
7. Ejecutar la clase ProyectoConsolaApplication como aplicación Java.


### Inyección de dependencias:

* Dependency Injection, DI
* Es un patrón usado en el diseño orientado a objetos de una aplicación.
* Tiene como finalidad solucionar un problema de mantener los componentes o capas de una aplicación lo más desacopladas posible. 
* Busca que sea mucho más sencillo reemplazar la implementación de un componente por otro. Así, evitar un gran cambio o impacto en la aplicación que pudiera originar que deje de funcionar por completo.
* Permite inyectar comportamientos a componentes haciendo que las piezas de software sean independientes y se comuniquen únicamente a través de una interface. 
* Esto extrae responsabilidades a un componente para delegarlas en otro, estableciendo un mecanismo a través del cual el nuevo componente puede ser cambiado en tiempo de ejecución. 
* Para lograr esta tarea DI se basa en un patrón más genérico llamado Inversión de Control (Inversion of Control).
* Se suministran objetos a una clase en lugar de ser la propia clase la que cree dichos objetos.

```java
public interface IPersonaRepo {
  void registrar(String nom);
}

@Repository
public class PersonaRepoImpl implements IPersonaRepo {
 public void registrar(String nom) {
   LOG.info("Se registró a " + nom)
 }
}

public interface IPersonaService {
 void registrar(String nom);
}

@Service
public class PersonaServiceImpl implements IPersonaService {
 @Autowired
 private IPersonaRepo repo;
 public void registrar(String nom) {
   repo.registrar(nom);
 } 
}

@SpringBootApplication
public class Aplicacion {
  @Autowired
  private IPersonaService serv;
  public static void main(String [] args) {
    serv.registrar("Programación 3");
  }
}

```

* Con la annotation @Autowired, automáticamente el framework va a buscar una instancia definida por algún estereotipo.
* El mismo framework nos provee las instancias, en Spring las instancias son manejadas con ámbito Singleton.


### Estereotipos:

* Los estereotipos (@Controller, @Service, @Repository, @Component) sólo indican que se va a crear un bean en el contenedor de Spring, a modo de contextualizar un uso.
* Sirven para poder registrar un bean en el contenedor de Spring.
* Se recomienda que los estereotipos de usen de acuerdo al contexto de las clases.

```
@Controller -> @Service -> @Repository

```

### Qualifier:

* En algunas ocasiones se necesita tener más de una implementación de alguna interface. 
* Ejemplo: 

```java

public interface IPersonaRepo {
  void registrar(String nom);
}

@Repository
@Qualifier("1")
public class PersonaRepoImpl1 implements IPersonaRepo {
 public void registrar(String nom) {
   LOG.info("Se registró a " + nom)
 }
}

@Repository
@Qualifier("2")
public class PersonaRepoImpl2 implements IPersonaRepo {
 public void registrar(String nom) {
   LOG.info("NO se registró a " + nom)
 }
}

```

* La annotation Qualifier permite especificar el nombre del bean que se va a inyectar en el atributo.

```java

@Service
public class PersonaServiceImpl implements IPersonaService {
 @Autowired
 @Qualifier("1")  // o @Qualifier("2")
 private IPersonaRepo repo;
 public void registrar(String nom) {
   repo.registrar(nom);
 } 
}

```

## Proyecto REST 

### ¿Qué es una API? 

* API: Application Programming Interface 
* Es una forma de describir la forma en que los programas o los sitios webs intercambian datos.
* Una interfaz es una capa que conecta dos sistemas.
* Una API es una interfaz que conecta aplicaciones para que compartan información, por ejemplo el API de mapas de Google, entre otras.
* Es un conjunto de procedimientos y funciones creados para permitir el acceso al backend desde aplicaciones de terceros, con el fin de reutilizar servicios ya creados.

### ¿Para qué necesitamos una API?

* Ofrecer datos a aplicaciones que se ejecutan en un móvil.
* Ofrecer datos a otros desarrolladores con un formato más o menos estándar.
* Ofrecer datos a nuestra propia web/aplicación.
* Consumir datos de otras aplicaciones o sitios Web.
* El formato de intercambio de datos es JSON o XML.

### JSON

* JavaScript Object Notation
* Es un estándar para el intercambio de información (transmitir datos en aplicaciones web) que usa la sintaxis de objetos de JavaScript
* Reglas:
  * Todo objeto va encerrado entre llaves.
  * Parejas clave:valor separadas por comas.
  * Los valores pueden ser strings, números, booleans, objetos, arrays o nulos.
  * Las claves son siempre strings (entrecomillados)
* Ejemplo:

```json
{
  "dia": 13,
  "mes": "Noviembre",
  "anio": 2020,
  "peligro": [
    "Viernes",
    13
  ]
}
```

```json
{
"title": "Person",
"id": 1,
"active": true,
"properties": {
  "name": "Beto",
  "company": "AFIP",
  "courses": ["PHP", "React"]
}
}
```

### XML

* eXtensible Markup Language
* Es un formato para almacenar y transportar datos en texto plano, con sus propiedades incluidas en etiquetas que pueden anidarse.
* Las etiquetas no están predefinidas (pueden crearse las necesarias) y admiten atributos.
* Las etiquetas se escriben entre < > y por pares.
* Ejemplo:

```xml
<catalogo>
  <libro categoria="programacion">
    <titulo>Cracking de coding interview</titulo>
    <autor>Gayle Laakmann McDowell</autor>
    <publicacion>2008</publicacion>
    <precio moneda="USD">50.00</precio>
  </libro>
  <libro categoria="fantasia">
    <titulo>Lord of the rings</titulo>
    <autor>J. R. R. Tolkien</autor>
    <publicacion>1954</publicacion>
    <precio moneda="USD">50.00</precio>
  </libro>
</catalogo>

```

### Proveedores de APIs

* Algunos ejemplos de sitios web que proveen de APIS son:
  * Twitter: acceso a datos de usuarios, estado.
  * Google: por ejemplo, para consumir un mapa de Google.
  * Facebook, YouTube, Amazon, …

### API REST

* REpresentational State Transfer
* Rest es una arquitectura para APIs (desarrollo web) que se conectan vía web con el protocolo HTTP.
* Rest se compone de una lista de reglas que se deben cumplir en el diseño de la arquitectura de una API.
* Se habla de "servicios web restful" si cumplen con la arquitectura REST
* Permite acceder a la información con identificadores único (URI)
* Nos sirve para obtener y generar datos, así como realizar distintas operaciones.
* Múltiples endpoint ("/age", "/heigth", "/name"). Hace varias llamadas para obtener la información que se necesita.
* Utiliza verbos HTTP (GET, POST, PUT, DELETE)

### ¿Cómo funciona REST?

* Llamadas al API: las llamadas al API se implementan como peticiones HTTP, en las que:
  * La URL representa el recurso. Ejemplo: http://www.formandome.es/api/cursos/1
  * El método (HTTP Verbs) representa la operación. Ejemplo: GET http://www.formandome.es/api/cursos/1
  * El código de estado HTTP representa el resultado. Ejemplos: 200 OK y  404 NOT FOUND

### Métodos HTTP Rest

* GET:
  * Solicitar un recurso. 
  * Utilizado para consultar información del servidor.
  * Idempotente: múltiples peticiones iguales producirán el mismo resultado.
  * Retorna la representación del recurso -en formato XML o JSON- y el código de respuesta 200. 
  * Si el recurso no es encontrado, retornará 404.
  * Si la petición está mal formada, retornará código 400.

* POST:
  * Crear un recurso.
  * Utilizado para crear un nuevo registro en el servidor.
  * No idempotente.
  * El nuevo recurso suele subordinarse a alguna entidad "padre" (ejemplo, un registro de una base de datos)
  * En caso de éxito, retorna el código 201 y la ubicación o información del recurso creado.
  * Si el recurso no tien un URI, se utiliza el código 200 o 204.

* PUT:
  * Actualizar/reemplazar recurso.
  * Utilizado para actualizar un registro que ya existe en el servidor.
  * Idempotente.
  * Se debe enviar el recurso completo a actualizar, en su versión modificada.
  * Si el recurso no existe, lo crea.
  * El código 200 o 204 indica éxito.
  * El código 201 se utiliza cuando el recurso fue creado.

* DELETE:
  * Eliminar un recurso.
  * Utilizado para eliminar un registro que ya existe en el servidor.
  * Idempotente.
  * Elimina el recurso identificado mediante un URI.
  * Retorna el código 200 si la respuesta incluye un cuerpo descriptivo, 204 si no lo incluye o 202 si el procesamiento de la petición fue encolado.

### Error 404:

* Es un código de error que envía un servidor indicando que el recurso no fue encontrado.
* Causas: página  sitio web caducó, se cambio la URL, se borró el recurso del servidor
* Que hacer: diseñar una página 404, redireccionar cada vez que cambies una URL.

### Pasos:

1. Configurar y generar el proyecto con Spring Initializr:
  * Project: Gradle Project
  * Language: Java
  * Spring Boot: 2.5.0
  * Group: ar.edu.ub
  * Artifact: proyecto_rest
  * Name: proyecto_rest
  * Description: Demo project for Spring Boot
  * Project name: ar.edu.ub.proyecto_rest
  * Packaging: Jar
  * Java: 11
  * Dependencies: Spring Web

2. Copiar el zip generado en el workspace y descomprimirlo.
3. Importar como proyecto Gradle desde el Eclipse.
4. Verificar que compila, sino botón derecho sobre el proyecto (Gradle -> Refresh Gradle Project). Reconstruye el proyecto según el contenido del archivo build.gradle:

```
…
dependencies {
   implementation 'org.springframework.boot:spring-boot-starter-web'
   testImplementation 'org.springframework.boot:spring-boot-starter-test’
}
```

5. Setear contenido del archivo: application.properties

```
server.port = 8443  #default 8080
logging.level.org.springframework.web = TRACE  #default INFO

```

6. Crear paquete ar.edu.ub.proyecto_rest.model y dentro la clase Persona

```java
package ar.edu.ub.proyecto_rest.model;

public class Persona {
	
	private String nombre;
	private int edad;
	
	public Persona(String nombre, int edad) {
		this.nombre = nombre;
		this.edad = edad;
	}

	public String getNombre() {
		return nombre;
	}

	public int getEdad() {
		return edad;
	}
	
}

```

7. Crear paquete ar.edu.ub.proyecto_rest.service y dentro la clase PersonaService

```java
package ar.edu.ub.proyecto_rest.service;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Service;

import ar.edu.ub.proyecto_rest.model.Persona;

@Service
public class PersonaService {
	
	public List<Persona> getPersonas() {
		List<Persona> lista = new LinkedList<Persona>();
		lista.add(new Persona("Alan Turing", 42));
		lista.add(new Persona("Ada Lovelace", 37));
		lista.add(new Persona("Naom Chomsky", 92));
		lista.add(new Persona("John von Neumann", 54));
		lista.add(new Persona("Edsger Dijkstra", 72));
		return lista;
	}

}

```

8. Crear paquete ar.edu.ub.proyecto_rest.controller y dentro la clase PersonaController

```java
package ar.edu.ub.proyecto_rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ar.edu.ub.proyecto_rest.model.Persona;
import ar.edu.ub.proyecto_rest.service.PersonaService;

@RestController
public class PersonaController {

	@Autowired
	private PersonaService personaService;
	
	@GetMapping(path="/getPersonas")
	public List<Persona> getPersonas() {
		return personaService.getPersonas();
	}
	
}

```

9. Ejecutar la clase ProyectoRestApplication como aplicación Java. Se muestra en consola: (Hasta “…Completed initialization in xx ms”)

```java
package ar.edu.ub.proyecto_rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProyectoRestApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProyectoRestApplication.class, args);
	}

}

```

10. Ejecutar en el navegador:  localhost:8443/getPersonas


### Postman

* Es un entorno de desarrollo de APIs que permite diseñar, probar y monitorear servicios REST.
* URL: https://www.postman.com
* Nos permite crear peticiones sobre APIs y poder probarlas.
* ¿Para que me sirve? Imagina que necesitas trabajar con una api y es tu primera vez trabajando con ella, aunque leas la documentación necesitas saber su estructura, endpoints, en que formato me trae los datos, etc.
* Pasos:
1. Crear una Collection.
2. Agregar a la Collection un nuevo Request (nombre, método [GET, POST, PUT, DELETE, …] y URL)
3. Solapas: Params (Query Params, Path Variable). Authorization, Headers, Body (enviar un Json), Pre-request Script, Tests, Settings).

* Con la información provista en el sitio https://gorest.co.in/, generar un proyecto en Postman:
* Ejemplo 1: Un request GET llamado "allUsers" que devuelva todos los usuarios
  * GET URL: https://gorest.co.in/public-api/users
  * Tests:

```javascript
pm.test("Status code is 200", function () {
   pm.response.to.have.status(200);
});

pm.test("There are users", function () {
   var jsonData = pm.response.json();
   pm.expect(jsonData.meta.pagination.total).to.be.greaterThan(0);
});

pm.test("Pagination", function () {
   var jsonData = pm.response.json();
   pm.expect(jsonData.data.length).to.not.be.greaterThan(jsonData.meta.pagination.limit);
});

```

* Ejemplo 2: Un request GET llamado "usersByStatus" que devuelva todos los usuarios según el estado pasado como variable (Active / Inactive).
  * GET URL: https://gorest.co.in/public-api/users?status={{status}}
  * Params: Query Params KEY: status  VALUE: {{status}}
  * Pre-request Script:

```javascript

let statuses = pm.collectionVariables.get("statuses");

if(!statuses || statuses.length == 0) {
   statuses = ["Active", "Inactive", "Invalid"];
}

let currentStatus = statuses.shift();
pm.collectionVariables.set("status", currentStatus);
pm.collectionVariables.set("statuses", statuses);

```

  * Tests:

```javascript
const statuses = pm.collectionVariables.get("statuses");
if (statuses && statuses.length > 0){
   postman.setNextRequest("usersByStatus");
}
pm.test("Status code is 200", function () {
   pm.response.to.have.status(200);
});
let status = pm.collectionVariables.get("status");
pm.test("Check Response Return Users By Status: " + status.toUpperCase(), function () {
   var jsonData = pm.response.json();
   if (status == "Invalido")
       pm.expect(jsonData.data.length).to.be.eq(0);
   else
       _.each(jsonData.data, (item) => {
               pm.expect(item.status).to.be.eq(status)
       });       
});

```


* Ejemplo 3: Un request GET llamado "postsByUserID" que dado un ID de usuario como parámetro, devuelva todos los posts de ese usuario.
  * GET URL: https://gorest.co.in/public-api/posts?user_id=29
  * Params: Query Params KEY: user_id  VALUE: 29
  * Tests:

```javascript
pm.test("Status code is 200", function () {
   pm.response.to.have.status(200);
});

pm.test("Return Posts for Specific User ID", function () {
   var jsonData = pm.response.json();
   _.each(jsonData.data, (item) => {
       pm.expect(item.user_id).to.be.eq(29)
   })
});

```

* Ejemplo 4: Un test de resultado negativo que haga un GET de un Usuario inexistente (9999) pasado en la URL y que intente demostrar: a) Que el método devuelve correctamente un código de estado de la petición HTTP 200. b) Que el request responde en menos de 400 milisegundos. c) Que verifique si con usuarios inexistentes devuelve el mensaje "Resource not found".
  * GET URL: https://gorest.co.in/public-api/users/:user_id
  * Params: Path Variables KEY: user_id  VALUE: 9999
  * Tests:

```javascript
pm.test("Status code is 200", function () {
   pm.response.to.have.status(200);
});

pm.test("Response Time Below 400 ms", function () {
   pm.expect(pm.response.responseTime).to.be.below(400);
});

pm.test("Response Message Not Found", function () {
   var jsonData = pm.response.json();
   pm.expect(jsonData.data.message).to.be.eq("Resource not found");
});

```

### REST assured

* Es un framework escrito en Java y diseñado para simplificar las pruebas sobre servicios basados en REST.
* Para usarlo, agregar dependencias en el archivo build.gradle:

```
testImplementation 'io.rest-assured:rest-assured:4.4.0'
testImplementation 'io.rest-assured:json-path:4.4.0'
testImplementation 'io.rest-assured:xml-path:4.4.0'
testImplementation 'io.rest-assured:json-schema-validator:4.4.0'
(Versión que anda es la 4.0.0)
```

* Ejemplo 1:

```java
@Test 
public void getHelloWithParam() {
  given().param("name", "coder").
  when().get(HELLO).
  then().statusCode(HttpServletResponse.SC_OK).
         contentType("application/json").
         body(equalTo("Hello coder!"));
}

```

* Ejemplo 2:

```java
@Test 
public void test2() {
  given().contentType(ContentType.JSON).
          body(postBody).
  when().post("/forgotPassword").
  then().statusCode(200).
         contentType(ContentType.JSON).
         body("successful", equalTo(true)).
         body("data.result", equalTo(true));
}

```

* Ejemplo 3

```java
package ar.edu.ub.proyecto_rest;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

@ExtendWith(SpringExtension.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest(classes=ProyectoRestApplicationTests.class)
class ProyectoRestApplicationTests {

	@BeforeAll
	public void initTest() {
		RestAssured.port = 8443;
	}

	@Test
	public void statusCodeTest() { 
		given()
		.contentType(ContentType.JSON)
		.log().all()
		.get("getPersonas")
		.then().assertThat()
		.statusCode(200);
	}

	@Test
	public void sizeBodyTest() {
		given()
		.contentType(ContentType.JSON)
		.log().all()
		.get("getPersonas")
		.then().assertThat()
		.statusCode(200)
		.body("size()", is(5));
	}

	@Test
	public void containsTestTest() {
		given()
		.contentType(ContentType.JSON)
		.log().all()
		.get("getPersonas")
		.then().assertThat()
		.statusCode(200)
		.body("nombre", hasItem("Alan Turing"));
	}

}

```

## Proyecto Spring MVC Thymeleaf

* MVC es la solución al problema de cómo conectar el CLIENTE con el SERVIDOR, en este caso en una aplicación web de manera rápida, organizada y sencilla.
* Con Spring Boot se puede implementar el patrón de diseño MVC, donde la capa llamada vista (archivos HTML) que normalmente es el cliente en la aplicación web se comunica con la capa de negocio (Archivos Java llamados Controladores) que sería el servidor, por medio de modelos (Archivos Java conocidos como Plain Old Java Object, POJO)
  1. Usuario utiliza controlador.
  2. Controlador manipula modelo.
  3. Modelo notifica al controlador.
  4. Controlador actualiza la vista.
  5. Vista se muestra al usuario.

* Thymeleaf: es un motor de plantillas, que se alimenta de archivos HTML, los procesa y genera contenido WEB de una manera natural y legible, porque no agrega o inventa etiquetas, pero en ocasiones si agrega atributos.

### Pasos:

1. Crear Proyecto: 
 * Utilizar el initializr de spring boot.
 * Seleccionar el tipo de packaging war
 * Seleccionar la dependencia WEB y Thymeleaf.
 * Generate Project.
2. Genera un zip, copiarlo en el workspace y descomprimirlo.
3. En el Eclipse, importarlo como proyecto Gradle.
4. Verificar la estructura de carpetas.
5. Crear la página index.html dentro de la carpeta src/main/resources/templates/
6. Setear contenido del archivo application.properties con:

```
server.port = 8443
logging.level.org.springframework.web = TRACE
```

7. Crear paquete ar.edu.ub.mvc.model y dentro la clase Libro

```java
package ar.edu.ub.proyecto_mvc.model;

public class Libro {
	
	private String titulo;
	private int paginas;
	
	public Libro(String titulo, int paginas) {
		this.titulo = titulo;
		this.paginas = paginas;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public int getPaginas() {
		return paginas;
	}

	public void setPaginas(int paginas) {
		this.paginas = paginas;
	}
	
}

```

8. Crear paquete ar.edu.ub.mvc.service y dentro la clase LibroService

```java
package ar.edu.ub.proyecto_mvc.service;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Service;

import ar.edu.ub.proyecto_mvc.model.Libro;

@Service
public class LibroService {
	
	private List<Libro> libros;
	
	public LibroService() {
		libros = new LinkedList<Libro>();
		this.agregarLibros();
	}
	
	public void agregarLibros() {
		libros.add(new Libro("El Señor de los Anillos", 560));
		libros.add(new Libro("El hombre bicentenario", 476));
		libros.add(new Libro("El resplandor", 999));
		libros.add(new Libro("Fahrenheit 451", 250));
		libros.add(new Libro("El nombre del viento", 970));
		libros.add(new Libro("El corazon delator", 200));
	}
	
	public List<Libro> getLibros() {
		return this.libros;
	}
	
	public int getCantidadPaginas() {
		int cont = 0;
		for(Libro libro : libros) 
			cont += libro.getPaginas();
		return cont;
	}

}
```


9. Crear paquete ar.edu.ub.mvc.controller y dentro la clase LibroController

```java
package ar.edu.ub.proyecto_mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import ar.edu.ub.proyecto_mvc.service.LibroService;

@Controller
public class LibroController {
	
	@Autowired
	private LibroService libroService;
	
	@GetMapping
	public String getLibros(Model model) {
		model.addAttribute("libros", libroService.getLibros());
		model.addAttribute("contador", libroService.getCantidadPaginas());
		return "index";
	}

}

```
 * Otro ejemplo:

```java

@GetMapping(“/geeting”) // greeting?name=Prog3
public String greeting(@RequestParam(name=”name”, required=false, defaultValue=”World”) String name, Model modelo) {
	modelo.addAttribute(“name”, name);
  return “greeting”;
}

```

10. Editar index.html.
	* Expression Language (EL). Sintaxis ${atributo}. Atributo fue agregado al modelo en el Controller.
	* Doble corchete Convierte a String

```html
<html>
<head>
	<title>Biblioteca</title>
</head>
<body>
	<h1>Libros</h1>
	<table>
		<tr th:each="libro : ${libros}">
			<td th:text="${libro.titulo}"></td>
			<td th:text="${libro.paginas}"></td>
		</tr>
	</table>
	<h3 id="idCant">Cantidad de Paginas [[${contador}]]</h3>
</body>
</html>

```

11. Ejecutar la clase que tiene el main como una aplicación Java.
12. En el navegador   localhost:8443


### Selenium Webdriver

* Es una herramienta de código abierto que se utiliza para automatizar las pruebas realizadas en los navegadores web.
* Ampliamente utilizada.
* Soporta múltiples lenguajes: Java, C#, Ruby, Python, PHP
* Soporta múltiples browsers: Chrome, IE, Safari, Firefox, Opera, Edge
* Soporta múltiples SO: Windows, Mac OS, Linux, Unix
* E3E Testing, Smoke Testing, Regression Testing
* En vías de ser estándar W3C
* Estrategias de localización:
  * By ID
  * By Name
  * By Class Name
  * By Tag Name
  * By Link Text
  * By partial Link Text
  * By CSS
  * By XPath
* WebElement:  se refiere a un elemento HTML con el cual Selenium puede interactuar a través de varios métodos:
  * clear(), click(), sendKeys(txt), submit()
  * getAttribute(att), getText(), getCssValue(prop)
  * isDisplayed(), isEnabled(), isSelected()
  * finElement(by), findElements(by)

* Dependencias gradle:

```
dependencies {
  testImplementation group: 'org.junit.jupiter', name: 'junit-jupiter-api', version: '5.7.0'
	testImplementation group: 'org.junit.jupiter', name: 'junit-jupiter-engine', version: '5.7.0'
	testImplementation group: 'org.seleniumhq.selenium', name: 'selenium-java', version: '3.141.59'
	testImplementation group: 'io.github.bonigarcia', name: 'webdrivermanager', version: '4.2.2'    
}

```

* Ejemplo para testear búsquedas en Google:

```java
package com.proyecto_selenium_google;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class GoogleSearchTest {
	
	private static WebDriver driver;
	
	@BeforeAll
	public static void setUp() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		//Envia la url al navegador que se quiere abrir.
		driver.get("https://www.google.com/"); 
	}
		
	@Test
	public void testGooglePage() {
		//Encuentra un elemento en la página.
		WebElement cuadroIngreso = driver.findElement(By.name("q"));
		//Limpia texto que esté en la caja de búsqueda.
		cuadroIngreso.clear();
		//Envia el texto 
		cuadroIngreso.sendKeys("QA Automation");
		//Es como dar enter.
		cuadroIngreso.submit();
		//Tiempo que se quiere esperar.
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		//Compara esperado vs actual
		assertEquals("QA Automation - Buscar con Google", driver.getTitle());
	}
	
	@Test
	public void testGooglePage2() {
		//Encuentra un elemento en la página.
		WebElement cuadroIngreso = driver.findElement(By.name("q"));
		//Limpia texto que esté en la caja de búsqueda.
		cuadroIngreso.clear();
		//Envia el texto 
		cuadroIngreso.sendKeys("Se va el tercero");
		//Es como dar enter.
		cuadroIngreso.submit();
		//Tiempo que se quiere esperar.
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		//Compara esperado vs actual
		assertEquals("Se va el tercero - Buscar con Google", driver.getTitle());
	}
	
	@AfterAll
	public static void tearDown() {
		//Cierra el navegador una vez que se completan las pruebas.
		driver.quit();
	}
	
}
```

* Ejemplo para teatear una aplicación local:


```java
package com.proyecto_selenium_local;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class LocalTest {
	
private static WebDriver driver;
	
	@BeforeAll
	public static void setUp() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("file:///Users/ppando/eclipse-workspace/prog3/ProyectoSeleniumLocal/src/test/resources/index.html"); 
	}
	
	@Test
	public void testLocalPage() {
		WebElement searchBox = driver.findElement(By.id("searchBox"));
		searchBox.clear();
		searchBox.sendKeys("QA Automation");
		WebElement searchButton = driver.findElement(By.name("searchButton"));
		searchButton.click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		assertEquals("QA Automation", searchBox.getAttribute("value"));
	}
	
	@AfterAll
	public static void tearDown() {
		driver.quit();
	}

}


```

* Page Object Model (POM): es un patrón de diseño que se utiliza en pruebas automatizadas para evitar código duplicado y mejorar el mantenimiento de las mismas.


## Proyecto Spring Data (JPA) + Spring MVC

* JPA: Java Persistence Api.
* Permite tener una relación bidireccional entre una base de datos y un sistema orientado a objetos.
* Esta relación se conoce como ORM (Object Relational Mapping), esto significa tener un Entity (POJO) que contenga los mismos atributos que una tabla en la base de datos.
* Esta configuración en Spring Boot es hecha con anotaciones.

* H2: Base de datos embebida.
* Es un sistema administrador de bases de datos relacionales programado en Java. 
* Puede ser incorporado en aplicaciones Java o ejecutarse de modo cliente-servidor. 
* Una de las características más importantes de H2 es que se puede integrar completamente en aplicaciones Java y acceder a la base de datos lanzando SQL directamente, sin tener que pasar por una conexión a través de sockets. 

### Pasos

1. Crear Proyecto: 
  * Utilizar el initializr de spring boot.
  * Seleccionar el tipo de packaging war
  * Seleccionar la dependencia WEB, Thymeleaf, JPA, H2 y DevTools.
  * Generate Project.
2. Genera un zip, copiarlo en el workspace y descomprimirlo.
3. En el Eclipse, importarlo como proyecto Gradle.
4. Verificar la estructura de carpetas.
5. Setear contenido del archivo application.properties con

```
server.port = 8443
logging.level.org.springframework.web = TRACE
spring.datasource.driver-class-name = org.h2.Driver
spring.datasource.url = jdbc:h2:mem:db;DB_CLOSE_DELAY=-1
spring.datasource.username = sa
spring.datasource.password = sa

```

6. Crear el paquete ar.edu.ub.jpa.model y dentro la clase Usuario (Usuario es el POJO y definirlo como un Entity, un POJO debe tener solo los constructores, getters y setters. En este caso Spring Boot recomienda sobrescribir  los métodos toString(), equals() y hashCode()). Anotar la clase con @Table(name=“nombre_tabla”). En el caso que el nombre de la clase sea igual al de la tabla se puede omitir esta notación. 
7. Crear el atributo que contendrá la clave primaria en la tabla:
  * @Id : sólo se puede tener un atributo con esta notación que le indica a JPA que es la clave primaria.
  * @GeneratedValue : sirve para indicar que este valor es de autoincremento como se hace en MySQL.
  * @Column : tiene el mismo comportamiento que @Table, si el nombre del atributo es igual al nombre de la columna, esta notación no es necesaria.
  * @Transient : atributo que no lo mapea con la base de datos, es decir, no crear columna para el atributo anotado con Transient.

```java
package ar.edu.ub.jpa.model;

@Entity
@Table(name = "TB_USUARIOS")
public class Usuario {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  @Column(name="usuario_id")
  private Long id;

  @Column(name="usuario_nombre")
  private String nombre;

  @Column(name="usuario_nombre_completo")
  private String nombreCompleto;

  public Usuario() {

  }

}
```

8. Ejecutar la clase que tiene el main como una aplicación Java.
9. En el Navegador: localhost:8443/h2-console/
Asegurarse de tener la URL JDBC escrita como en el ejemplo:
  * Driver Class: org.h2.driver
  * JDBC URL: jdbc:h2:mem:db
  * User Name: sa

10. Crear el paquete ar.edu.ub.jpa.repository y dentro la interface UsuarioRepositorio que extienda de CrudRepository en el paquete. La manera más fácil de interactuar con los entitys es utilizando Spring Data por medio de repositorios.

```java

package ar.edu.ub.jpa.repository;

import org.springframework.data.repository.CrudRepository;

import ar.edu.ub.jpa.model.Usuario;

public interface UsuarioRepositorio extends CrudRepository<Usuario, Long> {

}

```

11. Crear el paquete ar.edu.ub.jpa.controller y dentro la clase UsuarioController, para: crear usuarios, editar usuarios, eliminar usuarios y listar usuarios.

```java

package ar.edu.ub.jpa.controller;

@Controller
public class UsuarioController {

	@Autowired
	private UsuarioRepositorio repo;

	@GetMapping
	public String index(Model modelo) {
		return this.actualizarModelo(modelo, new Usuario());
	}

	@PostMapping("/crearUsuario")
	public String crearUsuario(Model modelo, Usuario usuario) {
		repo.save(usuario)
		return this.actualizarModelo(modelo, new Usuario());
	}

	@GetMapping("/editarUsuario/{id}")
	public String editarUsuario(Model modelo, @PathVariable(name="id") Long id) {
		return this.actualizarModelo(modelo, repo.findById(id).get());
	}

	@GetMapping("/eliminarUsuario/{id}")
	public String eliminarUsuario(Model modelo, @PathVariable(name="id") Long id) {
		repo.delete(repo.findById(id).get())
		return this.actualizarModelo(modelo, repo.findById(id).get());
	}

	private String actualizarModelo(Model modelo, Usuario usuario) {
		modelo.addAttribute("usuario", usuario);
		modelo.addAttribute("usuarios", repo.findAll());
		return "index";
	}

}

```

12. Crear la página index.html dentro de la carpeta src/main/resources/templates:

```html
<html>
<body>
	<form th:action="@{/crearUsuario}" th:object="${usuario}" methos="POST">
		<span th:if="${usuario.id != null}"> <input type="text" th:field="${usuario.id}" readonly> </span>
		<input type="text" th:field="${usuario.nombre}" />
		<input type="text" th:field="${usuario.nombreCompleto}" />
		<input type="submit" th:value="${usuario.id != null}? 'Guardar' : 'Crear'" />
	</form>
	<table border="1">
		<thead>
			<tr>
				<th>ID</th>
				<th>Nombre</th>
				<th>Completo</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
			<tr th:each="usuario : ${usuarios}">
				<td th:text="${usuario.id}"></td>
				<td th:text="${usuario.nombre}"></td>
				<td th:text="${usuario.nombreCompleto}"></td>
				<td>
					  <a th:href="@{'/editarUsuario/' + ${usuario.id}}">Editar</a> | 
				    <a th:href="@{'/eliminarUsuario/' + ${usuario.id}}">Eliminar</a>
				</td>
			</tr>
		</tbody>
	</table>
</body>
</html>	

```

13. Ejecutar la clase que tiene el main como una aplicación Java.
14. En el Navegador -> localhost:8443


## Proyecto Spring Data (JPA) + Spring MVC. Relaciones 1:1 y N:N

* Usuario = PK: id + nom + nomCompleto + FK: conf_id
* UsuarioRol = PK: usuario_id + PK: rol_id
* Rol = PL: id + desc
* Configuracion = PK: id + idioma + pais + estado

* 1 usuario puede tener 1 configuracion
* 1 usuario puede tener N roles
* 1 rol pueden tener N usuarios.

### Pasos:

1. Crear Proyecto: 
  * Utilizar el initializr de spring boot.
	* Seleccionar el tipo de packaging war
	* Seleccionar la dependencia WEB, Thymeleaf, JPA, H2 y DevTools.
  * Generate Project.
2. Generar un zip y copiarlo en el workspace.
3. En el Eclipse, importarlo como proyecto Gradle.
4. Crear las clases Modelos (@Entity) dentro del paquete entity:  Usuario,  Rol y Configuracion:
  
```java
package ar.edu.ub.prog3.jpa.proyecto_jpa.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

@Entity
public class Usuario {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long id;
	String nombreUsuario;
	String nombreCompleto;
	
	@ManyToMany
	@JoinTable(name="usuario_rol", joinColumns=@JoinColumn(name="usuario_id"), inverseJoinColumns=@JoinColumn(name="rol_id"))
	Set<Rol> roles;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="configuracion_id", unique=true)
	Configuracion configuracion;
	
	public Usuario() {
		this.configuracion = new Configuracion();
	}

	public Usuario(Long id, String nombreUsuario, String nombreCompleto, Set<Rol> roles,
			Configuracion configuracion) {
		super();
		this.id = id;
		this.nombreUsuario = nombreUsuario;
		this.nombreCompleto = nombreCompleto;
		this.roles = roles;
		this.configuracion = configuracion;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}

	public String getNombreCompleto() {
		return nombreCompleto;
	}

	public void setNombreCompleto(String nombreCompleto) {
		this.nombreCompleto = nombreCompleto;
	}

	public Set<Rol> getRoles() {
		return roles;
	}

	public void setRoles(Set<Rol> roles) {
		this.roles = roles;
	}

	public Configuracion getConfiguracion() {
		return configuracion;
	}

	public void setConfiguracion(Configuracion configuracion) {
		this.configuracion = configuracion;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", nombreUsuario=" + nombreUsuario + ", nombreCompleto=" + nombreCompleto
				+ ", roles=" + roles + ", configuracion=" + configuracion + "]";
	}

}

```

```java
package ar.edu.ub.prog3.jpa.proyecto_jpa.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Rol {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long id;
	
	String descripcion;
	
	public Rol() {
		
	}

	public Rol(Long id, String descripcion) {
		this.id = id;
		this.descripcion = descripcion;
	}
	
	public Rol(String descripcion) {
		this.descripcion =  descripcion;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Rol other = (Rol) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Rol [id=" + id + ", descripcion=" + descripcion + "]";
	}
	
}
```

```java
package ar.edu.ub.prog3.jpa.proyecto_jpa.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Configuracion {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long id;
	
	String idioma;
    String pais;
	boolean activo;
	
	public Configuracion() {
		
	}

	public Configuracion(Long id, String idioma, String pais, boolean activo) {
		this.id = id;
		this.idioma = idioma;
		this.pais = pais;
		this.activo = activo;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIdioma() {
		return idioma;
	}

	public void setIdioma(String idioma) {
		this.idioma = idioma;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public boolean isActivo() {
		return activo;
	}

	public void setActivo(boolean activo) {
		this.activo = activo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Configuracion other = (Configuracion) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Configuracion [id=" + id + ", idioma=" + idioma + ", pais=" + pais + ", activo=" + activo + "]";
	}
	
}

```

5. Crear las interfaces Repositorios que extienden de CrudRepository dentro del paquete repository:

```java
package ar.edu.ub.prog3.jpa.proyecto_jpa.repository;

import org.springframework.data.repository.CrudRepository;

import ar.edu.ub.prog3.jpa.proyecto_jpa.entity.Usuario;

public interface UsuarioRepositorio extends CrudRepository<Usuario, Long> {

}
```

```java
package ar.edu.ub.prog3.jpa.proyecto_jpa.repository;

import org.springframework.data.repository.CrudRepository;

import ar.edu.ub.prog3.jpa.proyecto_jpa.entity.Rol;

public interface RolRepositorio extends CrudRepository<Rol, Long> {

}
```

```java
package ar.edu.ub.prog3.jpa.proyecto_jpa.repository;

import org.springframework.data.repository.CrudRepository;

import ar.edu.ub.prog3.jpa.proyecto_jpa.entity.Configuracion;

public interface ConfiguracionRepositorio extends CrudRepository<Configuracion, Long> {

}
```

6. Crear la clase DevBootstrap (@Component) dentro del paquete ar.edu.ub.jpa Esta clase captura el evento ContextRefreshedEvent que permite ejecutar la acción una vez que la aplicación se ejecutó exitosamente. Es decir, es llamada cuando todo Spring se ha inicializado (cuando el servidor subió por completo).

```java
package ar.edu.ub.prog3.jpa.proyecto_jpa;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import ar.edu.ub.prog3.jpa.proyecto_jpa.entity.Rol;
import ar.edu.ub.prog3.jpa.proyecto_jpa.repository.RolRepositorio;

@Component
public class DevBoostrap implements ApplicationListener<ContextRefreshedEvent> {

	@Autowired
	RolRepositorio rolRepositorio;
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		rolRepositorio.save(new Rol("Administrador"));
		rolRepositorio.save(new Rol("Contable"));
		rolRepositorio.save(new Rol("Regular"));	
	}

}

```

7. Crear la clase UsuarioController (@Controller) dentro del paquete controller:

```java
package ar.edu.ub.prog3.jpa.proyecto_jpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import ar.edu.ub.prog3.jpa.proyecto_jpa.entity.Usuario;
import ar.edu.ub.prog3.jpa.proyecto_jpa.repository.RolRepositorio;
import ar.edu.ub.prog3.jpa.proyecto_jpa.repository.UsuarioRepositorio;

@Controller
public class UsuarioController {

	@Autowired
	UsuarioRepositorio usuarioRepositorio;
	
	@Autowired
	RolRepositorio rolRepositorio;
	
	@GetMapping
	public String index(Model modelo) {
		return this.actualizarModelo(modelo, new Usuario());
	}

	@PostMapping("/crearUsuario")
	public String crearUsuario(Model modelo, Usuario usuario) {
		usuarioRepositorio.save(usuario);
		return this.actualizarModelo(modelo, new Usuario());
	}

	@GetMapping("/editarUsuario/{id}")
	public String editarUsuario(Model modelo, @PathVariable(name="id") Long id) {
		return this.actualizarModelo(modelo, usuarioRepositorio.findById(id).get());
	}

	@GetMapping("/eliminarUsuario/{id}")
	public String eliminarUsuario(Model modelo, @PathVariable(name="id") Long id) {
		usuarioRepositorio.delete(usuarioRepositorio.findById(id).get());
		return this.actualizarModelo(modelo, new Usuario());
	}

	private String actualizarModelo(Model modelo, Usuario usuario) {
		modelo.addAttribute("usuario", usuario);
		modelo.addAttribute("usuarios", usuarioRepositorio.findAll());
		modelo.addAttribute("roles", rolRepositorio.findAll());
		return "index";
	}
	
}

```

8. Crear el archivo index.html dentro del folder resources/templates:

```html
<!DOCTYPE html>
<html>
<head>
<style type="text/css">
	body, html {
		width:250px;
	}
	input:not([type="checkbox"]):not([type="radio"]),select {
		width:160px;
	}
	input:not([type="radio"]), select {
		margin-bottom:15px;
	}
	.button {
		width:200px !important;
	}
</style>
</head>
<body>
	<span>Información</span>
	<form th:action="@{/crearUsuario}" th:object="${usuario}" method="POST" id="userForm">
		<div style="border:1px solid black; padding:20px;">
			<span th:if="${usuario.id != null}"> <input type="text" th:field="${usuario.id}" readonly><br/></span>
		
			<label th:text="Usuario"></label><br/>
			<input type="text" th:field="${usuario.nombreUsuario}"/><br/>
			
			<label th:text="Nombre"></label><br/>
			<input type="text" th:field="${usuario.nombreCompleto}"/><br/>
			
			<label th:text="Rol"></label><br/>
			<select th:field="${usuario.roles}" multiple="multiple">
				<option th:each="rol :${roles}" th:value="${rol.id}" th:text="${rol.descripcion}">
				</option>	
			</select>	
		</div><br/>
		
		<span>Configuración</span>
		<div style="border:1px solid black; padding:20px;">
			<input type="checkbox" th:field="${usuario.configuracion.activo}" th:checked="${usuario.configuracion.activo}? 'Checked'"/>Estado Activo </br>
			
			<label th:text="Idioma"></label><br/>
			<select th:field="${usuario.configuracion.idioma}">
				<option th:value="1" th:text="Portugues">
				<option th:value="2" th:text="Ingles">
				<option th:value="3" th:text="Español">
				</option>	
			</select><br/>
			
			<label th:text="País"></label><br/>
			<input type="radio" th:field="${usuario.configuracion.pais}" th:value="1" />
			<label th:for="${usuario.configuracion.pais}" th:text="'Brasil'"></label><br/>
			<input type="radio" th:field="${usuario.configuracion.pais}" th:value="2" />
			<label th:for="${usuario.configuracion.pais}" th:text="'EEUU'"></label><br/>
		</div>
		<input type="submit" th:value="${usuario.id != null}? 'Guardar' : 'Crear'" th:class="button" />
		<th:block th:if="${usuario.id != null}">
			<a th:href="@{/}">Cancel</a>
		</th:block>	
	</form>
	
	<table border="1">
		<thead>
			<tr>
				<th>ID</th>
				<th>Usuario</th>
				<th>Nombre</th>
				<th>Roles</th>
				<th>Acciones</th>
			</tr>
		</thead>
		<tbody>
			<tr th:each="usuario : ${usuarios}">
				<td th:text="${usuario.id}"></td>
				<td th:text="${usuario.nombreUsuario}"></td>
				<td th:text="${usuario.nombreCompleto}"></td>
				<td>
					<th:block th:each="rol, iter: ${usuario.roles}">
						<label th:text="${rol.descripcion}"></label>
						<th:block th:if="${!iter.last}">, </th:block>
					</th:block>
				<td>
					<a th:href="@{'/editarUsuario/' + ${usuario.id}}">Editar</a> | 
				    <a th:href="@{'/eliminarUsuario/' + ${usuario.id}}">Eliminar</a>
				</td>
			</tr>
		</tbody>
	</table>

</body>
</html>

```

9. Ejecutar la clase que tiene el main como una aplicación Java.
10. En el Navegador -> localhost:8443
11. Para ver la BD -> localhost:8443/h2-console


## Spring Security

* Va a permitir proteger la aplicación de una manera muy transparente sin afectar la lógica del negocio.

### Pasos:

1. Crear Proyecto: 
  * Utilizar el initializr de spring boot.
	* Seleccionar el tipo de packaging jar
	* Seleccionar las dependencias: Spring Web y Spring Security.
  * Generate Project.
2. Generar un zip y copiarlo en el workspace.
3. En el Eclipse, importarlo como proyecto Gradle.
4. Verificar que compila, sino botón derecho sobre el proyecto (Gradle -> Refresh Gradle Project). Reconstruye el proyecto según el contenido del archivo build.gradle:

```
dependencies {
implementation 'org.springframework.boot:spring-boot-starter-security'
implementation 'org.springframework.boot:spring-boot-starter-web'
testImplementation 'org.springframework.boot:spring-boot-starter-test'
testImplementation 'org.springframework.security:spring-security-test'
}
```
5. Setear contenido del archivo: application.properties

```
server.port=8444
logging.level.org.springframework.web=TRACE
```

6. Crear paquete ar.edu.ub.proyecto_security.controller
7. Crear la clase SecurityController

```java
package ar.edu.ub.proyecto_security.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityController {

	@GetMapping
	public Date getSysdate() {
		return new Date();
	}
	
}
```

8. Ejecutar la clase ProyectoSecurityApplication como aplicación Java. Se muestra en consola: 

```
...
Using generated security password: 704a9c3c-dcb1-48e6-b519-340b7962d91a
...

```

9. Ejecutar en el navegador. Muestra un Login: user y password.
10. Copiar y pegar la password de la consola.
11. Hacer clic en el boton "Sign in" para tener acceso a los recusos.

12. Editar el archivo application.properties:

```
spring.security.user.name = prog3
spring.security.user.password = 1234
```

  * Para que el usuario y la password sean estas. Ya no se se genera una password aleatoria.

13. Ejecutar en el navegador. Muestra un Login: user y password.
14. Se usa el user y password del archivo application.properties.
15. Hacer clic en el boton "Sign in" para tener acceso a los recusos.

* En una situación profesional y real, la configuración del archivo application.properties no se hace, simplemente se tiene que enlazar con Base de Datos para poder obtener de allí algunas credenciales y roles de usuarios.


## Ejercicios:

1. Implementar una SPA (Single Page Application)

## SPA

* Es una aplicación que tiene un único documento HTML.
* Funcionamiento:
  1. El cliente hace una petición al servidor.
  2. El servidor devuelve datos en un JSON.
  3. Se usa un "loader" para esconder el proceso. 
  4. El cliente construye el HTML faltante con JavaScript (Angular, React, VueJS, etc.) en tiempo real con los datos que entrega el servidor.
	