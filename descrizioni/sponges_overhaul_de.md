# Sponges Overhaul
Sponges Overhaul fügt Minecraft sieben neue Schwammtypen hinzu, jeder darauf ausgelegt, etwas anderes zu absorbieren. Egal ob du es mit Lavaseen, Mob-Invasionen oder einer anhaltenden Trankwolke zu tun hast — es gibt einen Schwamm für jeden Anlass.
***
## Erste Schritte
Alle Schwämme in diesem Mod ersetzen den Vanilla-Schwamm — lege einfach einen Vanilla-Schwamm auf den Crafting-Tisch, um ihn in den Basis-Wasserschwamm des Mods umzuwandeln. Von dort aus wird jeder andere Typ hergestellt, indem man einen Schwamm mit 4 des entsprechenden Zutats in Kreuzform umgibt. Nasse Schwämme trocknen wie gewohnt in einem Ofen. Hinweis: Nur Schwämme, bei denen es sinnvoll ist — Wasser, Schnee und Diamant — trocknen im Nether automatisch.
***
## Die Schwämme
**Schwamm** — Der Klassiker, jetzt überarbeitet. Absorbiert Wasser und Unterwasserpflanzen in einem Radius um sich herum.
**Lavaschwamm** — Wird mit Lavaeimern hergestellt. Funktioniert wie der Wasserschwamm, aber für Lava. Ideal für den Nether.
**Feuerschwamm** — Wird mit Feuerkugeln hergestellt. Absorbiert Feuerblöcke in einem kugelförmigen Bereich. Absorbiert er Seelenfeuer, nimmt die nasse Version als kleinen visuellen Bonus ein bläuliches Aussehen an.
**Tränkeschwamm** — Wird mit Netherwurzel hergestellt. Absorbiert anhaltende Trankwolken am Boden. Nützlich für die Reinigung nach einem Kampf mit einer Hexe.
**Untotschwamm** — Wird mit Knochenblöcken hergestellt. Absorbiert nahegelegene Untote und bewahrt sie in seinem Inneren auf. Die nasse Version gibt sie langsam einen nach dem anderen mit der Zeit frei — vorsichtig handhaben, oder einschmelzen, um den trockenen Schwamm zurückzugewinnen.
**Schneeschwamm** — Wird mit Schneeblöcken hergestellt. Absorbiert Schnee und Pulverschnee in einem Bereich. Perfekt zum Aufräumen winterlicher Landschaften.
**Diamantschwamm** — Wird mit Diamanten rund um einen Wasserschwamm hergestellt. Absorbiert Wasser wie der normale Schwamm, jedoch mit einem deutlich größeren Radius und einer deutlich größeren Kapazität. Die Investition lohnt sich, um ein Unterwassermonument zu leeren.
***
## Der 2×2×2-Würfel
Jeder Schwammtyp verfügt über einen versteckten Verbesserungsmechanismus: Wenn du 8 desselben Typs in einem 2×2×2-Würfel platzierst, verbinden sie sich miteinander und agieren als eine einzige verbesserte Einheit mit 4× dem Radius und 8× der Absorptionskapazität. Ideal für großflächige Entleerungen oder zum Löschen riesiger Brände.
***
## Entwickler-API
`CustomSponges` akzeptiert eine Fluid-Klasse, eine Block-Klasse oder ein Block-Tag als Ziel. Hier ein kurzes Beispiel:
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
Die vollständige API-Dokumentation und weitere Details findest du in [API.md](https://github.com/Orlisan/Sponges-Overhaul/blob/main/API.md) auf GitHub.
***
## Eine Anmerkung des Autors
Hallo! Wenn du eine Idee für einen neuen Schwammtyp hast, kannst du sie gerne in den Kommentaren vorschlagen — ich füge ihn gerne hinzu und erwähne dich als Ideengeber. Fehlermeldungen und Feedback sind immer willkommen.

Wenn du bis hier gelesen hast, hast du meinen Dank!
