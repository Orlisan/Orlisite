function scala() {
  const schermo = document.querySelector(".schermo");
  const scalaX = window.innerWidth / 1920;
  const scalaY = window.innerHeight / 1080;
  const scala = Math.min(scalaX, scalaY); // mantieni proporzioni
  schermo.style.transform = `scale(${scala})`;
}

scala();
window.addEventListener("resize", scala);