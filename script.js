import { Project_info } from "./Project_info.js";
import * as Mods from "./var_globali.js";
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
const menu = document.querySelector(".menu_mods");
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

menu.addEventListener("mouseenter", function () {
  isInside = true;
});
menu.addEventListener("mouseleave", function () {
  isInside = false;
});
function animaFreccia() {
  const animazione = setInterval(function () {
    const stileMenu = window.getComputedStyle(menu);
    const topAttuale = parseInt(stileMenu.top) || 0;

    if (isInside && gradi <= 180) {
      freccia.style.transform = "rotate(" + gradi + "deg)";
      menu.style.top = topAttuale + 2 + "px";
      gradi++;
    } else if (!isInside && gradi >= 0) {
      freccia.style.transform = "rotate(" + gradi + "deg)";
      menu.style.top = topAttuale - 2 + "px";
      gradi--;
    }
  }, 5);
}
function inizializzaMenu() {
  const mods_per_page = 3;
  const arrays = [];

  for (let i = 0; i < Mods.mods.length; i += mods_per_page) {
    const blocco = Mods.mods.slice(i, i + mods_per_page);
    arrays.push(blocco);
  }
  instanziaBottoni(arrays[0]);
  let paginaCorrente = 0;
  let pagineTotali = arrays.length;
  const numPagina = document.createElement("div");
  numPagina.style.fontFamily = `'Monocraft', sans-serif`;
  numPagina.style.fontSize = "24px";
  numPagina.style.position = "absolute";
  numPagina.style.left = "116px";
  numPagina.style.top = "335px";
  numPagina.textContent = paginaCorrente + 1 + "/" + pagineTotali;
  menu.appendChild(numPagina);
  if (arrays.length > 1) {
    const bottoneDestra = document.createElement("button");
    bottoneDestra.style.position = "absolute";
    bottoneDestra.style.left = "170px";
    bottoneDestra.style.top = "335px";
    bottoneDestra.style.width = "30px";
    bottoneDestra.style.height = "30px";
    bottoneDestra.style.backgroundColor = "rgb(49, 22, 0)";
    const imgBotDestra = document.createElement("img");
    imgBotDestra.style.position = "absolute";
    imgBotDestra.src = "textures/freccia_pagina.svg";
    imgBotDestra.width = "30";
    imgBotDestra.height = "30";
    imgBotDestra.style.left = "-2px";
    imgBotDestra.style.top = "-3px";
    bottoneDestra.appendChild(imgBotDestra);
    menu.appendChild(bottoneDestra);
    bottoneDestra.addEventListener("click", function () {
      if (paginaCorrente + 1 < pagineTotali) {
        paginaCorrente += 1;
        instanziaBottoni(arrays[paginaCorrente]);
        numPagina.textContent = (paginaCorrente+1)+"/"+pagineTotali;
      }
    });

    const bottoneSinistra = document.createElement("button");
    bottoneSinistra.style.position = "absolute";
    bottoneSinistra.style.left = "80px";
    bottoneSinistra.style.top = "335px";
    bottoneSinistra.style.width = "30px";
    bottoneSinistra.style.height = "30px";
    bottoneSinistra.style.backgroundColor = "rgb(49, 22, 0)";
    const imgBotSinistra = document.createElement("img");
    imgBotSinistra.style.position = "absolute";
    imgBotSinistra.src = "textures/freccia_pagina.svg";
    imgBotSinistra.style.transform = "rotate(180deg)";
    imgBotSinistra.width = "30";
    imgBotSinistra.height = "30";
    imgBotSinistra.style.left = "-5px";
    imgBotSinistra.style.top = "-4px";
    bottoneSinistra.appendChild(imgBotSinistra);
    menu.appendChild(bottoneSinistra);
    bottoneSinistra.addEventListener("click", function () {
      if (paginaCorrente - 1 >= 0) {
        paginaCorrente -= 1;
        instanziaBottoni(arrays[paginaCorrente]);
        numPagina.textContent = (paginaCorrente+1)+"/"+pagineTotali;
      }
    });
  }
  
}
function instanziaBottoni(arrayMods) {
  const oldMod1 = document.querySelector(".mod_1");
  const oldMod2 = document.querySelector(".mod_2");
  const oldMod3 = document.querySelector(".mod_3");
  if (oldMod1) {
    oldMod1.remove();
  }
  if (oldMod2) {
    oldMod2.remove();
  }
  if (oldMod3) {
    oldMod3.remove();
  }
  let numBott = 0;
  let current_spazio = 10;
  arrayMods.forEach((mod) => {
    numBott++;
    const modmenu = document.createElement("button");
    modmenu.classList.add("mod_" + numBott);
    modmenu.style.position = "absolute";
    modmenu.style.left = "10px";
    modmenu.style.top = current_spazio + "px";
    modmenu.style.width = "280px";
    modmenu.style.height = "100px";
    modmenu.addEventListener("click", function () {
      console.log("test superato");
    });
    const imgMod = document.createElement("img");
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
    titleMod.style.textAlign = "left";
    titleMod.style.fontSize = "20px";

    const summaryMod = document.createElement("div");
    summaryMod.style.position = "absolute";
    summaryMod.style.left = "100px";
    summaryMod.style.top = "60px";
    summaryMod.style.width = "200px";
    summaryMod.style.height = "40px";
    summaryMod.style.fontFamily = `'Monocraft', sans-serif`;
    summaryMod.textContent = mod.getSummary();
    summaryMod.style.textAlign = "left";
    summaryMod.style.fontSize = "16px";

    modmenu.appendChild(imgMod);
    modmenu.appendChild(titleMod);
    modmenu.appendChild(summaryMod);
    document.querySelector(".menu_mods").appendChild(modmenu);
    current_spazio += 110;
  });
}
