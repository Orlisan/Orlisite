# JavaITA est un transpileur dont l'objectif est de rendre Java simple et en italien, au point de ressembler à un discours naturel


**Il est important de préciser que tout le JRE n'a pas été mappé, et que le langage JavaITA est parfaitement mixable avec le Java standard**

Le transpileur gère les commentaires et les chaînes de caractères sans les traduire.

Il est possible d'utiliser plusieurs formes grammaticales pour écrire le code, selon le contexte et les préférences — on peut ainsi créer son propre niveau de discursivité, par exemple en conservant

```se(x è uguale a y) {<codice> }```

ou en le rendant

```se è vero che x è uguale a y allora fai <codice> .```

Le programme s'utilise depuis le terminal : il faut double-cliquer sur le script correspondant à son système d'exploitation (```.bat``` pour Windows, ```.sh``` pour Linux/MacOS), l'activer avec des privilèges élevés. Celui-ci ajoutera le programme au PATH et exécutera le fichier ```.jar``` en préfixant automatiquement ```java -cp``` et autres éléments similaires. Après cela, on pourra librement ouvrir son terminal depuis n'importe quel répertoire et utiliser le programme avec la syntaxe expliquée ci-dessous.

## Utilisation de JavaITA
Après avoir suivi les étapes ci-dessus, il faudra ouvrir le terminal et saisir ```javaita <chemin> <paramètres>``` — le chemin étant celui du fichier (avec n'importe quelle extension) à transpiler, et les paramètres :

```-s``` ou ```/s``` : traduit uniquement le fichier javaita en langage Java sans le compiler ni l'exécuter, ce qui est le comportement par défaut. Généralement combiné avec -t.

```-t``` ou ```/t``` : conserve les fichiers temporaires (.java et .class) dans le dossier output, situé dans les AppData sous Windows et dans un dossier dédié du répertoire home sous Linux/Mac.

```-r``` ou ```/r``` : effectue l'opération inverse : transforme un fichier .java en fichier JavaITA. Ne fonctionne qu'avec des programmes simples, et pour des raisons évidentes ne compile ni n'exécute — étant donné la variété de termes italiens possibles pour un seul terme Java.

```-?```, ```/?``` ou ```help``` : affiche une liste similaire à celle-ci.

```-p``` ou ```/p``` : nettoie tous les fichiers dans le dossier du programme.

```-a <arg1> <arg2> ...``` ou ```/a <arg1> <arg2> ...``` : transmet des arguments au programme JavaITA en cours d'exécution.

```-np``` ou ```/np``` : supprime la ligne "package" du fichier transpilé, utile pour exécuter des fichiers appartenant à un package sans avoir à gérer la structure des dossiers.

```-e <chemin>``` ou ```/e <chemin>``` : remplace les extensions par défaut par celles situées dans le dossier ou le fichier spécifié.

```-te``` ou ```/te``` : conserve les extensions personnalisées chargées avec -e dans le dossier de données de JavaITA après l'exécution.

### Prérequis

Un ordinateur sous Windows, Linux ou MacOS.

JavaSE et le JDK version 17 ou supérieure installés sur l'appareil, avec Java correctement configuré dans le PATH.

#### Note

JavaITA a été utilisé pour se transpiler lui-même en Java, obtenant un exécutable qui — en recevant le source d'un programme JavaITA comme argument via -a — l'a transpilé et exécuté correctement. Un transpileur écrit dans un langage qui transpile en Java, qui transpile un programme dans le même langage.
