function scala() {
  const schermo = document.querySelector(".schermo");
  const scalaX = window.innerWidth / 1920;
  const scalaY = window.innerHeight / 1080;
  const s = Math.min(scalaX, scalaY);
  schermo.style.transform = `scale(${s})`;
  schermo.style.marginLeft = `${(window.innerWidth - 1920 * s) / 2}px`;
  schermo.style.marginTop = `${(window.innerHeight - 1080 * s) / 2}px`;
}

scala();
console.log(window.innerWidth, window.innerHeight);
window.addEventListener("resize", scala);
const barraDiRicerca = document.querySelector(".barra_di_ricerca"); 
barraDiRicerca.addEventListener("mouseenter", function() {
    barraDiRicerca.style.borderColor = "red";
})
barraDiRicerca.addEventListener("mouseleave", function() {
    barraDiRicerca.style.borderColor = "gray";
})
document.addEventListener("keydown", function(e) {
    if(e.key == "Enter" && document.activeElement == barraDiRicerca){
        const valuta = barraDiRicerca.value;
        barraDiRicerca.value = "Scrivi qualcosa. . ."
        window.location.href = "search.html?q="+valuta;
    }
})
