# HTML5 - Ejercicios

1. En el código base que se te proporciona debes realizar los siguientes cambios:
    * Las siglas HTML deben aparecer como texto destacado en toda la página.
    * Tim Berners-Lee debe aparecer como texto enfatizado en toda la página.
    * Debes añadir el siguiente contenido:
      * Un encabezado de nivel 1 con el texto "HTML" antes de "HTML son las siglas de..."
      * Un encabezado de nivel 2 con el texto "Historia de HTML" antes de "Los inicios del lenguaje HTML..."
      * Un encabezado de nivel 2 con el texto "Versiones de HTML" antes de dos nuevos párrafos que contienen el texto "Tim Berners-Lee definió la primera versión de HTML en el año 1991" y "En la actualidad, la última versión de HTML es HTML5".
El resultado final debe ser una página web que tenga el mismo aspecto que la siguiente imagen:

    ![EJ01](img/HTML%20EJ01.png)

2. A partir del texto que se te proporciona, debes crear una página web que tenga el mismo aspecto que la siguiente imagen:

    * Además, tienes que tener en cuenta los siguientes requisitos:
      * El título de la página debe ser Tim Berners-Lee.
      * El texto "Tim Berners-Lee" como encabezado de nivel 1.
      * El texto "Biografía" como encabezado de nivel 2.
      * Todas las siglas, como HTTP, W3C o MIT deben aparecer como texto destacado.
      * Los nombres de las instituciones o empresas, como Consorcio de la World Wide Web o Universidad de Oxford, deben aparecer como texto enfatizado.

      ![EJ02](img/HTML%20EJ02.png)

3. Corrige los errores que presenta el código base que se te proporciona

        ```html
        <html lang=es> 
        <head> 
        <title>World Wide Web</title> 
        </head>
        <body> 
        <h1>World Wide Web</h1>
        <p> 
        En informática, la <strong><em>World Wide Web</strong></em> (WWW) o Red informática mundial comúnmente conocida como la web, es un sistema de distribución de documentos de hipertexto o hipermedios interconectados y accesibles vía Internet. Con un navegador web, un usuario visualiza sitios web compuestos de páginas web que pueden contener texto, imágenes, vídeos u otros contenidos multimedia, y navega a través de esas páginas usando hiperenlaces.
        <h2>Historia</h2>
        <p> 
        La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, Suiza, y publicado en 1992. 
        </p>
        <p> Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos años ha abogado por su visión de una web semántica.
        </p>
        <p>Fuente: <em>Wikipedia</p></em>
        </html>
        ```

4. Corrige los errores que presenta el código base que se te proporciona. También pueden existir ciertas cosas que no están mal pero que se pueden hacer mejor.

        ```html
        <html> 
        <head>
        <title>World Wide Web</title>
        </head>
        <body>
        <h1>World Wide Web</h1>
        <p>
        En inform&aacute;tica, la <strong><em>World Wide Web</em></strong> (WWW) o Red inform&aacute;tica mundial com&uacute;nmente conocida como la web, es un sistema de distribuci&oacute;n de documentos de hipertexto o hipermedios interconectados y accesibles v&iacute;a Internet. Con un navegador web, un usuario visualiza sitios web compuestos de p&aacute;ginas web que pueden contener texto, im&aacute;genes, v&iacute;deos u otros contenidos multimedia, y navega a trav&eacute;s de esas p&aacute;ginas usando hiperenlaces. 
        </p> 
        <h3>Historia</h3> 
        <p> 
        La web se desarrolló entre marzo de 1989 y diciembre de 1990 por el inglés Tim Berners-Lee con la ayuda del belga Robert Cailliau mientras trabajaban en el CERN en Ginebra, Suiza, y publicado en 1992. 
        </p>
        <p>
        Desde entonces, Berners-Lee ha jugado un papel activo guiando el desarrollo de estándares web (como los lenguajes de marcado con los que se crean las páginas web), y en los últimos años ha abogado por su visión de una web semántica. </p> <p> Una frase famosa de Tim Berners-Lee es: 
        </p>
        <blockquote>
        <p> There is only one web. </p> </blockquote> <p>Fuente: <em>Wikipedia</em></p> 
        </html>
        ```

5. A partir del texto que se te proporciona, debes crear una página web que tenga el mismo aspecto que la siguiente imagen. Además, tienes que tener en cuenta los siguientes requisitos:
    * El título de la página debe ser Curriculum Vitae de Bruce Wayne.
    * El resto de la estructura de la página debes deducirlo a partir de la imagen proporcionada.

    ![EJ05](img/HTML%20EJ05.png)

6. Enlaces: A partir del texto que se te proporciona, debes crear una página web que tenga el mismo aspecto que la siguiente imagen:

    ![EJ06](img/HTML%20EJ06.png)

    Además, tienes que tener en cuenta los siguientes requisitos:
    * El título de la página debe ser Los tres pilares de la Web.
    * Los enlaces que aparecen en la página deben tener los siguientes destinos:
      * Tim Berners-Lee → "http://es.wikipedia.org/wiki/Tim_Berners-Lee"
      * Web → "http://es.wikipedia.org/wiki/World_Wide_Web"
      * HTML → enlace intradocumental al epígrafe HTML
      * HTTP → enlace intradocumental al epígrafe HTTP
      * URL → enlace intradocumental al epígrafe URL
      * Fuente: HTML → "http://es.wikipedia.org/wiki/HTML"
      * Fuente: HTTP → "http://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol"
      * Fuente: URL → "http://es.wikipedia.org/wiki/Localizador_de_recursos_uniforme"

7. Listas 1: A partir del texto que se te proporciona, debes crear una página web que tenga el mismo aspecto que la siguiente imagen:

    ![EJ07](img/HTML%20EJ07.png)

    Además, tienes que tener en cuenta los siguientes requisitos:
    * El título de la página debe ser Curriculum Vitae de la persona que quieras.
    * El resto de la estructura de la página debes deducirlo a partir de la imagen proporcionada.

8. Listas 2: A partir del texto que se te proporciona, debes crear una página web que tenga el mismo aspecto que la siguiente imagen

    ![EJ08](img/HTML%20EJ08.png)

9. Formularios 1: A partir del texto que se te proporciona, debes crear una página web que contenga un formulario con los siguientes campos de información:
    * El nombre, con un control de tipo texto.
    * Los apellidos, con un control de tipo texto.
    * El sexo, con dos opciones excluyentes hombre o mujer.
    * El correo electrónico, con un control de tipo texto.
    * Una casilla de verificación con el texto "Deseo recibir información sobre novedades y ofertas".
    * Una casilla de verificación con el texto "Declaro haber leido y aceptar las condiciones generales del programa y la normativa sobre protección de datos".
    * Un botón de envío.
Además, tienes que tener en cuenta los siguientes requisitos:
    * El título de la página debe ser Formulario de registro - Mi web.
    * El método de envío del formulario debe ser GET.
    * El destino del envío del formulario debe ser "".
    * La longitud máxima de entrada de datos de los controles para el nombre y los apellidos debe ser 50 caracteres.
    * La casilla de verificación con el texto "Deseo recibir información sobre novedades y ofertas" debe estar activada por defecto.
Debes crear una página web que tenga el mismo aspecto que la siguiente imagen:

    ![EJ09](img/HTML%20EJ09.png)

10. Formularios 2: Al formulario anterior le tienes que añadir los siguientes campos de información:
    * Población, una lista desplegable con las opciones Alicante, Madrid, Sevilla y Valencia.
    * Descripción, un área de texto multilínea.
Además, tienes que asociar la etiqueta de cada control a su control para mejorar la usabilidad y la accesibilidad.
Debes crear una página web que tenga el mismo aspecto que la siguiente imagen:

    ![EJ10](img/HTML%20EJ10.png)

11. Tablas 1: A partir del texto que se te proporciona, debes crear una página web que tenga el mismo aspecto que la siguiente imagen:

    ![EJ11](img/HTML%20EJ11.png)

    Además, tienes que tener en cuenta los siguientes requisitos:
      * El destino del enlace Índice de desempleo anual es la página web:
    "http://epp.eurostat.ec.europa.eu/tgm/table.do?tab=table&init=1&language=en&pcode=tsdec450&plugin=1"
      * **Nota**: en el código base que se te proporciona vas a encontrar una etiqueta nueva, la etiqueta \<style>. Esta etiqueta permite introducir instrucciones de CSS (Cascading Style Sheets) en una página web. CSS se emplea para definir la presentación visual de una página web y se explica en la segunda parte de este curso. Las instrucciones que se han incluido tienen como objetivo que la tabla y las celdas de la tabla se muestren con un borde. Esto también se podría haber logrado con el atributo border de HTML, pero es mejor utilizar siempre CSS para todo lo relacionado con la presentación de una página web.

            ```html
            <!DOCTYPE html>
            <html>
            <head>
            <title>Desempleo</title> 
            <style> 
            table, tr, th, td { border: 1px solid black; }
            </style>
            </head>
            <body>
            ```

12. Tablas 2: A partir del texto que se te proporciona, debes crear una página web que tenga el mismo aspecto que la siguiente imagen:

    ![EJ12](img/HTML%20EJ12.png)

    * **Nota**: en el código base que se te proporciona vas a encontrar una etiqueta nueva, la etiqueta \<style>. Esta etiqueta permite introducir instrucciones de CSS (Cascading Style Sheets) en una página web. CSS se emplea para definir la presentación visual de una página web y se explica en la segunda parte de este curso. Las instrucciones que se han incluido tienen como objetivo que la tabla y las celdas de la tabla se muestren con un borde. Esto también se podría haber logrado con el atributo border de HTML, pero es mejor utilizar siempre CSS para todo lo relacionado con la presentación de una página web.

          ```html
          <!DOCTYPE html>
          <html>
          <head>
          <title>Desempleo</title> 
          <style> 
          table, tr, th, td { border: 1px solid black; }
          </style>
          </head>
          ```

13. Formularios HTML5. Crea una página web que contenga un formulario con los siguientes campos de información:
    * Nombre, con un control de tipo texto obligatorio y con autofoco.
    * Correo electrónico, con un control de tipo email obligatorio.
    * URL, con un control de tipo url que muestre la ayuda "Escribe la URL de tu página web personal".
    * Fecha, con un control de tipo date.
    * Tiempo, con un control de tipo time.
    * Fecha y hora, con un control de tipo datetime.
    * Mes, con un control de tipo month.
    * Semana, con un control de tipo week.
    * Número, con un control de tipo number que limite la entrada a un valor entre -10 y 10.
    * Teléfono, con un control de tipo tel.
    * Término de búsqueda, con un control de tipo search.
    * Color favorito, con un control de tipo color.
    * Un botón de envío.
    Además, tienes que tener en cuenta los siguientes requisitos:
    * El título de la página debe ser Formulario de prueba de HTML5.
    * El método de envío del formulario debe ser GET.
    * El destino del envío del formulario debe ser "".

    * **Nota**: si al validar el código HTML de tu página web con el validador del W3C se muestran mensajes de advertencia como The date input type is not supported in all browsers. Please be sure to test, and consider using a polyfill. no te preocupes, el validador te está avisando de que lleves cuidado al usar una característica de HTML5 que no está admitida por todos los navegadores actuales.
    * **Nota**: por lo anterior, cuando realices esta actividad y compruebes cómo se visualiza tu página web en distintos navegadores es muy probable que obtengas diferentes resultados.
    Debes crear una página web que tenga el mismo aspecto que la siguiente imagen:

      ![EJ13](img/HTML%20EJ13.png)

14. Realizar una página web sobre alguna disciplina deportiva que incluya:
    * Título
    * Imágenes
    * descripción
    * video
    * subpágina con la tabla de posiciones de algún torneo.
