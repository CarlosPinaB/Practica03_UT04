"use strict";

class Coordinate {
  #latitude;
  #longitude;
  constructor(latitude, longitude) {
    if (!new.target) throw new InvalidAccessConstructorException();
    if (latitude === 0 || !latitude) throw new EmptyValueException("latitude");
    if (latitude === 0 || !longitude) throw new EmptyValueException("longitude");

    this.#latitude = latitude;
    this.#longitude = longitude;
  }

  //Propiedades de acceso a los atributos privados
  get latitude() {
    return this.#latitude;
  }
  set latitude(value) {
    this.#latitude = value;
  }

  get longitude() {
    return this.#longitude;
  }
  set longitude(value) {
    this.#longitude = value;
  }
}
Object.defineProperty(Coordinate.prototype, "latitude", { enumerable: true });
Object.defineProperty(Coordinate.prototype, "longitude", { enumerable: true });