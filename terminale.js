import * as Animazioni from "./script.js";
import * as Traduttore from "./traduttore.js";
const bottoneTerminale = document.querySelector(".bottone_cmd");
let isTranslating;
let isScaling;

let percentualeLeft = (window.innerWidth / 100) * 30;
let percentualeTop = (window.innerHeight / 100) * 80;
document.addEventListener("mousemove", function (e) {
  if (e.clientX <= percentualeLeft && e.clientY >= percentualeTop) {
    isTranslating = true;
  } else {
    isTranslating = false;
  }
  animCmd();
});
let inputCreato = false;
bottoneTerminale.addEventListener("mouseenter", function () {
  isScaling = true;
  animCmd();
  bottoneTerminale.addEventListener("transitionend", function () {
    if (isScaling && !inputCreato) {
      creaTesti();
      inputCreato = true;
    }
  });
});
bottoneTerminale.addEventListener("mouseleave", function () {
  isScaling = false;
  togliInput();
  animCmd();
});
function animCmd() {
  if (isScaling) {
    percentualeTop = (window.innerHeight / 100) * 40;
    percentualeLeft = (window.innerWidth / 100) * 60;
  } else {
    percentualeTop = (window.innerHeight / 100) * 80;
    percentualeLeft = (window.innerWidth / 100) * 30;
  }
  bottoneTerminale.style.transform =
    (isTranslating ? "translateX(400px) " : "translateX(0px) ") +
    (isScaling ? "scale(500%)" : "scale(100%)");
}
let daCancellare = false;
function creaTesti() {
  const parser = new UAParser();
  const nomeBrowser = parser.getBrowser().name.toLowerCase();
  const input = document.createElement("textarea");
  const output = document.createElement("div");
  output.spellcheck = false;
  input.spellcheck = false;
  input.classList.add("input_cmd");
  output.classList.add("output_cmd");
  const init = "orlisanfan@" + nomeBrowser + ":~$";
  input.value = init;
  input.addEventListener("keydown", function (e) {
    if (
      (e.key.toUpperCase() === "BACKSPACE" &&
        this.selectionStart <= init.length) ||
      this.selectionStart < init.length
    ) {
      e.preventDefault();
    } else if (e.key.toUpperCase() == "ENTER") {
      const testo = input.value.substring(init.length, input.value.length);
      e.preventDefault();
      const out = parseTesto(testo);
      if (out != null && typeof out == "string") {
        output.textContent = out;
        Animazioni.dividiInSpanEBasta(output);
        daCancellare = true;
      }
      input.value = init;
      console.log(testo);
    } else if (daCancellare && e.key.length === 1) {
      output.textContent = "";
      Animazioni.dividiInSpanEBasta(output);
      daCancellare = false;
    }
  });
  bottoneTerminale.appendChild(input);
  bottoneTerminale.appendChild(output);
  Animazioni.dividiInSpanEBasta(output);
  Animazioni.effettoRaggiX(bottoneTerminale);
}
function togliInput() {
  if (document.querySelector(".input_cmd"))
    document.querySelector(".input_cmd").remove();
  inputCreato = false;
}
function parseTesto(testo) {
  if (testo.startsWith("cd ") || testo.startsWith("changedirectory")) {
    window.location.href =
      "project-page.html?id=" +
      testo.split(" ")[1] +
      "&lang=" +
      Traduttore.current_name;
  } else if (testo.startsWith("copy")) {
    //Da Migliorare e Tradurre
    navigator.clipboard.writeText("Ciao dall'Orlisite!");
    return "Testo Copiato con Successo";
  } else if (testo.startsWith("cl") || testo.startsWith("changelanguage")) {
    const url = new URL(window.location.href);
    if (Traduttore.languages.includes(testo.split(" ")[1])) {
      url.searchParams.set("lang", testo.split(" ")[1]);
    } else if (
      Traduttore.nomiLanguages[Traduttore.traduci(testo.split(" ")[1])]
    ) {
      url.searchParams.set(
        "lang",
        Traduttore.nomiLanguages[Traduttore.traduci(testo.split(" ")[1])],
      );
    } else {
      //Da tradurre
      return "La lingua specificata non esiste";
    }

    window.location.href = url.toString();
  }
}
