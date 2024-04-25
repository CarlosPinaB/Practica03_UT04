"use strict";

class RestaurantException extends BaseException {
  constructor(fileName, lineNumber) {
    super("Error: Restaurant Exception.", fileName, lineNumber);
    this.name = "RestaurantException";
  }
}

class CoordinateRestaurantException extends RestaurantException {
  constructor(fileName, lineNumber) {
    super("Error: The method needs a Coordinate object.", fileName, lineNumber);
    this.name = "CoordinateRestaurantException";
  }
}

class Restaurant {
  #name;
  #description;
  #location;
  constructor(name, description, location) {
    if (!new.target) throw new InvalidAccessConstructorException();
    if (!name) throw new EmptyValueException("name");
    // Compruebo que la variable location es un objeto Coordinate
    if (!(location instanceof Coordinate))
      throw new CoordinateRestaurantException();
    this.#name = name;
    this.#description = description;
    this.#location = location;
  }

  //Propiedades de acceso a los atributos privados

  get name() {
    return this.#name;
  }
  set name(value) {
    if (!value) throw new EmptyValueException("name");
    this.#name = value;
  }

  get description() {
    return this.#description;
  }
  set description(value) {
    this.#description = value;
  }

  get location() {
    return this.#location;
  }
  set location(value) {
    if (!(value instanceof Coordinate))
      throw new InvalidValueException("location", value);
    this.#location = value;
  }
}
Object.defineProperty(Restaurant.prototype, "name", { enumerable: true });
Object.defineProperty(Restaurant.prototype, "description", {
  enumerable: true,
});
Object.defineProperty(Restaurant.prototype, "location", { enumerable: true });
