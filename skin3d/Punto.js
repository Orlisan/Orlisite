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
  #OriginalInclinazioneXZ = 0;
  #OriginalInclinazioneYZ = 0;
  #Div;
  #DistanzaXZ;
  #DistanzaYZ;
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
  setDiv(newDiv) {
    this.#Div = newDiv;
  }
  getDiv() {
    return this.#Div;
  }
  setDistanzaYZ(newYZ) {
    this.#DistanzaYZ = newYZ;
  }
  getDistanzaYZ() {
    return this.#DistanzaYZ;
  }
  setDistanzaXZ(newXZ) {
    this.#DistanzaXZ = newXZ;
  }
  getDistanzaXZ() {
    return this.#DistanzaXZ;
  }
  getOriginalInclinazioneXZ() {
    return this.#OriginalInclinazioneXZ;
  }
  setOriginalInclinazioneXZ(newInclinazione) {
    this.#OriginalInclinazioneXZ = newInclinazione;
  }
  getOriginalInclinazioneYZ() {
    return this.#OriginalInclinazioneYZ;
  }
  setOriginalInclinazioneYZ(newInclinazione) {
    this.#OriginalInclinazioneYZ = newInclinazione;
  }
  getY() {
    return this.#Y;
  }
  getZ() {
    return this.#Z;
  }
  getOriginalX() {
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
    const punto = new Punto(
      newX,
      this.#Y,
      this.#Z,
      this.#color,
      this.#className,
    );
    punto.setOriginalInclinazioneXZ(this.#OriginalInclinazioneXZ);
    punto.setOriginalInclinazioneYZ(this.#OriginalInclinazioneYZ);
    punto.setDiv(this.#Div);
    punto.setDistanzaXZ(this.#DistanzaXZ);
    punto.setDistanzaYZ(this.#DistanzaYZ);
    return punto;
  }
  withY(newY) {
    const punto = new Punto(
      this.#X,
      newY,
      this.#Z,
      this.#color,
      this.#className,
    );
    punto.setOriginalInclinazioneXZ(this.#OriginalInclinazioneXZ);
    punto.setOriginalInclinazioneYZ(this.#OriginalInclinazioneYZ);
    punto.setDiv(this.#Div);
    punto.setDistanzaXZ(this.#DistanzaXZ);
    punto.setDistanzaYZ(this.#DistanzaYZ);
    return punto;
  }
  withZ(newZ) {
    const punto = new Punto(
      this.#X,
      this.#Y,
      newZ,
      this.#color,
      this.#className,
    );
    punto.setOriginalInclinazioneXZ(this.#OriginalInclinazioneXZ);
    punto.setOriginalInclinazioneYZ(this.#OriginalInclinazioneYZ);
    punto.setDiv(this.#Div);
    punto.setDistanzaXZ(this.#DistanzaXZ);
    punto.setDistanzaYZ(this.#DistanzaYZ);
    return punto;
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
