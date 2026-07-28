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
let facce = /*{}*/ [];
const file = await fetch("./modello.json");
const json = await file.json();
const img = new Image();
img.src = json["texture_path"];
console.log("Esisto");
let arrayPixel = [];
let larghezza = 0;
let altezza = 0;
function findVertex(punto, altsin, altdes, bassin, basdes, pixelSize) {
  const puntoX = punto.getX() / pixelSize;
  const puntoY = punto.getY() / pixelSize;
  const puntoZ = punto.getZ() / pixelSize;
  if (puntoX == altsin.X && puntoY == altsin.Y && puntoZ == altsin.Z) {
    return "Angolo_alto_a_sinistra";
  } else if (puntoX == altdes.X && puntoY == altdes.Y && puntoZ == altdes.Z) {
    return "Angolo_alto_a_destra";
  } else if (puntoX == bassin.X && puntoY == bassin.Y && puntoZ == bassin.Z) {
    return "Angolo_basso_a_sinistra";
  } else if (puntoX == basdes.X && puntoY == basdes.Y && puntoZ == basdes.Z) {
    return "Angolo_basso_a_destra";
  } else {
    return "Non-Angolo";
  }
}
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
      if(i == array.length-1) {
        arrayPixel[indexFinale] = arrayColori;
        indexColori = 0;
        indexFinale++;
      }
    } else{
      arrayPixel[indexFinale] = arrayColori;
      arrayColori = [];
      indexColori = 0;
      indexFinale++;

      arrayColori[indexColori] = array[i];
      indexColori++;
    }
  }
  //console.log(arrayPixel[0], arrayPixel[1]);
  /* for (let i = 0; i < arrayPixel.length - 1000; i++) {
    console.log("indice: "+i+"pixel: "+arrayPixel[i]);
  }*/
  //console.log(array[1332], array[1333], array[1334], array[1335]);
  //console.log((13+larghezza*5)+arrayPixel[13+larghezza*5]);
  //console.log(trovaRettangolo(13, 5, 5, 4));

  Object.entries(json.faces).forEach(([chiave, valore], index) => {
    let indicePunti = 0;
    const punti = [];
    const u = valore.posizione_nella_texture.u;
    const v = valore.posizione_nella_texture.v;
    const uvWidth = valore.posizione_nella_texture.width;
    const uvHeight = valore.posizione_nella_texture.height;
    const alto_a_sinistra = valore.angoli.alto_a_sinistra;
    const alto_a_destra = valore.angoli.alto_a_destra;
    const basso_a_sinistra = valore.angoli.basso_a_sinistra;
    const basso_a_destra = valore.angoli.basso_a_destra;

    const asse = valore.asse;
    const pixelSize = valore.pixel_size;
    const pixelsUv = trovaRettangolo(u, v, uvWidth, uvHeight);
    console.log("🚀 ~ pixelsUv length: ", pixelsUv.length);
    console.log("Size:" +arrayPixel.length);
    const dirX = valore.direzioneX;
    const dirY = valore.direzioneY;
    console.log("Qui ci sono");
    const objJ = { Y: "X", X: "Z", Z: "X" };
    const objI = { Y: "Z", X: "Y", Z: "Y" };
    console.log(alto_a_sinistra[objI[asse]]);
    console.log(alto_a_destra[objI[asse]]);
    console.log(asse);
    console.log(chiave);

    for (
      let i = alto_a_sinistra[objI[asse]] * pixelSize;
      dirY == "sale"
        ? i <= basso_a_sinistra[objI[asse]] * pixelSize
        : i >= basso_a_sinistra[objI[asse]] * pixelSize;
      dirY == "sale" ? (i += pixelSize) : (i -= pixelSize)
    ) {
      //   console.log("Sono a i:" + i + "face:" + chiave);
      for (
        let j = alto_a_sinistra[objJ[asse]] * pixelSize;
        dirX == "sale"
          ? j <= alto_a_destra[objJ[asse]] * pixelSize
          : j >= alto_a_destra[objJ[asse]] * pixelSize;
        dirX == "sale" ? (j += pixelSize) : (j -= pixelSize)
      ) {
        //console.log("Sono a j: " + j + ", face:" + chiave);
        const uvI = Math.abs(i / pixelSize - alto_a_sinistra[objI[asse]]);
        // console.log("🚀 ~ uvI:", uvI);
        const uvJ = Math.abs(j / pixelSize - alto_a_sinistra[objJ[asse]]);
        console.log("face: "+chiave+" uvI:", uvI, "uvJ:", uvJ, "j:", j);
        console.log("uvI/8"+uvI/8)
        //CON GLI ESTREMI (Es 60, 52, 4, 12) CRASHA DI UNDEFINED!!!! é qui il problema pk se alla manica dietro destra metto uv altre es 30, 52, non crasha! 
        // console.log("🚀 ~ uvJ:", uvJ);
        // console.log(trovaStartIndex(uvWidth, uvI, uvJ));
        const pixel = pixelsUv[trovaStartIndex(uvWidth, uvI, uvJ)];
        // console.log(
        // "🚀 ~ trovaStartIndex:",
        // trovaStartIndex(uvWidth, uvI, uvJ),
        // );
        const realX = asse == "X" ? alto_a_sinistra.X*pixelSize : /*asse == "Y" ? j:*/ j;
        const realY = asse == "Y" ? alto_a_destra.Y*pixelSize : i;
        const realZ = asse == "Z" ? basso_a_sinistra.Z*pixelSize : asse == "Y" ? i : j;
        const punto = new Punto(
          realX,
          realY,
          realZ,
          "rgba(" +
            pixel[0] +
            "," +
            pixel[1] +
            "," +
            pixel[2] +
            "," +
            pixel[3] +
            ")",
          "punto_" + indicePunti + "_" + chiave,
          pixelSize,
        );
        if (
          findVertex(
            punto,
            alto_a_sinistra,
            alto_a_destra,
            basso_a_sinistra,
            basso_a_destra,
            pixelSize,
          ) == "Angolo_alto_a_sinistra"
        ) {
          console.log("Angolo sin trovato");
        }
        if (
          findVertex(
            punto,
            alto_a_sinistra,
            alto_a_destra,
            basso_a_sinistra,
            basso_a_destra,
            pixelSize,
          ) == "Angolo_alto_a_destra"
        ) {
          console.log("Angolo des trovato"); //Non lo stampa mai, per farlo stampare evo mettere <=/>= solo che poi crasha per undefined alla 147
        }
        punto.setAngolo(
          findVertex(
            punto,
            alto_a_sinistra,
            alto_a_destra,
            basso_a_sinistra,
            basso_a_destra,
            pixelSize,
          ),
        );
        /*console.log(punto);
        console.log("Sono arrivato fin qua");*/
        //   console.log("sto per addare");
        punti[indicePunti] = punto;
        indicePunti++;
      }
    }
    valore.punti = punti;
    facce[index] = valore;
  });
  Object.entries(facce).forEach(([nome, value]) => {
    console.log("Nome " + nome + " punti " + value.punti);
  });
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
console.log("Punti:" + facce);
//PARTE MOTORE 3D
let inclinazioneX = 0;
let inclinazioneY = 0;

function findX() {
  Object.values(facce).forEach((faccia) => {
    faccia.punti.forEach((punto) => {
      realFindX(punto);
    });
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
  Object.values(facce).forEach((faccia) => {
    faccia.punti.forEach((punto) => {
      realFindY(punto);
    });
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
    let yPiùAlto = null;
    let xPiùAlto = null;
    const incXRad = (inclinazioneX * Math.PI) / 180;
    const inclinazioneAbs = 1;
    const inclinazione = [+inclinazioneAbs, -inclinazioneAbs];
    const Y = dirY ? inclinazione[0] : inclinazione[1];
    const X = dirX ? inclinazione[0] : inclinazione[1];
    Object.entries(facce).forEach(([nome, faccia]) => {
      console.log("Faccia:" + nome);
   //   const angoloSinistra = faccia.punti.find((punt) =>
   //     punt.isAltoASinistra(),
   //   );
      // console.log(
      // "🚀 ~ rotate ~ Faccia:" + nome + " \nangoloSinistra:",
      // angoloSinistra,
      // );
    //  const angoloDestra = faccia.punti.find((punt) => punt.isAltoADestra());
      // console.log("🚀 ~ rotate ~ angoloDestra:", angoloDestra);
     // const asse = faccia.asse;
      console.log("Sono vivo");
      /*const seno = Math.abs(
        asse == "Y"
          ? angoloSinistra.getZ() - angoloDestra.getZ()
          : angoloSinistra.getY() - angoloDestra.getY(),
      );*/
     // console.log("Sono ancora vivo");
      //const asin = Math.asin(seno);
      faccia.punti.forEach((punto) => {
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

        if (xPiùAlto == null || xPiùAlto < punto.getX())
          xPiùAlto = punto.getX();
        if (
          yPiùAlto == null || yPiùAlto < personadallAlto
            ? punto.getZ()
            : punto.getY()
        )
          yPiùAlto = personadallAlto ? punto.getZ() : punto.getY();

        // punto.getDiv().style.transform = "rotate(" + inclinazioneX + "rad)";
      });
    });

    repaint();
  });
}
function createPoints() {
  Object.values(facce).forEach((faccia) => {
    faccia.punti.forEach((punto) => {
      const divPunto = document.createElement("div");
      divPunto.classList.add(punto.getClassName());
      sfondo.appendChild(divPunto);
      punto.setDiv(divPunto);
      renderPunto(punto);
    });
  });
}
function repaint() {
  Object.values(facce).forEach((faccia) => {
    faccia.punti.forEach((punto) => {
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
  const pixelSize = punto.getPixelSize();
  if (!personadallAlto) {
    divpunto.style.position = "absolute";
    divpunto.style.left = centroX + punto.getX() + "px";
    divpunto.style.top = centroY + -punto.getY() + "px";
    divpunto.style.width = pixelSize + "px";
    divpunto.style.height = pixelSize + "px";
    divpunto.style.backgroundColor = punto.getColor();
    divpunto.style.zIndex =
      centroZ + Math.trunc(punto.getZ()) + Math.abs(zMinima);
  } else {
    divpunto.style.position = "absolute";
    divpunto.style.left = centroX + punto.getX() + "px";
    divpunto.style.top = centroZ + -punto.getZ() + "px";
    divpunto.style.width = pixelSize + "px";
    divpunto.style.height = pixelSize + "px";
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
