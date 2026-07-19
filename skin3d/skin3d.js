import { Punto } from "./Punto.js";

const distanzaDellUtente = 300;
const f = 400;
const sfondo = document.querySelector(".sfondo_skin");
let zMinima = 0;
const centroX = sfondo.clientWidth / 2;
const centroY = sfondo.clientHeight / 2;
const centroZ = 60;
let personadallAlto = false;
//DA TRASFERIRE
let punti = [];
const img = new Image();
img.src = "../textures/skin_mc.png";
console.log("Esisto");
let arrayPixel = [];
let larghezza = 0;
let altezza = 0;
img.onload = function () {
  console.log("Esisto ancora");
  larghezza = img.width;
  altezza = img.height;

  console.log(`Dimensioni del PNG: ${larghezza}x${altezza} pixel`);

  const canvas = document.createElement("canvas");
  canvas.width = larghezza;
  canvas.height = altezza;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, larghezza, altezza);
  const array = imageData.data;

  let arrayColori = [];
  let indexColori = 0;
  let indexFinale = 0;
  for (let i = 0; i < array.length; i++) {
    if (indexColori < 4) {
      arrayColori[indexColori] = array[i];
      indexColori++;
    } else {
      arrayPixel[indexFinale] = arrayColori;
      arrayColori = [];
      indexColori = 0;
      indexFinale++;

      arrayColori[indexColori] = array[i];
      indexColori++;
    }
  }
  console.log(arrayPixel[0], arrayPixel[1]);
  /* for (let i = 0; i < arrayPixel.length - 1000; i++) {
    console.log("indice: "+i+"pixel: "+arrayPixel[i]);
  }*/
  console.log(array[1332], array[1333], array[1334], array[1335]);
  //console.log((13+larghezza*5)+arrayPixel[13+larghezza*5]);
  console.log(trovaRettangolo(13, 5, 5, 4));

  let indicePunti = 0;
  for (let i = -4 * 8; i < 4 * 8; i += 8) {
    for (let j = -32; j < 32; j += 8) {
      const pixelsFacciaDavanti = trovaRettangolo(40, 8, 8, 8);
      pixelsFacciaDavanti.forEach((p) => {
        console.log(p);
      });
      console.log("Corrente index:" + trovaStartIndex(8, j, i));
      console.log(pixelsFacciaDavanti.length);
      const uvI = 4 + i / 8;
      const uvJ = 4 + j / 8;
      const pixelCorrenteFacciaDavanti =
        pixelsFacciaDavanti[trovaStartIndex(8, uvI, uvJ)];
      console.log("Pixel: " + pixelCorrenteFacciaDavanti);
      punti[indicePunti] = new Punto(
        j,
        12 * 8 - i,
        4 * 8,
        "rgba(" +
          pixelCorrenteFacciaDavanti[0] +
          "," +
          pixelCorrenteFacciaDavanti[1] +
          "," +
          pixelCorrenteFacciaDavanti[2] +
          "," +
          pixelCorrenteFacciaDavanti[3] +
          ")",
        "punto_" + indicePunti,
      );
      indicePunti++;

      const pixelsTestaSopra = trovaRettangolo(40, 0, 8, 8);
      const pixelCorrenteTestaSopra =
        pixelsTestaSopra[trovaStartIndex(8, uvI, uvJ)];
      punti[indicePunti] = new Punto(
        j,
        16 * 8,
        i+8,
        "rgba(" +
          pixelCorrenteTestaSopra[0] +
          "," +
          pixelCorrenteTestaSopra[1] +
          "," +
          pixelCorrenteTestaSopra[2] +
          "," +
          pixelCorrenteTestaSopra[3] +
          ")",
        "punto_" + indicePunti,
      );
      indicePunti++;

      const pixelsTestaSotto = trovaRettangolo(48, 0, 8, 8);
      const pixelCorrenteTestaSotto =
        pixelsTestaSotto[trovaStartIndex(8, uvI, uvJ)];
      punti[indicePunti] = new Punto(
        j,
        9 * 8,
        i+8,
        "rgba(" +
          pixelCorrenteTestaSotto[0] +
          "," +
          pixelCorrenteTestaSotto[1] +
          "," +
          pixelCorrenteTestaSotto[2] +
          "," +
          pixelCorrenteTestaSotto[3] +
          ")",
        "punto_" + indicePunti,
      );
      indicePunti++;

      const pixelsFacciaDietro = trovaRettangolo(56, 8, 8, 8);
      const pixelCorrenteFacciaDietro =
        pixelsFacciaDietro[trovaStartIndex(8, uvI, uvJ)];
      punti[indicePunti] = new Punto(
        -j-8,
        12 * 8 - i,
        -3 * 8,
        "rgba(" +
          pixelCorrenteFacciaDietro[0] +
          "," +
          pixelCorrenteFacciaDietro[1] +
          "," +
          pixelCorrenteFacciaDietro[2] +
          "," +
          pixelCorrenteFacciaDietro[3] +
          ")",
        "punto_" + indicePunti,
      );
      indicePunti++;

      const pixelsFacciaDestra = trovaRettangolo(48, 8, 8, 8);
      const pixelCorrenteFacciaDestra =
        pixelsFacciaDestra[trovaStartIndex(8, uvI, uvJ)];
      punti[indicePunti] = new Punto(
        (4-1)*8,
        12 * 8 - i,
        j+8,
        "rgba(" +
          pixelCorrenteFacciaDestra[0] +
          "," +
          pixelCorrenteFacciaDestra[1] +
          "," +
          pixelCorrenteFacciaDestra[2] +
          "," +
          pixelCorrenteFacciaDestra[3] +
          ")",
        "punto_" + indicePunti,
      );
      indicePunti++;

      const pixelsFacciaSinistra = trovaRettangolo(32, 8, 8, 8);
      const pixelCorrenteFacciaSinistra =
        pixelsFacciaSinistra[trovaStartIndex(8, uvI, uvJ)];
      punti[indicePunti] = new Punto(
        -4*8,
        12 * 8 - i,
        j+8,
        "rgba(" +
          pixelCorrenteFacciaSinistra[0] +
          "," +
          pixelCorrenteFacciaSinistra[1] +
          "," +
          pixelCorrenteFacciaSinistra[2] +
          "," +
          pixelCorrenteFacciaSinistra[3] +
          ")",
        "punto_" + indicePunti,
      );
      indicePunti++;
    }
  }
  createPoints();
};

function trovaRettangolo(x, y, width, height) {
  const realStartIndex = trovaStartIndex(larghezza, y, x);
  console.log("RealStartIndex:" + realStartIndex);
  let arrayRect = [];
  let indexPresi = 0;
  let counterX = 0;
  let counterY = 0;
  for (let i = realStartIndex; i < arrayPixel.length; i++) {
    if (counterY >= height) break;
    if (counterX < width) {
      arrayRect[indexPresi] = [...arrayPixel[i]];
      /*console.log(
        "CounterX: " +
          counterX +
          " Counter Y: " +
          counterY +
          " Index Presi: " +
          indexPresi +
          ", membro: " +
          arrayPixel[i] +
          " i: " +
          i,
      );*/
      indexPresi++;
      counterX++;
    } else {
      counterX = 0;
      counterY++;
      i = realStartIndex + larghezza * counterY - 1;
    }
  }
  return arrayRect;
}

function trovaStartIndex(larghezza, y, x) {
  return larghezza * y + x;
}

//FINE DA TRANSFERIRE
/*const puntoCentro = new Punto(centroX, centroY, centroZ, "", "");
const punto1 = new Punto(-60, -60, 60, "black", "punto_1");
const punto2 = new Punto(-60, -60, -60, "red", "punto_2");
const punto3 = new Punto(60, -60, 60, "black", "punto_3");
const punto4 = new Punto(60, -60, -60, "red", "punto_4");

const punto5 = new Punto(-60, 60, 60, "green", "punto_5");
const punto6 = new Punto(-60, 60, -60, "blue", "punto_6");
const punto7 = new Punto(60, 60, 60, "green", "punto_7");
const punto8 = new Punto(60, 60, -60, "blue", "punto_8");*/
/*  punto1,
  punto2,
  punto3,
  punto4,
  punto5,
  punto6,
  punto7,
  punto8,
];*/
/*let indice = 0;
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
  }*/
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
//PK NON VIENE MAI STAMPATO NEMENO lA SCRITTA PUNTI
console.log("Punti:" + punti);
//PARTE MOTORE 3D
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
    let dirX = 0;
    let dirY = 0;
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
  let dirX = 0;
  let dirY = 0;
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
    const inclinazioneAbs = 1;
    const inclinazione = [+inclinazioneAbs, -inclinazioneAbs];
    const Y = dirY ? inclinazione[0] : inclinazione[1];
    const X = dirX ? inclinazione[0] : inclinazione[1];
    punti.forEach((punto) => {
      let x1 = punto.getX();
      let z1 = punto.getZ();
      if (dirX !== 0) {
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
      if (dirY !== 0) {
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
    const divPunto = document.createElement("rect");
    divPunto.classList.add(punto.getClassName());
    sfondo.appendChild(divPunto);
    punto.setDiv(divPunto);
    renderPunto(punto);
  });
}
function repaint() {
  punti.forEach((punto) => {
    if (!personadallAlto) {
      if (Math.trunc(punto.getZ()) < zMinima) {
        zMinima = Math.trunc(punto.getZ());
      }
    } else {
      if (Math.trunc(punto.getY()) < zMinima) {
        zMinima = Math.trunc(punto.getY());
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
    divpunto.style.top = centroY + -punto.getY() + "px";
    divpunto.style.width = "8px";
    divpunto.style.height = "8px";
    divpunto.style.backgroundColor = punto.getColor();
    /*console.log(
      "PUNTO: " + punto.getClassName() + (centroZ + Math.trunc(punto.getZ())),
    );*/
    //Z-INDEX NULLO?
    //.log(divpunto.style.zIndex);
    //console.log("PUNTO: "+punto.getClassName()+" ZINDEX:"+(centroZ + Math.trunc(punto.getZ()) + Math.abs(zMinima)));
    divpunto.style.zIndex =
      centroZ + Math.trunc(punto.getZ()) + Math.abs(zMinima);
  } else {
    divpunto.style.position = "absolute";
    divpunto.style.left = centroX + punto.getX() + "px";
    divpunto.style.top = centroZ + -punto.getZ() + "px";
    divpunto.style.width = "8px";
    divpunto.style.height = "8px";
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
document.addEventListener("resize", function () {
  console.log("Resize Chiamato");
  centroX = sfondo.clientWidth / 2;
  centroY = sfondo.clientHeight / 2;
  repaint();
});
