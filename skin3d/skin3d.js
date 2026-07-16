import { Punto } from "./Punto.js";

const distanzaDellUtente = 300;
const f = 400;
const sfondo = document.querySelector(".sfondo_skin");
let zMinima = 0;
const centroX = sfondo.clientWidth / 2;
const centroY = sfondo.clientHeight / 2;
const centroZ = 60;
let personadallAlto = false;

const puntoCentro = new Punto(centroX, centroY, centroZ, "", "");
const punto1 = new Punto(-60, -60, 60, "black", "punto_1");
const punto2 = new Punto(-60, -60, -60, "red", "punto_2");
const punto3 = new Punto(60, -60, 60, "black", "punto_3");
const punto4 = new Punto(60, -60, -60, "red", "punto_4");

const punto5 = new Punto(-60, 60, 60, "green", "punto_5");
const punto6 = new Punto(-60, 60, -60, "blue", "punto_6");
const punto7 = new Punto(60, 60, 60, "green", "punto_7");
const punto8 = new Punto(60, 60, -60, "blue", "punto_8");
let punti = []; /*[
  punto1,
  punto2,
  punto3,
  punto4,
  punto5,
  punto6,
  punto7,
  punto8,
];*/
let indice = 0;
for (let i = -60; i <= 50; i += 10) {
  punti[indice] = new Punto(i, -60, -60, "red", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(i, 60, -60, "blue", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(i, -60, 60, "orange", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(i, 60, 60, "orangered", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(60, i, -60, "brown", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(-60, i, -60, "yellow", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(-60, i, 60, "green", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(60, i, 60, "gray", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(-60, 60, i, "black", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(-60, -60, i, "cyan", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(60, 60, i, "chocolate", "punto_" + indice);
  indice++;
  punti[indice] = new Punto(60, -60, i, "pink", "punto_" + indice);
  indice++;
}
/*
for (let i = -60; i < 60; i++) {
  for (let j = -60; j < 60; j++) {
    punti[indice] = new Punto(i, j, -60, "green", "punto_" + indice);
    indice++;
    punti[indice] = new Punto(-60, i, j, "blue", "punto_" + indice);
    indice++;
    punti[indice] = new Punto(60, i, j, "red", "punto_" + indice);
    indice++;
    punti[indice] = new Punto(i, j, 60, "orange", "punto_" + indice);
    indice++;
    punti[indice] = new Punto(i, -60, j, "yellow", "punto_" + indice);
    indice++;
    punti[indice] = new Punto(i, 60, j, "black", "punto_" + indice);
    indice++;
  }
}
*/
let inclinazioneX = 0;
let inclinazioneY = 0;
//findX();
//findY();
function findX() {
  punti.forEach((punto) => {
    realFindX(punto);
  });
}

function realFindX(punto) {
  const distanzaXZ = trovaDistanzaXZ(punto);
  const arcoseno = (Math.asin(punto.getX() / distanzaXZ) * 180) / Math.PI;
  let inclinazioneFinale = 0;
  if (arcoseno < 0) {
    if (punto.getZ() > 0) {
      inclinazioneFinale = -180 - arcoseno + 360;
    } else {
      inclinazioneFinale = arcoseno + 360;
    }
  } else {
    if (punto.getZ() > 0) {
      inclinazioneFinale = 180 - arcoseno;
    } else {
      inclinazioneFinale = arcoseno;
    }
  }
  punto.setOriginalInclinazioneXZ(inclinazioneFinale);
}

function findY() {
  punti.forEach((punto) => {
    realFindY(punto);
  });
}
sfondo.addEventListener("mousemove", function (e) {
  if (e.buttons === 1) {
    let dirX;
    let dirY;
    if (e.movementX > 0) {
      dirX = true;
      inclinazioneX += 2;
      if (inclinazioneX === 360) inclinazioneX = 0;
    } else {
      dirX = false;
      inclinazioneX -= 2;
      if (inclinazioneX === -360) inclinazioneX = 0;
    }
    if (e.movementY > 0) {
      dirY = true;
      inclinazioneY += 2;
      if (inclinazioneY === 360) inclinazioneY = 0;
    } else {
      dirY = false;
      inclinazioneY -= 2;
      if (inclinazioneY === -360) inclinazioneY = 0;
    }
    rotate(dirX, dirY);
  }
});
document.addEventListener("keydown", function (event) {
  let dirX;
  let dirY;
  if (event.key.startsWith("Arrow")) {
    if (event.key === "ArrowRight") {
      inclinazioneX += 2;
      dirX = true;
      if (inclinazioneX === 360) inclinazioneX = 0;
    }
    if (event.key === "ArrowLeft") {
      dirX = false;
      inclinazioneX -= 2;
      if (inclinazioneX === -360) inclinazioneX = 0;
    }
    if (event.key === "ArrowUp") {
      dirY = true;
      inclinazioneY += 2;
      if (inclinazioneY === 360) inclinazioneY = 0;
    }
    if (event.key === "ArrowDown") {
      dirY = false;
      inclinazioneY -= 2;
      if (inclinazioneY === -360) inclinazioneY = 0;
    }
    rotate(dirX, dirY);
  }
});
createPoints();
function realFindY(punto) {
  const distanzaYZ = trovaDistanzaYZ(punto);
  const punto0YZ = new Punto(punto.getX(), -distanzaYZ, 0);
  let incZ;
  let incY;
  const arcoseno = (Math.asin(punto.getZ() / distanzaYZ) * 180) / Math.PI;
  let inclinazioneFinale = 0;
  if (arcoseno < 0) {
    if (punto.getY() > 0) {
      inclinazioneFinale = -180 - arcoseno + 360;
    } else {
      inclinazioneFinale = arcoseno + 360;
    }
  } else {
    if (punto.getY() > 0) {
      inclinazioneFinale = 180 - arcoseno;
    } else {
      inclinazioneFinale = arcoseno;
    }
  }
  punto.setOriginalInclinazioneYZ(inclinazioneFinale);
}

function rotate(dirX, dirY) {
  requestAnimationFrame(() => {
    const incXRad = (inclinazioneX * Math.PI) / 180;
    const Y = dirY ? +2 : -2;
    const X = dirX ? +2 : -2;
    punti.forEach((punto) => {
      let x1 = punto.getX();
      let z1 = punto.getZ();
      if (inclinazioneX !== 0) {
        realFindX(punto);
        const distanza = trovaDistanzaXZ(punto);
        const punto0 = new Punto(centroX, punto.getOriginalY(), -distanza);
        const i = punto.getOriginalInclinazioneXZ() + X;
        const cos = distanza * Math.cos(i * (Math.PI / 180));
        const sin = distanza * Math.sin(i * (Math.PI / 180));
        x1 = sin;
        z1 = -cos;
      }
      const puntoRuotato = punto.withX(x1).withZ(z1);
      realFindY(puntoRuotato);
      let y2 = puntoRuotato.getY();
      let z2 = puntoRuotato.getZ();
      if (inclinazioneY !== 0) {
        const distanzaY = trovaDistanzaYZ(puntoRuotato);
        const i2 = puntoRuotato.getOriginalInclinazioneYZ() + Y;
        const cosy = distanzaY * Math.cos(i2 * (Math.PI / 180));
        const siny = distanzaY * Math.sin(i2 * (Math.PI / 180));
        z2 = siny;
        y2 = -cosy;
      }
      punto.setX(x1);
      punto.setY(y2);
      //console.log("PUNTO: "+punto.getClassName()+" Z: "+z2);
      punto.setZ(z2);
    });
    repaint();
  });
}
function createPoints() {
  punti.forEach((punto) => {
    const divPunto = document.createElement("div");
    divPunto.classList.add(punto.getClassName());
    sfondo.appendChild(divPunto);
    punto.setDiv(divPunto);
    renderPunto(punto);
  });
}
function repaint() {
  punti.forEach((punto) => {
    if (!personadallAlto) {
      if (punto.getZ() < zMinima) {
        zMinima = punto.getZ();
      }
    } else {
      if (punto.getY() < zMinima) {
        zMinima = punto.getY();
      }
    }
    renderPunto(punto);
  });
}
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
  const divpunto = punto.getDiv();
  if (!personadallAlto) {
    divpunto.style.position = "absolute";
    divpunto.style.left = centroX + punto.getX() + "px";
    divpunto.style.top = centroY + punto.getY() + "px";
    divpunto.style.width = "10px";
    divpunto.style.height = "10px";
    divpunto.style.backgroundColor = punto.getColor();
   /*console.log(
      "PUNTO: " + punto.getClassName() + (centroZ + Math.trunc(punto.getZ())),
    );*/
    //Z-INDEX NULLO?
    console.log(divpunto.style.zIndex);
    divpunto.style.zIndex =
      centroZ + Math.trunc(punto.getZ()) + Math.abs(zMinima);
  } else {
    divpunto.style.position = "absolute";
    divpunto.style.left = centroX + punto.getX() + "px";
    divpunto.style.top = centroZ + punto.getZ() + "px";
    divpunto.style.width = "10px";
    divpunto.style.height = "10px";
    divpunto.style.backgroundColor = punto.getColor();
    divpunto.style.zIndex =
      centroY + Math.trunc(punto.getY()) + Math.abs(zMinima);
  }
}
const botCamera = document.createElement("button");
botCamera.addEventListener("click", function () {
  personadallAlto = !personadallAlto;
  requestAnimationFrame(() => {
    repaint();
  });
});
botCamera.classList.add("bot_camera");
document.querySelector("body").appendChild(botCamera);
