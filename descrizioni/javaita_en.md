# JavaITA is a transpiler whose goal is to make Java simple and in Italian, almost as if it were natural speech


**It is important to note that not all of the JRE has been mapped, and that the JavaITA language is perfectly mixable with standard Java**

The transpiler handles comments and strings without translating them.

It is possible to use multiple grammatical forms to write code, depending on context and preference — one can thus create their own level of discursiveness, for example keeping

```se(x è uguale a y) {<codice> }```

or turning it into

```se è vero che x è uguale a y allora fai <codice> .```

The programme is used from the terminal: double-click on the script corresponding to your operating system (```.bat``` for Windows, ```.sh``` for Linux/MacOS), and activate it with elevated privileges. This will add the programme to the PATH and execute the ```.jar``` file, automatically prepending ```java -cp``` and similar elements. After this, you can freely open your terminal from any directory and use the programme with the syntax explained below.

## Using JavaITA
After following the steps above, open the terminal and type ```javaita <path> <parameters>``` — the path being that of the file (with any extension) you wish to transpile, and the parameters:

```-s``` or ```/s``` : translates the javaita file into Java only, without compiling or executing it, which is the default behaviour. Normally combined with -t.

```-t``` or ```/t``` : keeps the temporary files (.java and .class) in the output folder, located in AppData on Windows and in a dedicated folder in the home directory on Linux/Mac.

```-r``` or ```/r``` : performs the reverse process: transforms a .java file into a JavaITA file. Only works with simple programmes, and for obvious reasons neither compiles nor executes — given the variety of Italian terms possible for a single Java term.

```-?```, ```/?``` or ```help``` : displays a list similar to this one.

```-p``` or ```/p``` : clears all files in the programme's folder.

```-a <arg1> <arg2> ...``` or ```/a <arg1> <arg2> ...``` : passes arguments to the running JavaITA programme.

```-np``` or ```/np``` : removes the "package" line from the transpiled file, useful for running files that belong to a package without having to manage the folder structure.

```-e <path>``` or ```/e <path>``` : replaces the default extensions with those in the specified folder or file.

```-te``` or ```/te``` : keeps the custom extensions loaded with -e in the JavaITA data folder after execution.

### Requirements

A computer running Windows, Linux, or MacOS.

JavaSE and the JDK version 17 or above installed on the device, with Java correctly configured in the PATH.

#### Note

JavaITA was used to transpile itself into Java, obtaining an executable which — upon receiving the source of a JavaITA programme as an argument via -a — transpiled and executed it correctly. A transpiler written in a language that transpiles to Java, transpiling a programme in that same language.
