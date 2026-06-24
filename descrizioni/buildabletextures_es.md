# Buildable Textures
Diseña tus propios bloques de Minecraft usando estructuras de pixel art en hormigón o cualquiera de los
4.294.967.296 colores mediante entrada ARGB directa — sin herramientas externas, sin editores de paquetes de recursos.
Se requiere un rápido reinicio de Minecraft para cargar completamente los nuevos bloques, ya que los bloques registrados dinámicamente se inicializan al inicio.
## Cómo funciona
Coloca bloques de hormigón de colores o cualquier bloque ARGB (ver abajo) en una cuadrícula 16×16 e interactúa con el Bloque Scanner. La mod lee el patrón y genera un bloque completamente texturizado, guardado en
`config/buildabletextures/<nombreblocque>/`. Tras reiniciar Minecraft, el bloque aparece
en la pestaña creativa Bloques de construcción y se comporta como cualquier bloque estándar.
Para texturas 2D, la cuadrícula se extiende a lo largo de Y (arriba) y Z (sur) — la misma textura se
aplica a las seis caras del bloque resultante.
Para texturas 3D, el Bloque Scanner genera un marco cúbico hueco 18×18×18 que se extiende
hacia el sur, arriba y el este. Cada cara del marco es un lienzo 16×16 independiente:
lo que construyas en una cara determinada se convertirá en la textura de la cara correspondiente
del bloque resultante, dando control total sobre los seis lados de forma independiente.
¿Necesitas más que los 16 colores del hormigón? La mod incluye bloques ARGB: asigna cualquier código hexadecimal ARGB de 8 caracteres como nombre, y serán generados como bloques de color sólido con los que construir, dando acceso a los 4.294.967.296 colores posibles directamente en tu lienzo.
## Características
- Modos de escaneo 2D y 3D
- Generación de marco opcional, siempre orientado hacia el sur, arriba y el este
- 4.294.967.296 colores disponibles mediante entrada hexadecimal ARGB
- Sin herramientas externas, sin gestión de paquetes de recursos — la mod lo gestiona todo
- Detección de nombres duplicados con retroalimentación en la interfaz gráfica
- Nombres de bloques localizados en 10 idiomas, como inglés, italiano y francés
## El Bloque Scanner
Al interactuar con él, el Bloque Scanner abre una interfaz dedicada donde el jugador
puede nombrar la textura, generar opcionalmente un marco como guía de colocación y confirmar
el escaneo en modo 2D o 3D. Solo se aceptan como nombres caracteres alfanuméricos, espacios, guiones bajos
y guiones.
## Nota
Aunque al inicio se implementa un sistema de limpieza y validación anti-crash, se recomienda igualmente no editar manualmente los archivos JSON en `config/buildabletextures/` para una mejor experiencia.
La licencia es ARR, pero si tienes una idea de mejora, comunícamela en github/comentarios
Se requieren Fabric Loader y Fabric API
