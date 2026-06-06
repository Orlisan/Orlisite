# Sponges Overhaul

Sponges Overhaul adds seven new sponge types to Minecraft, each designed to absorb something different. Whether you're dealing with lava lakes, mob invasions, or a cloud of lingering potions, there's a sponge for that.

***

## Getting started

All sponges in this mod replace the vanilla sponge — just drop a vanilla sponge in your crafting table to convert it into the mod's base water sponge. From there, every other type is crafted by surrounding a sponge with 4 of its matching ingredient in a cross pattern. Wet sponges dry out in a furnace as usual. Note that only sponges where it makes sense — water, snow, and diamond — will dry out automatically when placed in the Nether.

***

## The Sponges

**Sponge** — The classic, now reworked. Absorbs water and underwater plants in a radius around it.

**Lava Sponge** — Crafted with lava buckets. Works like the water sponge, but for lava. Great for the Nether.

**Fire Sponge** — Crafted with fire charges. Absorbs fire blocks in a spherical area. If it soaks up soul fire instead, the wet version takes on a blue appearance as a small visual bonus.

**Potion Sponge** — Crafted with nether wart. Absorbs lingering potion clouds on the ground. Handy for cleaning up after a witch fight.

**Undead Sponge** — Crafted with bone blocks. Absorbs nearby undead mobs and stores them inside. The wet version slowly releases them back one by one over time — handle it carefully, or smelt it to get your dry sponge back.

**Snow Sponge** — Crafted with snow blocks. Absorbs snow and powder snow in an area. Perfect for clearing out winter landscapes.

**Diamond Sponge** — Crafted with diamonds around a water sponge. Absorbs water just like the regular one, but with a dramatically larger range and capacity. Worth the investment when draining an ocean monument.

***

## The 2×2×2 Cube

Every sponge type has a hidden upgrade mechanic: if you place 8 of the same type in a 2×2×2 cube, they link together and act as one supercharged unit with 4× the range and 8× the absorption capacity. Great for large-scale drainage or clearing out massive fires.

***

## Developer API

`CustomSponges` accepts a fluid class, a block class, or a block tag as the target. Here's a quick example:

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

For the full API documentation and more details, see [API.md](https://github.com/Orlisan/Sponges-Overhaul/blob/main/API.md) on GitHub.

***

## A note from the author

Hi! If you have an idea for a new sponge type, feel free to suggest it in the comments — I'd be happy to add it and credit you for the idea. Bug reports and feedback are always appreciated.

If you've read this far, you have my gratitude!