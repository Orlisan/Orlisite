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
window.addEventListener("resize", scala);