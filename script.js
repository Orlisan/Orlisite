import { Project_info } from "./Project_info.js";
import * as Progetti from "./var_globali.js";
import * as InstanzaSchermoSopra from "./menu_instanze.js";
InstanzaSchermoSopra.creaLogo();
InstanzaSchermoSopra.creaBarraDiRicerca();
InstanzaSchermoSopra.creaMenu(
  Progetti.mods,
  ".menu_mods",
  "mods_minecraft",
  "Mod Di Minecraft",
);
InstanzaSchermoSopra.creaMenu(
  Progetti.altriProgetti,
  ".menu_altri_progetti",
  "altri_progetti",
  "Altri Progetti",
);
const spiatoreEntrateEdUscite = new IntersectionObserver(fun_007, {
  threshold: 0.7,
});
const schermoSotto = document.querySelector(".schermo_sotto");
const title_project = document.createElement("h1");
title_project.classList.add("title_index");
title_project.textContent = "Benvenuti al sito ufficiale di Orlisan!!";
creaOmbraColorataAlPassaggio(title_project);
document.querySelector(".schermo_sotto").appendChild(title_project);
spiatoreEntrateEdUscite.observe(title_project);

export function creaOmbraColorataAlPassaggio(paragrafo) {
  const veroTextContent = paragrafo.textContent;
  paragrafo.textContent = "";
  for (let i = 0; i < veroTextContent.length; i++) {
    const spanLettera = document.createElement("span");
    spanLettera.textContent = veroTextContent[i];
    spanLettera.style.display = "inline-block";
    spanLettera.style.zIndex = "1";
    if (spanLettera.textContent === " ") {
      spanLettera.innerHTML = "&nbsp";
    }
    spanLettera.addEventListener("mouseenter", function () {
      const left = spanLettera.getBoundingClientRect().left - document.querySelector(".schermo_sotto").getBoundingClientRect().left;
      const top = spanLettera.getBoundingClientRect().top - document.querySelector(".schermo_sotto").getBoundingClientRect().top;
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

const sottotitolo1 = document.createElement("h2");
sottotitolo1.classList.add("sottotitolo_index_1");
sottotitolo1.textContent = "Sito scritto interamente in html, css e javascript,";
const sottotitolo2 = document.createElement("h2");
sottotitolo2.classList.add("sottotitolo_index_2");
sottotitolo2.textContent = "nessuna pressa di parole è stata sfruttata!";
creaOmbraColorataAlPassaggio(sottotitolo1);
spiatoreEntrateEdUscite.observe(sottotitolo1);
schermoSotto.appendChild(sottotitolo1);
creaOmbraColorataAlPassaggio(sottotitolo2);
spiatoreEntrateEdUscite.observe(sottotitolo2);
schermoSotto.appendChild(sottotitolo2);