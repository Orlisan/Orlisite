# Sponges Overhaul
Sponges Overhaul ajoute sept nouveaux types d'éponges à Minecraft, chacun conçu pour absorber quelque chose de différent. Que tu aies affaire à des lacs de lave, à des invasions de mobs, ou à un nuage de potions persistant, il y a une éponge pour chaque occasion.
***
## Pour commencer
Toutes les éponges de ce mod remplacent l'éponge vanilla — il suffit de placer une éponge vanilla dans la table de craft pour la convertir en éponge d'eau de base du mod. À partir de là, chaque autre type se crée en entourant une éponge de 4 de son ingrédient correspondant en croix. Les éponges mouillées sèchent dans un four comme d'habitude. À noter que seules les éponges pour lesquelles cela a du sens — eau, neige et diamant — sècheront automatiquement dans le Nether.
***
## Les Éponges
**Éponge** — La classique, désormais remaniée. Absorbe l'eau et les plantes aquatiques dans un rayon autour d'elle.
**Éponge de Lave** — Se craft avec des seaux de lave. Fonctionne comme l'éponge d'eau, mais pour la lave. Idéale pour le Nether.
**Éponge de Feu** — Se craft avec des boules de feu. Absorbe les blocs de feu dans une zone sphérique. Si elle absorbe du feu des âmes, la version mouillée prend un aspect bleu comme petit bonus visuel.
**Éponge de Potions** — Se craft avec de la verrue du Nether. Absorbe les nuages de potions persistants au sol. Pratique pour faire le ménage après un affrontement avec une sorcière.
**Éponge Non-Morte** — Se craft avec des blocs d'os. Absorbe les mobs non-morts à proximité et les conserve à l'intérieur. La version mouillée les relâche lentement un à un au fil du temps — à manier avec précaution, ou à faire fondre pour récupérer l'éponge sèche.
**Éponge de Neige** — Se craft avec des blocs de neige. Absorbe la neige et la neige poudreuse dans une zone. Parfaite pour nettoyer les paysages hivernaux.
**Éponge de Diamant** — Se craft avec des diamants autour d'une éponge d'eau. Absorbe l'eau comme l'éponge normale, mais avec un rayon et une capacité nettement plus importants. Ça vaut l'investissement pour vider un monument sous-marin.
***
## Le Cube 2×2×2
Chaque type d'éponge dispose d'un mécanisme d'amélioration caché : si tu en places 8 du même type en cube 2×2×2, elles se connectent entre elles et agissent comme une seule unité améliorée avec 4× le rayon et 8× la capacité d'absorption. Idéal pour les vidanges à grande échelle ou pour éteindre d'immenses incendies.
***
## API pour Développeurs
`CustomSponges` accepte une classe de fluide, une classe de bloc, ou un tag de bloc comme cible. Voici un exemple rapide :
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
Pour la documentation complète de l'API et plus de détails, voir [API.md](https://github.com/Orlisan/Sponges-Overhaul/blob/main/API.md) sur GitHub.
***
## Un mot de l'auteur
Salut ! Si tu as une idée pour un nouveau type d'éponge, n'hésite pas à la suggérer dans les commentaires — je serai ravi de l'ajouter et de te créditer pour l'idée. Les rapports de bugs et les retours sont toujours les bienvenus.

Si tu as lu jusqu'ici, tu as toute ma gratitude !
