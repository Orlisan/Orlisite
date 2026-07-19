export let punti = [];

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
        i,
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
      i = realStartIndex + larghezza * counterY -1;
    }
  }
  return arrayRect;
}

function trovaStartIndex(larghezza, y, x) {
  return larghezza * y + x;
}