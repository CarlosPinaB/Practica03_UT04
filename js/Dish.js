"use strict";

class Dish {
  #name;
  #description;
  #ingredients;
  #image;
  constructor(name, description, ingredients = [], image) {
    if (!new.target) throw new InvalidAccessConstructorException();
    if (!name) throw new EmptyValueException("name");
    this.#name = name;
    this.#description = description;
    this.#ingredients = ingredients;
    this.#image = image;
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
  get ingredients() {
    return this.#ingredients;
  }
  set ingredients(value) {
    this.#ingredients = value;
  }
  get image() {
    return this.#image;
  }
  set image(value) {
    this.#image = value;
  }
}
Object.defineProperty(Dish.prototype, "name", { enumerable: true });
Object.defineProperty(Dish.prototype, "description", { enumerable: true });
Object.defineProperty(Dish.prototype, "ingredients", { enumerable: true });
Object.defineProperty(Dish.prototype, "image", { enumerable: true });
