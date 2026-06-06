import * as Contents from "./var_globali.js";
const parametri = new URLSearchParams(window.location.search);

const ricerca = parametri.get("q");
const progettiTrovati = [];
document.title = "Ricerca - " + ricerca;
document.querySelector(".nome_ricerca").textContent =
  "Risultati di ricerca di: " + ricerca;
Contents.progetti.forEach((progetto) => {
  let matchingChars = 0;
  for (let i = 0; i < progetto.getTitle().length; i++) {
    if (progetto.getTitle().charAt(i) == ricerca.charAt(i)) {
      matchingChars++;
    }
  }
  if (matchingChars >= progetto.getTitle().length - 5) {
    progettiTrovati.push(progetto);
    console.log("Progetto Trovato: " + progetto.getTitle());
  }
});
let progetti_per_page = 6;
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
  numPagina.style.left = "60%";
  numPagina.style.top = "20px";
  numPagina.textContent = paginaCorrente + 1 + "/" + pagineTotali;
  menu.appendChild(numPagina);
  if (arrays.length > 1) {
    const bottoneDestra = document.createElement("button");
    bottoneDestra.style.position = "absolute";
    bottoneDestra.style.left = "80%";
    bottoneDestra.style.top = "10%";
    bottoneDestra.style.width = "100px";
    bottoneDestra.style.height = "75%";
    bottoneDestra.style.backgroundColor = "black";
    const imgBotDestra = document.createElement("img");
    imgBotDestra.style.position = "absolute";
    imgBotDestra.src = "textures/freccia_pagina.svg";
    imgBotDestra.width = "100px";
    imgBotDestra.height = "75%";
    //imgBotDestra.style.left = "-2px";
    // imgBotDestra.style.top = "-3px";
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
  bottoneSinistra.style.left = "40%";
  bottoneSinistra.style.top = "10%";
  bottoneSinistra.style.width = "100px";
  bottoneSinistra.style.height = "75%";
  bottoneSinistra.style.backgroundColor = "black";
  const imgBotSinistra = document.createElement("img");
  imgBotSinistra.style.position = "absolute";
  imgBotSinistra.src = "textures/freccia_pagina.svg";
  imgBotSinistra.style.transform = "rotate(180deg)";
  imgBotSinistra.width = "100px";
  imgBotSinistra.height = "75%";
  //imgBotSinistra.style.left = "-5px";
  //imgBotSinistra.style.top = "-4px";
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
}else{
    
}

function instanziaBottoni(arrayProgetti) {}
