# JavaITA ist ein Transpiler mit dem Ziel, Java einfach und auf Italienisch zu gestalten – so natürlich, dass es fast wie gesprochene Sprache klingt


**Es ist wichtig darauf hinzuweisen, dass nicht das gesamte JRE gemappt wurde, und dass die JavaITA-Sprache problemlos mit Standard-Java gemischt werden kann**

Der Transpiler verarbeitet Kommentare und Strings, ohne sie zu übersetzen.

Es ist möglich, mehrere grammatikalische Formen zum Schreiben des Codes zu verwenden, je nach Kontext und Vorlieben — man kann sich so seinen eigenen Grad an Diskursivität schaffen, zum Beispiel indem man beibehält:

```se(x è uguale a y) {<codice> }```

oder es umwandelt in:

```se è vero che x è uguale a y allora fai <codice> .```

Das Programm wird über das Terminal verwendet: Doppelklick auf das dem Betriebssystem entsprechende Skript (```.bat``` für Windows, ```.sh``` für Linux/MacOS) und Ausführung mit erhöhten Rechten. Dadurch wird das Programm dem PATH hinzugefügt und die ```.jar```-Datei ausgeführt, wobei automatisch ```java -cp``` und Ähnliches vorangestellt wird. Danach kann man das Terminal von einem beliebigen Verzeichnis aus öffnen und das Programm mit der unten erklärten Syntax verwenden.

## Verwendung von JavaITA
Nach Ausführung der oben genannten Schritte das Terminal öffnen und ```javaita <Pfad> <Parameter>``` eingeben — der Pfad ist der Pfad zur Datei (mit beliebiger Endung), die transpiliert werden soll, und die Parameter:

```-s``` oder ```/s``` : übersetzt die JavaITA-Datei nur in Java-Code, ohne sie zu kompilieren oder auszuführen, was dem Standardverhalten entspricht. Wird normalerweise mit -t kombiniert.

```-t``` oder ```/t``` : behält die temporären Dateien (.java und .class) im Ausgabeordner, der sich unter Windows in den AppData und unter Linux/Mac in einem dedizierten Ordner im Home-Verzeichnis befindet.

```-r``` oder ```/r``` : führt den umgekehrten Vorgang durch: wandelt eine .java-Datei in eine JavaITA-Datei um. Funktioniert nur bei einfachen Programmen und kompiliert bzw. führt aus naheliegenden Gründen nicht aus — angesichts der Vielzahl italienischer Begriffe für einen einzigen Java-Begriff.

```-?```, ```/?``` oder ```help``` : zeigt eine ähnliche Liste wie diese an.

```-p``` oder ```/p``` : löscht alle Dateien im Programmordner.

```-a <arg1> <arg2> ...``` oder ```/a <arg1> <arg2> ...``` : übergibt Argumente an das laufende JavaITA-Programm.

```-np``` oder ```/np``` : entfernt die "package"-Zeile aus der transpilierten Datei, nützlich um Dateien auszuführen, die zu einem Package gehören, ohne die Ordnerstruktur verwalten zu müssen.

```-e <Pfad>``` oder ```/e <Pfad>``` : ersetzt die Standarderweiterungen durch die im angegebenen Ordner oder der angegebenen Datei.

```-te``` oder ```/te``` : behält die mit -e geladenen benutzerdefinierten Erweiterungen nach der Ausführung im JavaITA-Datenordner.

### Voraussetzungen

Ein Computer mit Windows, Linux oder MacOS.

JavaSE und das JDK in Version 17 oder höher auf dem Gerät installiert, mit Java korrekt im PATH konfiguriert.

#### Hinweis

JavaITA wurde verwendet, um sich selbst in Java zu transpilieren, und erzeugte dabei eine ausführbare Datei, die — mit dem Quellcode eines JavaITA-Programms als Argument über -a — dieses korrekt transpilierte und ausführte. Ein Transpiler, geschrieben in einer Sprache, die nach Java transpiliert, der ein Programm in derselben Sprache transpiliert.
