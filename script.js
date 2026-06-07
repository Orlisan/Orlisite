import { Project_info } from "./Project_info.js";
import * as Progetti from "./var_globali.js";
import * as InstanzaSchermoSopra from "./menu_instanze.js";
InstanzaSchermoSopra.creaLogo();
InstanzaSchermoSopra.creaBarraDiRicerca();
InstanzaSchermoSopra.creaMenu(Progetti.mods, ".menu_mods", "mods_minecraft", "Mod Di Minecraft");
InstanzaSchermoSopra.creaMenu(Progetti.altriProgetti, ".menu_altri_progetti", "altri_progetti", "Altri Progetti");