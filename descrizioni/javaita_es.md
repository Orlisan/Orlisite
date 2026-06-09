# JavaITA es un transpilador cuyo objetivo es hacer Java sencillo y en italiano, hasta parecer un discurso natural


**Es importante señalar que no todo el JRE ha sido mapeado, y que el lenguaje JavaITA es perfectamente mezclable con Java estándar**

El transpilador gestiona los comentarios y las cadenas de texto sin traducirlos.

Es posible usar varias formas gramaticales para escribir el código, según el contexto y las preferencias — así cada uno puede crear su propio nivel de discursividad, por ejemplo conservando

```se(x è uguale a y) {<codice> }```

o convirtiéndolo en

```se è vero che x è uguale a y allora fai <codice> .```

El programa se usa desde el terminal: hay que hacer doble clic en el script correspondiente al sistema operativo (```.bat``` para Windows, ```.sh``` para Linux/MacOS), activarlo con privilegios elevados. Esto añadirá el programa al PATH y ejecutará el archivo ```.jar``` añadiendo automáticamente ```java -cp``` y elementos similares. Hecho esto, se podrá abrir libremente el terminal desde cualquier directorio y usar el programa con la sintaxis explicada a continuación.

## Uso de JavaITA
Tras seguir los pasos anteriores, habrá que abrir el terminal y escribir ```javaita <ruta> <parámetros>``` — la ruta siendo la del archivo (con cualquier extensión) que se quiere transpilar, y los parámetros:

```-s``` o ```/s``` : traduce únicamente el archivo javaita a lenguaje Java pero no lo compila ni ejecuta, que es el comportamiento por defecto. Normalmente se combina con -t.

```-t``` o ```/t``` : mantiene los archivos temporales (.java y .class) en la carpeta output, situada en AppData en Windows y en una carpeta dedicada del directorio home en Linux/Mac.

```-r``` o ```/r``` : realiza el proceso inverso: transforma un archivo .java en un archivo JavaITA. Solo funciona con programas sencillos y, por razones obvias, no compila ni ejecuta — dada la variedad de términos italianos posibles para un solo término Java.

```-?```, ```/?``` o ```help``` : muestra una lista similar a esta.

```-p``` o ```/p``` : limpia todos los archivos en la carpeta del programa.

```-a <arg1> <arg2> ...``` o ```/a <arg1> <arg2> ...``` : transmite argumentos al programa JavaITA en ejecución.

```-np``` o ```/np``` : elimina la línea "package" del archivo transpilado, útil para ejecutar archivos que pertenecen a un paquete sin tener que gestionar la estructura de carpetas.

```-e <ruta>``` o ```/e <ruta>``` : sustituye las extensiones predeterminadas por las de la carpeta o archivo especificado.

```-te``` o ```/te``` : mantiene las extensiones personalizadas cargadas con -e en la carpeta de datos de JavaITA tras la ejecución.

### Requisitos

Un ordenador con Windows, Linux o MacOS.

JavaSE y el JDK versión 17 o superior instalados en el dispositivo, con Java correctamente configurado en el PATH.

#### Nota

JavaITA fue usado para transpilarse a sí mismo en Java, obteniendo un ejecutable que — al recibir el fuente de un programa JavaITA como argumento mediante -a — lo transpiló y ejecutó correctamente. Un transpilador escrito en un lenguaje que transpila a Java, que transpila un programa en el mismo lenguaje.
