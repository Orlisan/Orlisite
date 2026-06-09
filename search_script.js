import * as Contents from "./var_globali.js";
import * as Traduttore from "./traduttore.js";
import * as Instanze from "./menu_instanze.js";
Instanze.creaLogo();
const parametri = new URLSearchParams(window.location.search);

const ricerca = parametri.get("q");
const progettiTrovati = [];
document.title = Traduttore.traduci("search_title") + " - " + ricerca;
document.querySelector(".nome_ricerca").textContent =
  Traduttore.traduci("search_results") + ricerca;
Contents.progetti.forEach((progetto) => {
  if (progetto.getTitle().toLowerCase().includes(ricerca.toLowerCase())) {
    progettiTrovati.push(progetto);
  }
});
let progetti_per_page = 4;
const arrays = [];

for (let i = 0; i < progettiTrovati.length; i += progetti_per_page) {
  const blocco = progettiTrovati.slice(i, i + progetti_per_page);
  arrays.push(blocco);
}
const menu = document.querySelector(".schermo_sopra");
instanziaBottoni(arrays[0]);
let paginaCorrente = 0;
let pagineTotali = arrays.length;
const numPagina = document.createElement("div");
if (arrays.length > 0) {
  numPagina.style.fontFamily = `'Monocraft', sans-serif`;
  numPagina.style.fontSize = "30px";
  numPagina.style.position = "absolute";
  numPagina.style.left = "80%";
  numPagina.style.top = "20px";
  numPagina.textContent = paginaCorrente + 1 + "/" + pagineTotali;
  menu.appendChild(numPagina);
  if (arrays.length > 1) {
    const bottoneDestra = document.createElement("button");
    bottoneDestra.style.position = "absolute";
    bottoneDestra.style.left = "90%";
    bottoneDestra.style.top = "5%";
    bottoneDestra.style.width = "100px";
    bottoneDestra.style.height = "75%";
    bottoneDestra.style.backgroundColor = "black";
    bottoneDestra.style.outline = "none";
    const imgBotDestra = document.createElement("img");
    imgBotDestra.style.position = "absolute";
    imgBotDestra.src = "textures/freccia_pagina.svg";
    imgBotDestra.width = "100";
    imgBotDestra.height = "100";
    imgBotDestra.style.left = "-15px";
    imgBotDestra.style.top = "-10px";
    bottoneDestra.appendChild(imgBotDestra);
    menu.appendChild(bottoneDestra);
    bottoneDestra.addEventListener("click", function () {
      if (paginaCorrente + 1 < pagineTotali) {
        paginaCorrente += 1;
        instanziaBottoni(arrays[paginaCorrente]);
        numPagina.textContent = paginaCorrente + 1 + "/" + pagineTotali;
      }
    });

    const bottoneSinistra = document.createElement("button");
    bottoneSinistra.style.position = "absolute";
    bottoneSinistra.style.left = "70%";
    bottoneSinistra.style.top = "5%";
    bottoneSinistra.style.width = "100px";
    bottoneSinistra.style.height = "75%";
    bottoneSinistra.style.outline = "none";
    bottoneSinistra.style.backgroundColor = "black";
    const imgBotSinistra = document.createElement("img");
    imgBotSinistra.style.position = "absolute";
    imgBotSinistra.src = "textures/freccia_pagina.svg";
    imgBotSinistra.style.transform = "rotate(180deg)";
    imgBotSinistra.width = "100";
    imgBotSinistra.height = "100";
    imgBotSinistra.style.left = "-15px";
    imgBotSinistra.style.top = "-10px";
    bottoneSinistra.appendChild(imgBotSinistra);
    menu.appendChild(bottoneSinistra);
    bottoneSinistra.addEventListener("click", function () {
      if (paginaCorrente - 1 >= 0) {
        paginaCorrente -= 1;
        instanziaBottoni(arrays[paginaCorrente]);
        numPagina.textContent = paginaCorrente + 1 + "/" + pagineTotali;
      }
    });
  }
} else {
}

function instanziaBottoni(arrayProgetti) {
  const oldMod1 = document.querySelector(".project_1");
  const oldMod2 = document.querySelector(".project_2");
  const oldMod3 = document.querySelector(".project_3");
  const oldMod4 = document.querySelector(".project_4");
  if (oldMod1) {
    oldMod1.remove();
  }
  if (oldMod2) {
    oldMod2.remove();
  }
  if (oldMod3) {
    oldMod3.remove();
  }
  if (oldMod4) {
    oldMod4.remove();
  }
  let numBott = 0;
  let current_spazio = 10;
  arrayProgetti.forEach((mod) => {
    numBott++;
    const modmenu = document.createElement("button");
    modmenu.classList.add("project_" + numBott);
    modmenu.style.position = "absolute";
    modmenu.style.left = "10px";
    modmenu.style.top = current_spazio + "px";
    modmenu.style.width = "80%";
    modmenu.style.height = "100px";
    modmenu.addEventListener("click", function () {
      window.location.href = "project-page.html?id=" + mod.getId()+"&lang="+Traduttore.current_name;
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
    titleMod.style.width = "60%";
    titleMod.style.height = "40px";
    titleMod.style.fontFamily = `'Monocraft', sans-serif`;
    titleMod.textContent = mod.getTitle();
    titleMod.style.textAlign = "left";
    titleMod.style.fontSize = "20px";

    const summaryMod = document.createElement("div");
    summaryMod.style.position = "absolute";
    summaryMod.style.left = "100px";
    summaryMod.style.top = "60px";
    summaryMod.style.width = "60%";
    summaryMod.style.height = "40px";
    summaryMod.style.fontFamily = `'Monocraft', sans-serif`;
    summaryMod.textContent = mod.getSummary();
    summaryMod.style.textAlign = "left";
    summaryMod.style.fontSize = "16px";

    modmenu.appendChild(imgMod);
    modmenu.appendChild(titleMod);
    modmenu.appendChild(summaryMod);
    document.querySelector(".schermo_sotto").appendChild(modmenu);
    current_spazio += 110;
  });
}
