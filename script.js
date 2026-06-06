import { Project_info} from "./Project_info.js";
const scythesmod = new Project_info(
  "textures/logo_falci.png",
  "Apocalyptic Scythes",
  "Una mod che aggiunge 5 falci apocalittiche",
);
const spongesoverhal = new Project_info(
  "textures/logo_spugne.png",
  "Sponges Overhaul",
  "La mod aggiunge 7 spugne"
);
const unsmpds = new Project_info(
  "textures/logo_unstablesmp.png",
  "UNSMPDS-Optimized",
  "Improved BattyLeaf mod",
);
const mods = [scythesmod, spongesoverhal, unsmpds];
const barraDiRicerca = document.querySelector(".barra_di_ricerca");
barraDiRicerca.addEventListener("mouseenter", function () {
  barraDiRicerca.style.borderColor = "red";
});
barraDiRicerca.addEventListener("mouseleave", function () {
  barraDiRicerca.style.borderColor = "gray";
});
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && document.activeElement == barraDiRicerca) {
    const valuta = barraDiRicerca.value;
    if (valuta != null && valuta.trim() != "") {
      barraDiRicerca.value = "Scrivi qualcosa. . .";
      window.location.href = "search.html?q=" + valuta;
    }
  }
});
const modsDiMinecraft = document.createElement("div");
const schermoSopra = document.querySelector(".schermo_sopra");
schermoSopra.appendChild(modsDiMinecraft);
modsDiMinecraft.classList.add("mods_minecraft");
modsDiMinecraft.textContent = "  Mod di Minecraft";
let gradi = 0;
let isInside = false;
const freccia = document.createElement("img");
freccia.classList.add("freccia_mod_minecraft");
freccia.src = "textures/freccia_pixel.svg";
freccia.style.transform = "scale(2x)";
modsDiMinecraft.appendChild(freccia);
inizializzaMenu();
animaFreccia();
modsDiMinecraft.addEventListener("mouseenter", function () {
  isInside = true;
});
modsDiMinecraft.addEventListener("mouseleave", function () {
  isInside = false;
});
const menu = document.querySelector(".menu_mods");
function animaFreccia() {
  const animazione = setInterval(function () {
    const stileMenu = window.getComputedStyle(menu);
    const topAttuale = parseInt(stileMenu.top) || 0;

    if (isInside && gradi <= 180) {
      freccia.style.transform = "rotate(" + gradi + "deg)";
      menu.style.top = (topAttuale+2)+"px";
      gradi++;
    } else if (!isInside && gradi >= 0) {
      freccia.style.transform = "rotate(" + gradi + "deg)";
      menu.style.top = (topAttuale-2)+"px";
      gradi--;
    }
  }, 5);
}
function inizializzaMenu() {
  let current_spazio = 10;
  let mods_in_page = 0;
  let modsTotal = 0;
  const mods_per_page = 3;
  mods.forEach((mod) => {
    if (mods_in_page <= 3) {
      modsTotal++;
      mods_in_page++;
      const modmenu = document.createElement("div");
      modmenu.style.position = "absolute";
      modmenu.classList.add("mod_" + modsTotal);
      modmenu.style.left = "10px";
      modmenu.style.top = current_spazio+"px";
      modmenu.style.width = "300px";
      modmenu.style.height = "100px";

      const imgMod = document.createElement("img");
      imgMod.classList.add("img_mod_" + modsTotal);
      imgMod.src = mod.getImgPath();
      imgMod.style.position = "absolute";
      imgMod.style.left = "10px";
      imgMod.style.top = "10px";
      imgMod.style.width = "80px";
      imgMod.style.height = "80px";

      const titleMod = document.createElement("div");
      titleMod.style.position = "absolute";
      titleMod.style.left = "100px";
      titleMod.style.top = "10px";
      titleMod.style.width = "200px";
      titleMod.style.height = "40px";
      titleMod.style.fontFamily = `'Monocraft', sans-serif`;
      titleMod.textContent = mod.getTitle();
      titleMod.style.fontSize = "20px";

      const summaryMod = document.createElement("div");
      summaryMod.style.position = "absolute";
      summaryMod.style.left = "100px";
      summaryMod.style.top = "60px";
      summaryMod.style.width = "200px";
      summaryMod.style.height = "40px";
      summaryMod.style.fontFamily = `'Monocraft', sans-serif`;
      summaryMod.textContent = mod.getSummary();
      summaryMod.style.fontSize = "16px";

      modmenu.appendChild(imgMod);
      modmenu.appendChild(titleMod);
      modmenu.appendChild(summaryMod);
      document.querySelector(".menu_mods").appendChild(modmenu);
      current_spazio += 110;
    }
  });
}
