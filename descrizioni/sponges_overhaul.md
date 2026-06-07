# Sponges Overhaul
Sponges Overhaul aggiunge sette nuovi tipi di spugna a Minecraft, ognuna progettata per assorbire qualcosa di diverso. Che tu stia affrontando laghi di lava, invasioni di mob, o una nuvola di pozioni persistenti, c'è una spugna per ogni occasione.
***
## Per iniziare
Tutte le spugne di questa mod sostituiscono la spugna vanilla — basta mettere una spugna vanilla nel tavolo da lavoro per convertirla nella spugna d'acqua base della mod. Da lì, ogni altro tipo si crea circondando una spugna con 4 del suo ingrediente corrispondente a croce. Le spugne bagnate si asciugano in una fornace come al solito. Da notare che solo le spugne per cui ha senso — acqua, neve e diamante — si asciugheranno automaticamente nel Nether.
***
## Le Spugne
**Spugna** — La classica, ora rielaborata. Assorbe acqua e piante subacquee in un raggio attorno a sé.
**Spugna di Lava** — Si crea con secchi di lava. Funziona come la spugna d'acqua, ma per la lava. Ottima per il Nether.
**Spugna di Fuoco** — Si crea con cariche di fuoco. Assorbe i blocchi di fuoco in un'area sferica. Se assorbe fuoco dell'anima, la versione bagnata assume un aspetto blu come piccolo bonus visivo.
**Spugna di Pozioni** — Si crea con verruca del nether. Assorbe le nuvole di pozioni persistenti sul terreno. Utile per fare pulizia dopo uno scontro con una strega.
**Spugna Non-Morta** — Si crea con blocchi di ossa. Assorbe i mob non-morti nelle vicinanze e li conserva al suo interno. La versione bagnata li rilascia lentamente uno alla volta nel tempo — maneggiare con cura, oppure fonderla per recuperare la spugna asciutta.
**Spugna di Neve** — Si crea con blocchi di neve. Assorbe neve e neve in polvere in un'area. Perfetta per ripulire paesaggi invernali.
**Spugna di Diamante** — Si crea con diamanti attorno a una spugna d'acqua. Assorbe acqua come quella normale, ma con un raggio e una capacità notevolmente maggiori. Vale l'investimento per svuotare un monumento oceanico.
***
## Il Cubo 2×2×2
Ogni tipo di spugna ha un meccanismo di potenziamento nascosto: se ne piazzi 8 dello stesso tipo in un cubo 2×2×2, si collegano tra loro e agiscono come un'unica unità potenziata con 4× il raggio e 8× la capacità di assorbimento. Ottimo per svuotamenti su larga scala o per spegnere incendi enormi.
***
## API per Sviluppatori
`CustomSponges` accetta una classe di fluido, una classe di blocco, o un tag di blocco come bersaglio. Ecco un esempio rapido:
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
Per la documentazione completa dell'API e ulteriori dettagli, vedi [API.md](https://github.com/Orlisan/Sponges-Overhaul/blob/main/API.md) su GitHub.
***
## Una nota dall'autore
Ciao! Se hai un'idea per un nuovo tipo di spugna, sentiti libero di suggerirla nei commenti — sarò felice di aggiungerla e di creditarti per l'idea. Segnalazioni di bug e feedback sono sempre apprezzati.

Se hai letto fin qui, hai la mia gratitudine!