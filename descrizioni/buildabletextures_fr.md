# Buildable Textures
Concevez vos propres blocs Minecraft en utilisant des structures en béton de pixel art ou l'un des
4 294 967 296 couleurs via une saisie ARGB directe — aucun outil externe, aucun éditeur de resource pack.
Un rapide redémarrage de Minecraft est nécessaire pour charger complètement les nouveaux blocs, car les blocs enregistrés dynamiquement sont initialisés au démarrage.
## Fonctionnement
Placez des blocs de béton colorés ou tout bloc ARGB (voir ci-dessous) dans une grille 16×16 et interagissez avec le Bloc Scanner. La mod lit le motif et génère un bloc entièrement texturé, sauvegardé dans
`config/buildabletextures/<nombloc>/`. Après avoir redémarré Minecraft, le bloc apparaît
dans l'onglet créatif Blocs de construction et se comporte comme n'importe quel bloc standard.
Pour les textures 2D, la grille s'étend le long de Y (haut) et Z (sud) — la même texture est
appliquée aux six faces du bloc résultant.
Pour les textures 3D, le Bloc Scanner génère un cadre creux 18×18×18 s'étendant
vers le sud, le haut et l'est. Chaque face du cadre est une toile 16×16 indépendante :
ce que vous construisez sur une face donnée deviendra la texture de la face correspondante
du bloc résultant, offrant un contrôle total sur les six côtés de manière indépendante.
Besoin de plus que les 16 couleurs de béton ? La mod inclut des blocs ARGB : attribuez n'importe quel code hexadécimal ARGB à 8 caractères comme nom, et ils seront générés comme des blocs de couleur unie avec lesquels construire, donnant accès aux 4 294 967 296 couleurs possibles directement sur votre toile.
## Fonctionnalités
- Modes de numérisation 2D et 3D
- Génération de cadre optionnelle, toujours orientée vers le sud, le haut et l'est
- 4 294 967 296 couleurs disponibles via saisie hexadécimale ARGB
- Aucun outil externe, aucune gestion de resource pack — la mod gère tout
- Détection des noms en double avec retour dans l'interface graphique
- Noms de blocs localisés en 10 langues, dont l'anglais, l'italien et le français
## Le Bloc Scanner
Lorsqu'on interagit avec lui, le Bloc Scanner ouvre une interface dédiée où le joueur
peut nommer la texture, générer optionnellement un cadre comme guide de placement, et confirmer
la numérisation en mode 2D ou 3D. Seuls les caractères alphanumériques, les espaces, les underscores
et les tirets sont acceptés comme noms.
## Remarque
Bien qu'un système de nettoyage et de validation anti-crash soit implémenté au démarrage, il est tout de même recommandé de ne pas modifier manuellement les fichiers JSON dans `config/buildabletextures/` pour une meilleure expérience.
La licence est ARR, mais si vous avez une idée d'amélioration, signalez-la sur github/commentaires
Fabric Loader et Fabric API requis
