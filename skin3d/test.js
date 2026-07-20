import { Punto } from "./Punto.js";
//faiQualcosaEstratto();

function faiQualcosa() {
  const punto = new Punto();
  punto.setX(3);
  console.log(punto.getX());
}
function faiQualcosaEstratto() {
  const punto = new Punto();
  extracted(punto);
  console.log(punto.getX());
}

function extracted(punto) {
  punto.setX(3);
}
const oggetto = {
  3: { 4: 6 },
  9: 2,
  5: 3,
};
Object.keys(oggetto[3]).forEach((element) => {
  console.log(oggetto[3][element]);
});
