import { Project_info } from "./Project_info.js";
import * as Progetti from "./var_globali.js";
import * as InstanzaSchermoSopra from "./menu_instanze.js";
import * as Traduttore from "./traduttore.js";
InstanzaSchermoSopra.creaLogo();
InstanzaSchermoSopra.creaBarraDiRicerca();
InstanzaSchermoSopra.creaMenu(
  Progetti.mods,
  ".menu_mods",
  "mods_minecraft",
  Traduttore.traduci("menu_mods"),
);
InstanzaSchermoSopra.creaMenu(
  Progetti.altriProgetti,
  ".menu_altri_progetti",
  "altri_progetti",
  Traduttore.traduci("menu_otherprojects"),
);
const spiatoreEntrateEdUscite = new IntersectionObserver(fun_007, {
  threshold: 0.7,
});
const schermoSotto = document.querySelector(".schermo_sotto");
const title_project = document.createElement("h1");
title_project.classList.add("title_index");
title_project.textContent = Traduttore.traduci("title_homepage");
creaOmbraColorataAlPassaggio(title_project);
document.querySelector(".schermo_sotto").appendChild(title_project);
spiatoreEntrateEdUscite.observe(title_project);
const mouse = { x: 0, y: 0 };
document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
export function effettoRaggiX(div) {
  div.addEventListener("mouseleave", function () {
    if (document.querySelector(".dark_circle") !== null) {
      document.querySelector(".dark_circle").remove();
    }
  });
  div.addEventListener("mousemove", function () {
    if (document.querySelector(".dark_circle") !== null) {
      document.querySelector(".dark_circle").remove();
    }
    const darkCircle = document.createElement("div");
    darkCircle.classList.add("dark_circle");
    darkCircle.style.backgroundColor = "black";
    darkCircle.style.position = "fixed";
    darkCircle.style.borderRadius = "50%";
    darkCircle.style.width = "30px";
    darkCircle.style.height = "30px";
    darkCircle.style.left = mouse.x - 15 + "px";
    darkCircle.style.top = mouse.y - 15 + "px";
    div.appendChild(darkCircle);
    darkCircle.style.zIndex = div.style.zIndex + 2;
    const boxCircle = darkCircle.getBoundingClientRect();
    const spans = document.querySelectorAll("span");
    spans.forEach((span) => {
      const boxSpan = span.getBoundingClientRect();
      const dentroCircle =
        boxSpan.top >= boxCircle.top - boxSpan.height &&
        boxSpan.bottom <= boxCircle.bottom + boxSpan.height &&
        boxSpan.left >= boxCircle.left - boxSpan.width &&
        boxSpan.right <= boxCircle.right + boxSpan.width;
      const boxDiv = div.getBoundingClientRect();
      const dentroDiv =
        boxSpan.top >= boxDiv.top &&
        boxSpan.bottom <= boxDiv.bottom &&
        boxSpan.left >= boxDiv.left &&
        boxSpan.right <= boxDiv.right;
      if (dentroCircle && dentroDiv) {
        if (span.hasAttribute("secret_letter")) {
          span.textContent = span.getAttribute("secret_letter");
        }
        span.style.color = "white";
        span.style.zIndex = darkCircle.style.zIndex + 1;
      } else if (dentroDiv) {
        if (span.hasAttribute("normal_letter")) {
          span.textContent = span.getAttribute("normal_letter");
        }
        span.style.color = "black";
      }
    });
  });
}
export function dividiInSpanEBastaOForseNo(paragrafo, mappaFrasiTopSecret) {
  const veroTextContent = paragrafo.textContent;
  paragrafo.textContent = "";
  const arrayIndexsDaSostituire = {};
  for (const [fraseDaSostituire, fraseSecret] of Object.entries(
    mappaFrasiTopSecret,
  )) {
    if (veroTextContent.includes(fraseDaSostituire)) {
      const indice = veroTextContent.indexOf(fraseDaSostituire);
      [...fraseDaSostituire].forEach((char) => {
        const index = indice + fraseDaSostituire.indexOf(char);
        const letteraDaSostituire = fraseSecret.charAt(
          fraseDaSostituire.indexOf(char),
        );
        arrayIndexsDaSostituire[index] = letteraDaSostituire;
      });
    }
  }
  for (let i = 0; i < veroTextContent.length; i++) {
    const spanLettera = document.createElement("span");
    spanLettera.setAttribute("translate", "no");
    spanLettera.style.position = "relative";
    spanLettera.textContent = veroTextContent[i];
    spanLettera.style.display = "inline-block";
    spanLettera.style.zIndex = "1";
    if (spanLettera.textContent === " ") {
      spanLettera.innerHTML = "&nbsp";
    }
    if (i in arrayIndexsDaSostituire) {
      spanLettera.setAttribute("secret_letter", arrayIndexsDaSostituire[i]);
      spanLettera.setAttribute("normal_letter", spanLettera.textContent);
    }
    paragrafo.appendChild(spanLettera);
  }
}
export function dividiInSpanEBasta(paragrafo) {
  const veroTextContent = paragrafo.textContent;
  paragrafo.textContent = "";
  for (let i = 0; i < veroTextContent.length; i++) {
    const spanLettera = document.createElement("span");
    spanLettera.setAttribute("translate", "no");
    spanLettera.style.position = "relative";
    spanLettera.textContent = veroTextContent[i];
    spanLettera.style.display = "inline-block";
    spanLettera.style.zIndex = "1";
    if (spanLettera.textContent === " ") {
      spanLettera.innerHTML = "&nbsp";
    }
    paragrafo.appendChild(spanLettera);
  }
}
export function creaOmbraColorataAlPassaggio(paragrafo) {
  const veroTextContent = paragrafo.textContent;
  paragrafo.textContent = "";
  for (let i = 0; i < veroTextContent.length; i++) {
    const spanLettera = document.createElement("span");
    spanLettera.setAttribute("translate", "no");
    spanLettera.textContent = veroTextContent[i];
    spanLettera.style.display = "inline-block";
    spanLettera.style.zIndex = "1";
    if (spanLettera.textContent === " ") {
      spanLettera.innerHTML = "&nbsp";
    }
    spanLettera.addEventListener("mouseenter", function () {
      const left =
        spanLettera.getBoundingClientRect().left -
        document.querySelector(".schermo_sotto").getBoundingClientRect().left;
      const top =
        spanLettera.getBoundingClientRect().top -
        document.querySelector(".schermo_sotto").getBoundingClientRect().top;
      const ombraColorata = spanLettera.cloneNode(true);
      ombraColorata.classList.add("ombra_colorata");
      ombraColorata.style.position = "absolute";
      ombraColorata.style.zIndex = spanLettera.style.zIndex - 1;
      ombraColorata.style.transition = "left 0.5s ease, top 0.5s ease";
      ombraColorata.style.left = left + 3 + "px";
      ombraColorata.style.top = top + 3 + "px";
      if (Math.random() > 0.5) {
        ombraColorata.style.color = "redorange";
      } else {
        ombraColorata.style.color = "orange";
      }

      document.querySelector(".schermo_sotto").appendChild(ombraColorata);
    });

    spanLettera.addEventListener("mouseleave", function () {
      const ombre = document.querySelectorAll(".ombra_colorata");
      ombre.forEach((ombra) => {
        ombra.style.left = ombra.offsetLeft - 3 + "px";
        ombra.style.top = ombra.offsetTop - 3 + "px";
        setTimeout(function () {
          ombra.remove();
        }, 500);
      });
    });
    paragrafo.appendChild(spanLettera);
  }
}

function fun_007(observedElements) {
  observedElements.forEach((element) => {
    const elemento = element.target;
    elemento.style.transition = "transform 0.5s ease";
    const box = elemento.getBoundingClientRect();
    if (element.isIntersecting) {
      if (box.left < document.documentElement.clientWidth / 2) {
        elemento.style.transform = "translateX(20px)";
      } else if (box.left > document.documentElement.clientWidth / 2) {
        elemento.style.transform = "translateX(-20px)";
      }
    } else {
      elemento.style.transform = "translateX(0px)";
    }
  });
}

dividiTestoInPiùParagrafi(
  "h2",
  "sottotitolo_index",
  Traduttore.traduci("subtitle_1"),
  Traduttore.traduci("subtitle_2"),
  Traduttore.traduci("subtitle_3"),
);
export function dividiTestoInPiùParagrafi(tipoDiTesto, classeBase, ...testi) {
  let variabile = 1;
  testi.forEach((testo) => {
    const testoElement = document.createElement(tipoDiTesto);
    testoElement.classList.add(classeBase + "_" + variabile);
    testoElement.textContent = testo;
    creaOmbraColorataAlPassaggio(testoElement);
    spiatoreEntrateEdUscite.observe(testoElement);
    schermoSotto.appendChild(testoElement);
    variabile++;
  });
}
const chiSono = document.querySelector(".chi_sono");
chiSono.textContent = Traduttore.traduci("chi_sono_title");
spiatoreEntrateEdUscite.observe(chiSono);
creaOmbraColorataAlPassaggio(chiSono);
spiatoreEntrateEdUscite.observe(document.querySelector(".inizio_sez_chi_sono"));
spiatoreEntrateEdUscite.observe(
  document.querySelector(".ombra_inizio_sez_chi_sono"),
);

const divProva = document.createElement("div");
divProva.style.position = "absolute";
divProva.style.backgroundColor = "white";
divProva.style.left = "6%";
divProva.style.top = "50%";
divProva.style.zIndex = "0";
divProva.style.width = "60%";
divProva.style.height = "30%";
const scrittaProva = document.createElement("h3");
scrittaProva.style.color = "black";
scrittaProva.textContent = "  Ciao! Mi Chiamo Orlando!";
dividiInSpanEBastaOForseNo(scrittaProva, { Chiamo: "Mangio" });
effettoRaggiX(divProva);
divProva.appendChild(scrittaProva);
schermoSotto.appendChild(divProva);
//Cose di fine pagina: "Sito scritto interamente in html, css e javascript,
// e nessuna pressa di parole è stata sfruttata!
