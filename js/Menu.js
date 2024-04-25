"use strict";

class Menu {
  #name;
  #description;
  constructor(name, description) {
    if (!new.target) throw new InvalidAccessConstructorException();
    if (!name) throw new EmptyValueException("name");
    this.#name = name;
    this.#description = description;
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
}
Object.defineProperty(Menu.prototype, "name", { enumerable: true });
Object.defineProperty(Menu.prototype, "description", { enumerable: true });