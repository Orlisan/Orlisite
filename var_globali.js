import { Project_info } from "./Project_info.js";

export const scythesmod = new Project_info(
  "textures/logo_falci.png",
  "Apocalyptic Scythes",
  "Una mod che aggiunge 5 falci",
);
export const spongesoverhal = new Project_info(
  "textures/logo_spugne.png",
  "Sponges Overhaul",
  "La mod aggiunge 7 spugne",
);
export const unsmpds = new Project_info(
  "textures/logo_unstablesmp.png",
  "UNSMPDS-Optimized",
  "Improved BattyLeaf mod",
);
export const mods = [scythesmod, spongesoverhal, unsmpds];