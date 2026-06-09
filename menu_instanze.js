import * as Traduttore from "./traduttore.js";
export function creaLogo() {
  const orlisite = document.createElement("button");
  orlisite.style.position = "absolute";
  orlisite.style.left = "2%";
  orlisite.style.top = "5%";
  orlisite.style.width = "20%";
  orlisite.style.height = "70%";
  orlisite.style.fontSize = "30px";
  orlisite.style.color = "red";
  orlisite.style.backgroundColor = "black";
  orlisite.textContent = "OrliSite";
  orlisite.style.fontFamily = `'Monocraft', sans-serif`;
  orlisite.style.textAlign = "center";
  orlisite.style.fontWeight = "bold";
  orlisite.style.border = "none";
  orlisite.style.outline = "none";
  document.querySelector(".schermo_sopra").appendChild(orlisite);
  orlisite.addEventListener("click", function() {
    console.log("Cliccato");
    const url = new URL(window.location.origin);
    url.searchParams.set("lang", Traduttore.current_name);
    window.location.href = url.toString();
  });
}
export function creaBarraDiRicerca() {
  const barraDiRicerca = document.querySelector(".barra_di_ricerca");
  barraDiRicerca.placeholder = Traduttore.traduci("searchbar_placeholder");
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
      barraDiRicerca.value = "";
      window.location.href = "search.html?q=" + valuta+"&lang="+Traduttore.current_name;
    }
  }
});
}
export function creaMenu(Progetti, menuProgetto, menu_class, menu_name) {
  const modsDiMinecraft = document.createElement("div");
  const schermoSopra = document.querySelector(".schermo_sopra");
  schermoSopra.appendChild(modsDiMinecraft);
  modsDiMinecraft.classList.add(menu_class);
  modsDiMinecraft.textContent = "  "+menu_name;
  let gradi = 0;
  let isInside = false;
  const menu = document.querySelector(menuProgetto);
  const freccia = document.createElement("img");
  freccia.classList.add("freccia_"+menuProgetto.slice(1));
  freccia.src = "textures/freccia_pixel.svg";
  freccia.style.transform = "scale(2x)";
  modsDiMinecraft.appendChild(freccia);
  inizializzaMenu(Progetti , menuProgetto);
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
}
export function inizializzaMenu(Progetti, menuProgetto) {
  const menu = document.querySelector(menuProgetto);
  const mods_per_page = 3;
  const arrays = [];

  for (let i = 0; i < Progetti.length; i += mods_per_page) {
    const blocco = Progetti.slice(i, i + mods_per_page);
    arrays.push(blocco);
  }
  instanziaBottoni(arrays[0], menuProgetto);
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
        instanziaBottoni(arrays[paginaCorrente], menuProgetto);
        numPagina.textContent = paginaCorrente + 1 + "/" + pagineTotali;
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
        numPagina.textContent = paginaCorrente + 1 + "/" + pagineTotali;
      }
    });
  }
}
export function instanziaBottoni(arrayMods, menuProgetto) {
  const oldMod1 = document.querySelector(menuProgetto+"_mod_1");
  const oldMod2 = document.querySelector(menuProgetto+"_mod_2");
  const oldMod3 = document.querySelector(menuProgetto+"_mod_3");
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
    modmenu.classList.add(menuProgetto.slice(1)+"_mod_" + numBott);
    modmenu.style.position = "absolute";
    modmenu.style.left = "10px";
    modmenu.style.top = current_spazio + "px";
    modmenu.style.width = "280px";
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
    document.querySelector(menuProgetto).appendChild(modmenu);
    current_spazio += 110;
  });
}
