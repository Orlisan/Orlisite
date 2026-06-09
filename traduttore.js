export let current_language = "it_it.json";
export let current_name = "it_it";
const languages = ["it_it", "fr_fr", "en_gb", "de_de", "es_es"];
let json = {};
const params = new URLSearchParams(window.location.search);
const bandiereInerentiAlleStringhe = {
  it_it: "textures/Flag_of_Italy.svg",
  fr_fr: "textures/Flag_of_France.svg",
  es_es: "textures/Flag_of_Spain.svg",
  en_gb: "textures/Flag_of_the_United_Kingdom.svg",
  de_de: "textures/Flag_of_Germany.svg",
};
if (languages.includes(params.get("lang"))) {
  current_language = params.get("lang") + ".json";
  current_name = params.get("lang");
  const langPerHTML = current_name.split("_")[0];
  document.documentElement.lang = langPerHTML;
}
await initLang();
creaBottoneLingua();
export async function initLang() {
  try {
    const file = await fetch("./lang/" + current_language);
    json = await file.json();
  } catch (errore) {
    console.error(errore);
  }
}
export function traduci(chiave) {
  try {
    if (json[chiave]) {
      return json[chiave];
    } else {
      return chiave;
    }
  } catch (errore) {
    console.error("Si è verificato il problema:", errore);
  }
}
export function creaBottoneLingua() {
  const languageButton = document.querySelector(".language_button");
  const schermo_sopra = document.querySelector(".schermo_sopra");
  const imgBandiera = document.createElement("img");
  imgBandiera.classList.add("img_bandiera");
  imgBandiera.src = bandiereInerentiAlleStringhe[current_name];
  imgBandiera.width = 60;
  imgBandiera.height = 40;
  languageButton.appendChild(imgBandiera);
  languageButton.addEventListener("click", function () {
    const chiavi = Object.keys(bandiereInerentiAlleStringhe);
    const index = chiavi.indexOf(current_name);
    if (index !== -1) {
      if (index < chiavi.length - 1) {
        current_name = chiavi[index + 1];
      } else {
        current_name = chiavi[0];
      }
      imgBandiera.src = bandiereInerentiAlleStringhe[current_name];
    }
  });
  languageButton.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set("lang", current_name);
    window.location.href = url.toString();
  });
  const tooltip = document.querySelector(".tooltip_lingua");
  tooltip.textContent = traduci("tooltip_languages");
  languageButton.addEventListener("mouseenter", function () {
    tooltip.style.transform = "translate(395px)";
  });
  languageButton.addEventListener("mouseleave", function () {
    tooltip.style.transform = "translate(0px)";
  });
  schermo_sopra.appendChild(languageButton);
}
