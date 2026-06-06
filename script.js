/*function scala() {
  const schermo = document.querySelector(".schermo");
  const scalaX = window.innerWidth / 1920;
  const scalaY = window.innerHeight / 1080;
  const s = Math.min(scalaX, scalaY);
  schermo.style.transform = `scale(${s})`;
  schermo.style.marginLeft = `${(window.innerWidth - 1920 * s) / 2}px`;
  schermo.style.marginTop = `${(window.innerHeight - 1080 * s) / 2}px`;
}

scala();*/
//console.log(window.innerWidth, window.innerHeight);
//window.addEventListener("resize", scala);
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
animaFreccia();
modsDiMinecraft.addEventListener("mouseenter", function () {
  isInside = true;
});
modsDiMinecraft.addEventListener("mouseleave", function () {
  isInside = false;
});
function animaFreccia() {
    const animazione = setInterval(function() {
        if(isInside && gradi <= 180) {
            freccia.style.transform = "rotate(" + gradi + "deg)";
            gradi++;
        }else if(!isInside && gradi >= 0) {
            freccia.style.transform = "rotate(" + gradi + "deg)";
            gradi--;
        }
    }, 5);
}
