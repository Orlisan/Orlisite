export class Punto {
  //Relative al centro dell'oggetto
  #X;
  #Y;
  #Z;
  #color;
  #className;
  #OriginalX;
  #OriginalY;
  #OriginalZ;
  #OriginalInclinazione = 0;
  constructor(x, y, z, color, className) {
    this.#X = x;
    this.#Y = y;
    this.#Z = z;
    this.#OriginalX = x;
    this.#OriginalY = y;
    this.#OriginalZ = z;
    this.#color = color;
    this.#className = className;
  }
  getX() {
    return this.#X;
  }
  getOriginalInclinazione() {
    return this.#OriginalInclinazione;
  }
  setOriginalInclinazione(newInclinazione) {
    this.#OriginalInclinazione = newInclinazione;
  } 
  getY() {
    return this.#Y;
  }
  getZ() {
    return this.#Z;
  }
  getOriginalX(){
    return this.#OriginalX;
  }
  getOriginalY() {
    return this.#OriginalY;
  }
  getOriginalZ() {
    return this.#OriginalZ;
  }
  getColor() {
    return this.#color;
  }
  getClassName() {
    return this.#className;
  }
  withX(newX) {
    return new Punto(newX, this.#Y, this.#Z);
  }
  withY(newY) {
    return new Punto(this.#X, newY, this.#Z);
  }
  withZ(newZ) {
    return new Punto(this.#X, this.#Y, newZ);
  }
  setX(newX) {
    this.#X = newX;
  }
  setY(newY) {
    this.#Y = newY;
  }
  setZ(newZ) {
    this.#Z = newZ;
  }
}
