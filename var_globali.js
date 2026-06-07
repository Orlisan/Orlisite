import { Project_info } from "./Project_info.js";

export const scythesmod = new Project_info(
  "textures/logo_falci.png",
  "Apocalyptic Scythes",
  "Una mod che aggiunge 5 falci",
  "scythesmod",
  "descrizioni/apocalyptic_scythes.md",
  "downloads/apocalyptic_scythes-1.2.1.jar"
);
export const spongesoverhaul = new Project_info(
  "textures/logo_spugne.png",
  "Sponges Overhaul",
  "La mod aggiunge 7 spugne", 
  "spongesoverhaul",
  "descrizioni/sponges_overhaul.md",
  "downloads/sponges-overhaul-1.0.2.jar"
);
export const unsmpds = new Project_info(
  "textures/logo_unstablesmp.png",
  "UNSMPDS-Optimized",
  "Improved BattyLeaf mod",
  "unsmpds",
  "descrizioni/unstable_smp.md",
  "downloads/unsmpds_optimized-1.0.0.jar"
);
export const javaita = new Project_info(
  "textures/javaita_logo.png",
  "JavaITA",
  "Java in Italiano!",
  "javaita",
  "descrizioni/javaita.md",
  "downloads/JavaITA.zip",
  ["./textures/404.png", "textures/logo_spugne.png"]
)
export const projectIds = {
    "scythesmod": scythesmod,
    "spongesoverhaul":spongesoverhaul,
    "unsmpds": unsmpds,
    "javaita": javaita
}
export const altriProgetti = [javaita];
export const mods = [scythesmod, spongesoverhaul, unsmpds];
export const progetti = [...mods, ...altriProgetti];