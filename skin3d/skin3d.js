import { Punto } from "./Punto.js";
const distanzaDellUtente = 300;
const f = 400;
const sfondo = document.querySelector(".sfondo_skin");

const centroX = sfondo.clientWidth / 2;
const centroY = sfondo.clientHeight / 2;
const centroZ = 60;
const puntoCentro = new Punto(centroX, centroY, centroZ, "", "");
const punto1 = new Punto(-60, -15, 60, "black", "punto_1");
const punto2 = new Punto(-60, -15, -60, "red", "punto_2");
const punto3 = new Punto(60, -15, 60, "black", "punto_3");
const punto4 = new Punto(60, -15, -60, "red", "punto_4");
const punti = [punto1, punto2, punto3, punto4];
let inclinazioneX = 0;
let inclinazioneY = 0;
/**
 * PROBLEMI RILEVATI
 * 1: Non funziona pk da false a tutte e due le condizioni 
 * Spero di farcela, ho paura.
 * NIENTE WEBGL O LIBRERIE ESTERNE
 */
punti.forEach((punto) => {
  const distanza = trovaDistanza(punto);
  console.log("Distanza: "+distanza);
  const punto0 = new Punto(centroX, punto.getOriginalY(), -distanza); ////Questo Z è rotto, pk da -24.ecc pk è 60-84.ecc, ma solo che è -60 la z iniziale di punto_4, non dovrebbe essre la z -84, solo che pitagora elimina il - dato che fa al quadrato
  console.log("Punto 0 X: "+punto0.getOriginalX()+", Y: "+punto0.getOriginalY()+", Z:" +punto0.getOriginalZ());
  console.log(punto.getClassName());
  for (let i = 0; i < 360; i++) {
    let incX;
    let incZ; 
    if (i <= 90 || i > 270) {
      const sin = distanza * Math.sin(i * (Math.PI / 180));
      incX = punto0.getOriginalX() - sin; 
      const versin = distanza - distanza * Math.cos(i * (Math.PI / 180));
      incZ = punto0.getOriginalZ() + versin;
    } else if (i <= 180 ) {
      const sin = distanza * Math.sin((i - 90) * (Math.PI / 180));
      const cos = distanza * Math.cos((i - 90) * (Math.PI / 180));
      incX = punto0.getOriginalX() - cos;
      incZ = punto0.getOriginalZ() + distanza + sin;
    } else if (i <= 270) {
      const sin = distanza * Math.sin((90-(i - 180)) * (Math.PI / 180));
      const cos =distanza * Math.cos((90-(i - 180)) * (Math.PI / 180));
      incX = punto0.getOriginalX() + cos;
      incZ = punto0.getOriginalZ() + distanza + sin;
    } else {
      const sin = distanza * Math.sin((90 - (i - 180 - 90)) * (Math.PI / 180));
      incX = punto0.getOriginalX() + sin;
      const versin = distanza - distanza * Math.cos((90 - (i - 180 - 90)) * (Math.PI / 180));
      incZ = punto0.getOriginalZ() + versin;
    }
    console.log("I: "+i+", incZ:" +incZ+", incX: "+incX);
    console.log(Math.abs(incX - punto.getOriginalX()+centroX) /*< 0.01*/);
    console.log( Math.abs(incZ - punto.getOriginalZ()+centroZ) /*< 0.01*/);
    if (
      Math.abs(incX - punto.getOriginalX()+centroX) < 0.01 &&
      Math.abs(incZ - punto.getOriginalZ()+centroZ) < 0.01
    ) {
      console.log("Ci sono dentro");
      punto.setOriginalInclinazione(i);
      break;
    }
  }
});
sfondo.addEventListener("mousemove", function (e) {
  if (e.buttons === 1) {
    let direzione;
    console.log("Bottone Premuto");
    if (e.movementX > 0) {
      inclinazioneX += 2;
      direzione = true;
      if (inclinazioneX === 360) inclinazioneX = 0;
    } else {
      inclinazioneX -= 2;
      direzione = false;
      if (inclinazioneX === -360) inclinazioneX = 0;
    }
    /*if (e.movementY > 0) {
      inclinazioneY += 2;
      if (inclinazioneY === 360) inclinazioneY = 0;
    } else {
      inclinazioneY -= 2;
      if (inclinazioneY === -360) inclinazioneY = 0;
    }*/
    const incXRad = (inclinazioneX * Math.PI) / 180;
    //const incYRad = (inclinazioneY * Math.PI) / 180;
    punti.forEach((punto) => {
      //const inc = (direzione ? 2:-2)*Math.PI/180;
      const distanza = trovaDistanza(punto);
      const punto0 = new Punto(
        centroX,
        punto.getOriginalY(),
        -distanza,
      );
      const i = inclinazioneX + punto.getOriginalInclinazione();
      if (i <= 90) {
        const sin = distanza * Math.sin(i * (Math.PI / 180));
        punto.setX(punto0.getOriginalX() - sin);
        const versin = distanza - distanza * Math.cos(i * (Math.PI / 180));
        punto.setZ(punto0.getOriginalZ() + versin);
      } else if (i <= 180) {
        const sin = distanza * Math.sin((i - 90) * (Math.PI / 180));
      const cos = distanza * Math.cos((i - 90) * (Math.PI / 180));
      punto.setX(punto0.getOriginalX() - cos);
      punto.setZ(punto0.getOriginalZ() + distanza + sin);
      } else if (i <= 270) {
        const sin = distanza * Math.sin((90-(i - 180)) * (Math.PI / 180));
      const cos =distanza * Math.cos((90-(i - 180)) * (Math.PI / 180));
      punto.setX(punto0.getOriginalX() + cos);
      punto.setZ(punto0.getOriginalZ() + distanza + sin);
      } else {
        const sin =
          distanza * Math.sin((90 - (i - 180 - 90)) * (Math.PI / 180));
        punto.setX(punto0.getOriginalX() + sin);
        const versin =
          distanza -
          distanza * Math.cos((90 - (i - 180 - 90)) * (Math.PI / 180));
        punto.setZ(punto0.getOriginalZ() + versin);
      }
      sfondo.removeChild(document.querySelector("." + punto.getClassName()));
      renderPunto(punto);
    });
  }
});

renderPunto(punto1);
renderPunto(punto2);
renderPunto(punto3);
renderPunto(punto4);
function trovaDistanza(punto) {
  const distanzaX = punto.getX()// - puntoCentro.getX();
  const distanzaZ = punto.getZ()// - puntoCentro.getZ();
  const distanzaY = punto.getY()// - puntoCentro.getY();
  const risultato = Math.hypot(distanzaX, /* distanzaY, */ distanzaZ);
  console.log(risultato);
  return risultato;
}
function renderPunto(punto) {
  const divpunto = document.createElement("div");
  divpunto.classList.add(punto.getClassName());
  console.log("position:absolute; left: " +
    (centroX + punto.getX()) +
    "px; top: " +
    (centroY + punto.getY()) +
    "px;width:20px; height:20px; background-color:" +
    punto.getColor() +
    "; z-index:" +
    (centroZ +punto.getZ()) +
    ";");
  divpunto.style.cssText =
    "position:absolute; left: " +
    (centroX + punto.getX()) +
    "px; top: " +
    (centroY + punto.getY()) +
    "px;width:20px; height:20px; background-color:" +
    punto.getColor() +
    "; z-index:" +
    (centroZ +punto.getZ()) +
    ";";
  sfondo.appendChild(divpunto);
}
