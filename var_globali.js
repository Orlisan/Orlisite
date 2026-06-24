import { Project_info } from "./Project_info.js";

export const scythesmod = new Project_info(
  "textures/logo_falci.png",
  "Apocalyptic Scythes",
  "summary_apocalyptic_scythes",
  "scythesmod",
  "description_apocalyptic_scythes",
  "downloads/apocalyptic_scythes-1.2.1.jar",
  true,
  ["textures/screenshots-scythesmod (2).png","textures/screenshots-scythesmod (3).png",
    "textures/screenshots-scythesmod (4).png", "textures/screenshots-scythesmod (5).png",
    "textures/screenshots-scythesmod (6).png", "textures/screenshots-scythesmod (1).png"
  ]
);
export const spongesoverhaul = new Project_info(
  "textures/logo_spugne.png",
  "Sponges Overhaul",
  "summary_sponges_overhaul", 
  "spongesoverhaul",
  "description_sponges_overhaul",
  "downloads/sponges-overhaul-1.0.2.jar",
  true,
  ["textures/sponges_screenshot.png"]
);
export const unsmpds = new Project_info(
  "textures/logo_unstablesmp.png",
  "UNSMPDS-Optimized",
  "summary_unstablesmp",
  "unsmpds",
  "description_unstablesmp",
  "downloads/unsmpds_optimized-1.0.0.jar",
  false,
  null
);
export const buildabletextures = new Project_info(
  "textures/logo_bt.png",
  "Buildable Textures",
  "summary_bt",
  "buildabletextures",
  "description_bt",
  "downloads/buildabletextures-1.0.0.jar",
  true,
  ["textures/bt_1.png","textures/bt_2.png",
    "textures/bt_3.png", "textures/bt_4.png"
  ]
);
export const javaita = new Project_info(
  "textures/javaita_logo.png",
  "JavaITA",
  "summary_javaita",
  "javaita",
  "description_javaita",
  "downloads/JavaITA.zip",
  false,
  null
);
export const projectIds = {
    "scythesmod": scythesmod,
    "spongesoverhaul":spongesoverhaul,
    "unsmpds": unsmpds,
    "javaita": javaita,
    "buildabletextures": buildabletextures
}
export const altriProgetti = [javaita];
export const mods = [scythesmod, spongesoverhaul, unsmpds, buildabletextures];
export const progetti = [...mods, ...altriProgetti];