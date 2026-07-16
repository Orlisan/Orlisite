import { Punto } from "./Punto.js";
console.log(getComputedStyle(document.querySelector(".sfondo_skin")).zIndex);
const distanzaDellUtente = 300;
const f = 400;
const sfondo = document.querySelector(".sfondo_skin");
let zMinima = 0;
const centroX = sfondo.clientWidth / 2;
const centroY = sfondo.clientHeight / 2;
const centroZ = 60;
let personadallAlto = false;
const puntoCentro = new Punto(centroX, centroY, centroZ, "", "");
const punto1 = new Punto(-60, 15, 60, "black", "punto_1");
const punto2 = new Punto(-60, -15, -60, "red", "punto_2");
const punto3 = new Punto(60, 15, 60, "black", "punto_3");
const punto4 = new Punto(60, -15, -60, "red", "punto_4");
const punti = [punto1, punto2, punto3, punto4];
let inclinazioneX = 0;
let inclinazioneY = 0;
findX();


findY();
function findX() {
  punti.forEach((punto) => {
    const distanzaXZ = trovaDistanzaXZ(punto);
    console.log("Distanza XZ: " + distanzaXZ);
    const punto0XZ = new Punto(centroX, punto.getOriginalY(), -distanzaXZ);
    console.log(
      "Punto 0 X: " +
        punto0XZ.getOriginalX() +
        +", Z:" +
        punto0XZ.getOriginalZ(),
    );
    console.log(punto.getClassName());
    for (let i = 0; i < 360; i += 0.01) {
      let incX;
      let incY;
      let incZ;
      const sinXZ = distanzaXZ * Math.sin(i * (Math.PI / 180));
      incX = sinXZ;
      const cosZ = distanzaXZ * Math.cos(i * (Math.PI / 180));
      incZ = -cosZ;

      if (
        Math.abs(incX - punto.getOriginalX()) < 0.01 &&
        Math.abs(incZ - punto.getOriginalZ()) < 0.01
      ) {
        console.log("Ci sono dentro X");
        console.log(i);
        punto.setOriginalInclinazioneXZ(i);
      }
    }
  });
}

function findY() {
  punti.forEach((punto) => {
    const distanzaYZ = trovaDistanzaYZ(punto);
    console.log("Distanza YZ: " + distanzaYZ);
    const punto0YZ = new Punto(punto.getX(), -distanzaYZ, centroZ);
    console.log(
      "Punto 0 Y: " +
        punto0YZ.getOriginalY() +
        +", Z:" +
        punto0YZ.getOriginalZ(),
    );
    let incZ;
    let incY;
    for (let i = 0; i < 360; i+= 0.01) {
      const cosZ = distanzaYZ * Math.cos(i * (Math.PI / 180));
      const sinYZ = distanzaYZ * Math.sin(i * (Math.PI / 180));
      incZ = sinYZ;
      incY = -cosZ;
      console.log("Y ang: "+i);
      console.log("CondY: "+ Math.abs(incY - punto.getY()));
      console.log("CondZ: "+ Math.abs(incZ - punto.getZ()));
      if (
        Math.abs(incY - punto.getY()) < 0.01 &&
        Math.abs(incZ - punto.getZ()) < 0.01
      ) {
        console.log("Ci sono dentro Y");
        console.log("IncY: " + i);
        punto.setOriginalInclinazioneYZ(i);
        return;
      }
    }
  });
}
sfondo.addEventListener("mousemove", function (e) {
  if (e.buttons === 1) {
    console.log("Bottone Premuto");
    if (e.movementX > 0) {
      inclinazioneX += 2;
      if (inclinazioneX === 360) inclinazioneX = 0;
    } else {
      inclinazioneX -= 2;
      if (inclinazioneX === -360) inclinazioneX = 0;
    }
    if (e.movementY > 0) {
      inclinazioneY += 2;
      if (inclinazioneY === 360) inclinazioneY = 0;
    } else {
      inclinazioneY -= 2;
      if (inclinazioneY === -360) inclinazioneY = 0;
    }
    const incXRad = (inclinazioneX * Math.PI) / 180;
    //const incYRad = (inclinazioneY * Math.PI) / 180;
    console.log("Inclinazione: " + inclinazioneX);
    punti.forEach((punto) => {
      console.log("Punto: " + punto.getClassName());
      //const inc = (direzione ? 2:-2)*Math.PI/180;
      const distanza = trovaDistanzaXZ(punto);
      const punto0 = new Punto(centroX, punto.getOriginalY(), -distanza);
      const i = inclinazioneX + punto.getOriginalInclinazioneXZ();
      console.log(i);
      const cos = distanza * Math.cos(i * (Math.PI / 180));
      const sin = distanza * Math.sin(i * (Math.PI / 180));
      punto.setX(sin);
      punto.setZ(-cos);

      findY();
      const distanzaY = trovaDistanzaYZ(punto);
      const i2 = inclinazioneY + punto.getOriginalInclinazioneYZ();
      console.log(i2);
      const cosy = distanzaY * Math.cos(i * (Math.PI / 180));
      const siny = distanzaY * Math.sin(i * (Math.PI / 180));
      punto.setZ(siny);
      punto.setY(-cosy);
      console.log("X: " + punto.getX());
      console.log("Z: " + punto.getZ());
      repaint();
    });
  }
});
repaint();
function repaint() {
  punti.forEach((punto) => {
    zMinima = 0;
    if (document.querySelector("." + punto.getClassName())) {
      sfondo.removeChild(document.querySelector("." + punto.getClassName()));
    }
    renderPunto(punto);
  });
}
console.log(
  "Dopo: " + getComputedStyle(document.querySelector(".sfondo_skin")).zIndex,
);
function trovaDistanzaXZ(punto) {
  const distanzaX = punto.getX(); // - puntoCentro.getX();
  const distanzaZ = punto.getZ(); // - puntoCentro.getZ();
  const distanzaY = punto.getY(); // - puntoCentro.getY();
  const risultato = Math.hypot(distanzaX, /* distanzaY, */ distanzaZ);
  return risultato;
}
function trovaDistanzaYZ(punto) {
  const distanzaX = punto.getX(); // - puntoCentro.getX();
  const distanzaZ = punto.getZ(); // - puntoCentro.getZ();
  const distanzaY = punto.getY(); // - puntoCentro.getY();
  const risultato = Math.hypot(/*distanzaX,*/ distanzaY, distanzaZ);
  return risultato;
}
function renderPunto(punto) {
  const divpunto = document.createElement("div");
  divpunto.classList.add(punto.getClassName());
  if (!personadallAlto) {
    if (punto.getZ() < zMinima) {
      zMinima = punto.getZ();
    }
    divpunto.style.cssText =
      "position:absolute; left: " +
      (centroX + punto.getX()) +
      "px; top: " +
      (centroY + punto.getY()) +
      "px;width:20px; height:20px; background-color:" +
      punto.getColor() +
      "; z-index:" +
      (centroZ + Math.trunc(punto.getZ()) + zMinima) +
      ";";
  } else {
    if (punto.getY() < zMinima) {
      zMinima = punto.getY();
    }
    divpunto.style.cssText =
      "position:absolute; left: " +
      (centroX + punto.getX()) +
      "px; top: " +
      (centroZ + punto.getZ()) +
      "px;width:20px; height:20px; background-color:" +
      punto.getColor() +
      "; z-index:" +
      (centroY + Math.trunc(punto.getY()) + zMinima) +
      ";";
  }

  sfondo.appendChild(divpunto);
}
const botCamera = document.createElement("button");
botCamera.addEventListener("click", function () {
  personadallAlto = !personadallAlto;
  repaint();
});
botCamera.classList.add("bot_camera");
document.querySelector("body").appendChild(botCamera);
