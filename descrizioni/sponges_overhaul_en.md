# Sponges Overhaul
Sponges Overhaul adds seven new types of sponge to Minecraft, each designed to absorb something different. Whether you're dealing with lava lakes, mob invasions, or a lingering potion cloud, there's a sponge for every occasion.
***
## Getting Started
All sponges in this mod replace the vanilla sponge — simply place a vanilla sponge in the crafting table to convert it into the mod's base water sponge. From there, every other type is crafted by surrounding a sponge with 4 of its corresponding ingredient in a cross shape. Wet sponges dry in a furnace as usual. Note that only sponges for which it makes sense — water, snow, and diamond — will dry automatically in the Nether.
***
## The Sponges
**Sponge** — The classic, now reworked. Absorbs water and underwater plants in a radius around itself.
**Lava Sponge** — Crafted with lava buckets. Works like the water sponge, but for lava. Great for the Nether.
**Fire Sponge** — Crafted with fire charges. Absorbs fire blocks in a spherical area. If it absorbs soul fire, the wet version takes on a blue appearance as a small visual bonus.
**Potion Sponge** — Crafted with nether wart. Absorbs lingering potion clouds on the ground. Useful for cleaning up after a fight with a witch.
**Undead Sponge** — Crafted with bone blocks. Absorbs nearby undead mobs and stores them inside. The wet version releases them slowly one at a time over time — handle with care, or smelt it to recover the dry sponge.
**Snow Sponge** — Crafted with snow blocks. Absorbs snow and powder snow in an area. Perfect for tidying up wintry landscapes.
**Diamond Sponge** — Crafted with diamonds around a water sponge. Absorbs water like the regular sponge, but with a considerably larger radius and capacity. Worth the investment for emptying an ocean monument.
***
## The 2×2×2 Cube
Each sponge type has a hidden upgrade mechanic: if you place 8 of the same type in a 2×2×2 cube, they link together and act as a single upgraded unit with 4× the radius and 8× the absorption capacity. Great for large-scale draining or putting out massive fires.
***
## Developer API
`CustomSponges` accepts a fluid class, a block class, or a block tag as a target. Here's a quick example:
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
For the full API documentation and further details, see [API.md](https://github.com/Orlisan/Sponges-Overhaul/blob/main/API.md) on GitHub.
***
## A note from the author
Hi! If you have an idea for a new type of sponge, feel free to suggest it in the comments — I'll be happy to add it and credit you for the idea. Bug reports and feedback are always appreciated.

If you've read this far, you have my gratitude!
