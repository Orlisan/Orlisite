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
  null,
  null
);
export const projectIds = {
    "scythesmod": scythesmod,
    "spongesoverhaul":spongesoverhaul,
    "unsmpds": unsmpds
}
export const mods = [scythesmod, spongesoverhaul, unsmpds];
export const progetti = [...mods];