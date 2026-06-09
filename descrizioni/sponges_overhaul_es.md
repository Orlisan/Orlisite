# Sponges Overhaul
Sponges Overhaul añade siete nuevos tipos de esponjas a Minecraft, cada una diseñada para absorber algo diferente. Ya sea que estés lidiando con lagos de lava, invasiones de mobs, o una nube de pociones persistente, hay una esponja para cada ocasión.
***
## Para empezar
Todas las esponjas de este mod sustituyen a la esponja vanilla — basta con colocar una esponja vanilla en la mesa de crafteo para convertirla en la esponja de agua base del mod. A partir de ahí, cada otro tipo se crea rodeando una esponja con 4 de su ingrediente correspondiente en cruz. Las esponjas mojadas se secan en un horno como de costumbre. Cabe destacar que solo las esponjas para las que tiene sentido — agua, nieve y diamante — se secarán automáticamente en el Nether.
***
## Las Esponjas
**Esponja** — La clásica, ahora renovada. Absorbe agua y plantas acuáticas en un radio a su alrededor.
**Esponja de Lava** — Se craftea con cubos de lava. Funciona como la esponja de agua, pero para la lava. Ideal para el Nether.
**Esponja de Fuego** — Se craftea con bolas de fuego. Absorbe bloques de fuego en un área esférica. Si absorbe fuego de almas, la versión mojada adquiere un aspecto azul como pequeño bonus visual.
**Esponja de Pociones** — Se craftea con verruga del Nether. Absorbe las nubes de pociones persistentes en el suelo. Útil para limpiar después de un enfrentamiento con una bruja.
**Esponja No-Muerta** — Se craftea con bloques de hueso. Absorbe los mobs no-muertos cercanos y los conserva en su interior. La versión mojada los libera lentamente de uno en uno con el tiempo — manipular con cuidado, o fundirla para recuperar la esponja seca.
**Esponja de Nieve** — Se craftea con bloques de nieve. Absorbe nieve y nieve en polvo en un área. Perfecta para limpiar paisajes invernales.
**Esponja de Diamante** — Se craftea con diamantes alrededor de una esponja de agua. Absorbe agua como la esponja normal, pero con un radio y una capacidad notablemente mayores. Vale la inversión para vaciar un monumento submarino.
***
## El Cubo 2×2×2
Cada tipo de esponja tiene un mecanismo de mejora oculto: si colocas 8 del mismo tipo formando un cubo 2×2×2, se conectan entre sí y actúan como una única unidad mejorada con 4× el radio y 8× la capacidad de absorción. Ideal para vaciados a gran escala o para apagar incendios enormes.
***
## API para Desarrolladores
`CustomSponges` acepta una clase de fluido, una clase de bloque, o una etiqueta de bloque como objetivo. Aquí un ejemplo rápido:
```
Block PETROL_SPONGE = new CustomSponges(
    SpongeBlocks.spongeProperties.setId(
        ResourceKey.create(Registries.BLOCK,
            Identifier.fromNamespaceAndPath("yourmodid", "petrol_sponge"))
    ),
    PetrolFluid.class,
    WET_PETROL_SPONGE
);
SpongeBlocks.spongeBlocks.add(PETROL_SPONGE);
```
Para la documentación completa de la API y más detalles, ver [API.md](https://github.com/Orlisan/Sponges-Overhaul/blob/main/API.md) en GitHub.
***
## Una nota del autor
¡Hola! Si tienes una idea para un nuevo tipo de esponja, no dudes en sugerirla en los comentarios — estaré encantado de añadirla y de darte crédito por la idea. Los informes de bugs y los comentarios siempre son bienvenidos.

¡Si has leído hasta aquí, tienes mi gratitud!
