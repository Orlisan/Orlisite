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
const punto1 = new Punto(-60, -60, 60, "black", "punto_1");
const punto2 = new Punto(-60, -60, -60, "red", "punto_2");
const punto3 = new Punto(60, -60, 60, "black", "punto_3");
const punto4 = new Punto(60, -60, -60, "red", "punto_4");

const punto5 = new Punto(-60, 60, 60, "green", "punto_5");
const punto6 = new Punto(-60, 60, -60, "blue", "punto_6");
const punto7 = new Punto(60, 60, 60, "green", "punto_7");
const punto8 = new Punto(60, 60, -60, "blue", "punto_8");
let punti = []; // = [punto1, punto2, punto3, punto4, punto5, punto6, punto7, punto8];
let indice = 0;
for (let i = -60; i < 60; i++) {
  for (let j = -60; j < 60; j++) {
    punti[indice] = new Punto(i, j, -60, "green", "punto_" + indice);
    indice++;
    punti[indice] = new Punto(-60, i, j, "blue", "punto_"+indice);
    indice++;
    punti[indice] = new Punto(60, i, j, "red", "punto_"+indice);
    indice++;
    punti[indice] = new Punto(i, j, 60, "orange", "punto_"+indice);
    indice++;
    punti[indice] = new Punto(i, -60, j, "yellow", "punto_"+indice);
    indice++;
    punti[indice] = new Punto(i, 60, j, "black", "punto_"+indice);
    indice++;
  }
}

let inclinazioneX = 0;
let inclinazioneY = 0;
findX();

findY();
function findX() {
  punti.forEach((punto) => {
    const distanzaXZ = trovaDistanzaXZ(punto);
    //console.log("Distanza XZ: " + distanzaXZ);
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
    //console.log(inclinazioneFinale);
    punto.setOriginalInclinazioneXZ(inclinazioneFinale);
    /*const punto0XZ = new Punto(centroX, punto.getOriginalY(), -distanzaXZ);
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
      }*/
  });
}

function findY() {
  punti.forEach((punto) => {
    const distanzaYZ = trovaDistanzaYZ(punto);
    //console.log("Distanza YZ: " + distanzaYZ);
    const punto0YZ = new Punto(punto.getX(), -distanzaYZ, 0);
    /* console.log(
      "Punto 0 Y: " +
        punto0YZ.getOriginalY() +
        +", Z:" +
        punto0YZ.getOriginalZ(),
    );*/
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
    //  console.log(inclinazioneFinale);
    punto.setOriginalInclinazioneYZ(
      inclinazioneFinale,
    ); /*for (let i = 0; i < 360; i+= 0.01) {
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
      }*/
  });
}
sfondo.addEventListener("mousemove", function (e) {
  if (e.buttons === 1) {
    //console.log("Bottone Premuto");
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
    rotate();
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    inclinazioneX += 2;
    if (inclinazioneX === 360) inclinazioneX = 0;
    rotate();
  }
  if (event.key === "ArrowLeft") {
    inclinazioneX -= 2;
    if (inclinazioneX === -360) inclinazioneX = 0;
    rotate();
  }
  if (event.key === "ArrowUp") {
    inclinazioneY += 2;
    if (inclinazioneY === 360) inclinazioneY = 0;
    rotate();
  }
  if (event.key === "ArrowDown") {
    inclinazioneY -= 2;
    if (inclinazioneY === -360) inclinazioneY = 0;
    rotate();
  }
});
createPoints();
function rotate() {
  const incXRad = (inclinazioneX * Math.PI) / 180;
  //const incYRad = (inclinazioneY * Math.PI) / 180;
  //findX();
  //console.log("Inclinazione: " + inclinazioneX);
  if (inclinazioneX !== 0) {
    punti.forEach((punto) => {
      // console.log("Punto: " + punto.getClassName());
      //const inc = (direzione ? 2:-2)*Math.PI/180;
      const distanza = trovaDistanzaXZ(punto);
      const punto0 = new Punto(centroX, punto.getOriginalY(), -distanza);
      const i = inclinazioneX + punto.getOriginalInclinazioneXZ();
      //console.log(i);
      const cos = distanza * Math.cos(i * (Math.PI / 180));
      const sin = distanza * Math.sin(i * (Math.PI / 180));
      punto.setX(sin);
      punto.setZ(-cos);
    });
  }
  //findY();
  if (inclinazioneY !== 0) {
    punti.forEach((punto) => {
      const distanzaY = trovaDistanzaYZ(punto);
      const i2 = inclinazioneY + punto.getOriginalInclinazioneYZ();
      //console.log(i2);
      const cosy = distanzaY * Math.cos(i2 * (Math.PI / 180));
      const siny = distanzaY * Math.sin(i2 * (Math.PI / 180));
      punto.setZ(siny);
      punto.setY(-cosy);
      //  console.log("Y: " + punto.getY());
      //   console.log("Z: " + punto.getZ());
    });
  }
  requestAnimationFrame(() => {
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
    /*if (document.querySelector("." + punto.getClassName())) {
      sfondo.removeChild(document.querySelector("." + punto.getClassName()));
    }*/
    renderPunto(punto);
  });
}
/*console.log(
  "Dopo: " + getComputedStyle(document.querySelector(".sfondo_skin")).zIndex,
);*/
function trovaDistanzaXZ(punto) {
  const distanzaX = punto.getOriginalX(); // - puntoCentro.getX();
  const distanzaZ = punto.getOriginalZ(); // - puntoCentro.getZ();
  const distanzaY = punto.getOriginalY(); // - puntoCentro.getY();
  const risultato = Math.hypot(distanzaX, /* distanzaY, */ distanzaZ);
  return risultato;
}
function trovaDistanzaYZ(punto) {
  const distanzaX = punto.getOriginalX(); // - puntoCentro.getX();
  const distanzaZ = punto.getOriginalZ(); // - puntoCentro.getZ();
  const distanzaY = punto.getOriginalY(); // - puntoCentro.getY();
  const risultato = Math.hypot(/*distanzaX,*/ distanzaY, distanzaZ);
  return risultato;
}
function renderPunto(punto) {
  const divpunto = punto.getDiv();
  if (!personadallAlto) {
    divpunto.style.position = "absolute";
    divpunto.style.left = centroX + punto.getX() + "px";
    divpunto.style.top = centroY + punto.getY() + "px";
    divpunto.style.width = "1px";
    divpunto.style.height = "1px";
    divpunto.style.backgroundColor = punto.getColor();
    divpunto.style.zIndex =
      centroZ + Math.trunc(punto.getZ()) + Math.abs(zMinima);
    /*divpunto.style.cssText =
      "position:absolute; left: " +
      (centroX + punto.getX()) +
      "px; top: " +
      (centroY + punto.getY()) +
      "px;width:1px; height:1px; background-color:" +
      punto.getColor() +
      "; z-index:" +
      (centroZ + Math.trunc(punto.getZ()) + Math.abs(zMinima)) +
      ";";*/
  } else {
    divpunto.style.position = "absolute";
    divpunto.style.left = centroX + punto.getX() + "px";
    divpunto.style.top = centroZ + punto.getZ() + "px";
    divpunto.style.width = "1px";
    divpunto.style.height = "1px";
    divpunto.style.backgroundColor = punto.getColor();
    divpunto.style.zIndex =
      centroY + Math.trunc(punto.getY()) + Math.abs(zMinima);
    /* divpunto.style.cssText =
      "position:absolute; left: " +
      (centroX + punto.getX()) +
      "px; top: " +
      (centroZ + punto.getZ()) +
      "px;width:1px; height:1px; background-color:" +
      punto.getColor() +
      "; z-index:" +
      (centroY + Math.trunc(punto.getY()) + Math.abs(zMinima)) +
      ";";*/
  }

  // sfondo.appendChild(divpunto);
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
