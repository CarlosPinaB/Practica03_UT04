class RestaurantsManagerException extends BaseException {
  constructor(fileName, lineNumber) {
    super("Error: RestaurantsManager Exception.", fileName, lineNumber);
    this.name = "RestaurantsManagerException";
  }
}
class ElementRestaurantsManagerException extends RestaurantsManagerException {
  constructor(element, fileName, lineNumber) {
    super(
      "Error: The method needs a " + element + "object.",
      fileName,
      lineNumber
    );
    this.name = "ElementRestaurantsManagerException";
  }
}
class NotFoundRestaurantsManagerException extends RestaurantsManagerException {
  constructor(element, fileName, lineNumber) {
    super("Error: Not found " + element + "object.", fileName, lineNumber);
    this.name = "NotFoundRestaurantsManagerException";
  }
}
let RestaurantsManager = (function () {
  let instantiated; //Objeto con la instancia única RestaurantsManager
  function init(name) {
    //Inicialización del Singleton
    class RestaurantsManager {
      #name;

      #categories = []; // Inicializamos con una categoria por defecto
      #allergens = []; // Inicializamos con una alergia por defecto
      #dishes = []; // Inicializamos con un plato por defecto
      #menus = []; // Inicializamos con un menu por defecto
      #restaurants = []; // Inicializamos con una categoria por defecto

      constructor(name) {
        if (!new.target) throw new InvalidAccessConstructorException();
        if (!name) throw new EmptyValueException("name");
        this.#name = name;
      }

      //Devuelve un iterator de las categorias
      get categories() {
        let nextIndex = 0;
        // referencia para habilitar el closure en el objeto
        let array = this.#categories;
        return {
          next: function () {
            return nextIndex < array.length
              ? { value: array[nextIndex++], done: false }
              : { done: true };
          },
        };
      }
      get menus() {
        let nextIndex = 0;
        // referencia para habilitar el closure en el objeto
        let array = this.#menus;
        return {
          next: function () {
            return nextIndex < array.length
              ? { value: array[nextIndex++], done: false }
              : { done: true };
          },
        };
      }
      get allergens() {
        let nextIndex = 0;
        // referencia para habilitar el closure en el objeto
        let array = this.#allergens;
        return {
          next: function () {
            return nextIndex < array.length
              ? { value: array[nextIndex++], done: false }
              : { done: true };
          },
        };
      }
      get restaurants() {
        let nextIndex = 0;
        // referencia para habilitar el closure en el objeto
        let array = this.#restaurants;
        return {
          next: function () {
            return nextIndex < array.length
              ? { value: array[nextIndex++], done: false }
              : { done: true };
          },
        };
      }
      get dishes() {
        let nextIndex = 0;
        // referencia para habilitar el closure en el objeto
        let array = this.#dishes;
        return {
          next: function () {
            return nextIndex < array.length
              ? { value: array[nextIndex++], done: false }
              : { done: true };
          },
        };
      }

      //ADDS

      // Añade una nueva categoría
      addCategory(...categories) {
        for (const category of categories) {
          //La categoría no puede ser null
          if (!category) throw new EmptyValueException("category");
          //no es un objeto Category.
          if (!(category instanceof Category))
            throw new InvalidValueException("category", category);
          // Vamos comprobando si existe una categoría y si existe lanzamos excepción
          //posicion del category
          let positionCategory = this.#categories.findIndex(
            (x) => x.name === category.name
          );
          if (positionCategory !== -1) throw new ExistException(category);
          this.#categories.push(category);
        }
        return this;
      }

      // Añade un nuevo alergeno
      addAllergen(...allergens) {
        for (const allergen of allergens) {
          //El alergeno no puede ser null
          if (!allergen) throw new EmptyValueException("allergen");
          //no es un objeto Allergen.
          if (!(allergen instanceof Allergen))
            throw new InvalidValueException("allergen", allergen);
          // Vamos comprobando si existe un alergeno y si existe lanzamos excepción
          //posicion del allergen
          let positionAllergen = this.#allergens.findIndex(
            (x) => x.name === allergen.name
          );
          if (positionAllergen !== -1) throw new ExistException(allergen);
          this.#allergens.push(allergen);
        }
        return this;
      }
      // Añade un nuevo plato
      addDish(...dishes) {
        for (const dish of dishes) {
          //El plato no puede ser null
          if (!dish) throw new EmptyValueException("dish");
          //no es un objeto Dish.
          if (!(dish instanceof Dish))
            throw new InvalidValueException("dish", dish);
          // Vamos comprobando si existe un plato y si existe lanzamos excepción
          //posicion del dish
          let positionDish = this.#dishes.findIndex(
            (x) => x.dish.name === dish.name
          );
          if (positionDish !== -1) throw new ExistException(dish);
          this.#dishes.push({ dish, categories: [], allergens: [] }); // Añadimos
          return this.#dishes.length;
          // if (positionDish !== -1) throw new ExistException(dish);
          // this.#dishes.push(dish);
        }
        return this;
      }
      // Añade un nuevo menu
      addMenu(...menus) {
        for (const menu of menus) {
          //El menu no puede ser null
          if (!menu) throw new EmptyValueException("menu");
          //no es un objeto Menu.
          if (!(menu instanceof Menu))
            throw new InvalidValueException("menu", menu);
          // Vamos comprobando si existe un menu y si existe lanzamos excepción
          //posicion del menu
          let positionMenu = this.#menus.findIndex(
            (x) => x.menu.name === menu.name
          );
          if (positionMenu !== -1) throw new ExistException(menu);
          this.#menus.push({ menu, dishes: [] }); // Añadimos la tienda sin productos
          return this.#menus.length;

          // if (positionMenu !== -1) throw new ExistException(menu);
          // this.#menus.push(menu);
        }
        return this;
      }
      // Añade un nuevo Restaurante
      addRestaurant(...restaurants) {
        for (const restaurant of restaurants) {
          //El Restaurante no puede ser null
          if (!restaurant) throw new EmptyValueException("restaurant");
          //no es un objeto Restaurante.
          if (!(restaurant instanceof Restaurant))
            throw new InvalidValueException("restaurant", restaurant);
          // Vamos comprobando si existe un Restaurante y si existe lanzamos excepción
          //posicion del restaurant
          let positionRestaurant = this.#restaurants.findIndex(
            (x) => x.name === restaurant.name
          );
          if (positionRestaurant !== -1) throw new ExistException(restaurant);
          this.#restaurants.push(restaurant);
        }
        return this;
      }

      //REMOVES

      // Elimina una categoría.
      removeCategory(...categories) {
        for (const category of categories) {
          // Verificar si el category es objeto válidos y no nulos
          if (!category) throw new EmptyValueException("category");
          if (!(category instanceof Category))
            throw new InvalidValueException("category", category);
          //posicion del category
          let positionCategory = this.#categories.findIndex(
            (x) => x.name === category.name
          );
          //Comprobar que esta registrado
          if (positionCategory === -1)
            throw new NotFoundRestaurantsManagerException(category);
          //Miramos en todos los platos el category en cuestion
          this.#dishes.forEach((dish) => {
            this.deassignCategoryToDish(dish.dish, category);
          });
          //eliminamos el category
          this.#categories.splice(positionCategory, 1);
        }
        return this;
      }
      removeAllergen(...allergens) {
        for (const allergen of allergens) {
          // Verificar si el allergen es objeto válidos y no nulos
          if (!allergen) throw new EmptyValueException("allergen");
          if (!(allergen instanceof Allergen))
            throw new InvalidValueException("allergen", allergen);
          //posicion del allergen
          let positionAllergen = this.#allergens.findIndex(
            (x) => x.name === allergen.name
          );
          //Comprobar que esta registrado
          if (positionAllergen === -1)
            throw new NotFoundRestaurantsManagerException(allergen);
          //Miramos en todos los platos el allergen en cuestion
          this.#dishes.forEach((dish) => {
            this.deassignAllergenToDish(dish, allergen);
          });
          //eliminamos el allergen
          this.#allergens.splice(positionAllergen, 1);
        }
        return this;
      }
      removeDish(...dishes) {
        for (const dish of dishes) {
          // Verificar si el dish es objeto válidos y no nulos
          if (!dish) throw new EmptyValueException("dish");
          if (!(dish instanceof Dish))
            throw new InvalidValueException("dish", dish);
          //posicion del dish
          let positionDish = this.#dishes.findIndex(
            (x) => x.dish.name === dish.name
          );
          //Comprobar que esta registrado
          if (positionDish === -1)
            throw new NotFoundRestaurantsManagerException(dish);
          //Miramos en todos los menus el dish en cuestion
          this.#menus.forEach((menu) => {
            this.deassignDishToMenu(menu, dish);
          });
          //eliminamos el dish
          this.#dishes.splice(positionDish, 1);
        }
        return this;
      }
      removeMenu(...menus) {
        for (const menu of menus) {
          // Verificar si el menu es objeto válidos y no nulos
          if (!menu) throw new EmptyValueException("menu");
          if (!(menu instanceof Menu))
            throw new InvalidValueException("menu", menu);
          //posicion del menu
          let positionMenu = this.#menus.findIndex(
            (x) => x.menu.name === menu.name
          );
          //Comprobar que esta registrado
          if (positionMenu === -1)
            throw new NotFoundRestaurantsManagerException(menu);
          //Miramos en todos los restaurantes el menu en cuestion
          this.#restaurants.forEach((restaurant) => {
            this.deassignMenuToRestaurant(restaurant, menu);
          });
          //eliminamos el menu
          this.#menus.splice(positionMenu, 1);
        }
        return this;
      }
      removeRestaurant(...restaurants) {
        for (const restaurant of restaurants) {
          // Verificar si la categoría y el plato son objetos válidos y no nulos
          if (!restaurant) {
            throw new EmptyValueException("restaurant");
          }
          let positionRestaurant = this.#restaurants.findIndex(
            (x) => x.name === restaurant.name
          );
          if (positionRestaurant === -1)
            throw new NotFoundRestaurantsManagerException(restaurant);
          //Eliminar restaurant
          this.#restaurants.splice(positionRestaurant, 1);
        }
        return this;
      }
      //ASSIGNS
      assignCategoryToDish(dish, ...categories) {
        // Verificar si la categoría y el plato son objetos válidos y no nulos
        for (const category of categories) {
          if (!category) throw new EmptyValueException("category");
          if (!dish) throw new EmptyValueException("dish");
          // comprobamos que la categoria sea un objeto Category y que plato es un objeto Dish
          if (!(category instanceof Category))
            throw new ElementRestaurantsManagerException(category);
          if (!(dish instanceof Dish))
            throw new ElementRestaurantsManagerException(dish);
          // Comprobamos si la categoria y el plato existe
          if (
            this.#categories.findIndex((x) => x.name === category.name) === -1
          ) {
            this.addCategory(category);
          }
          if (this.#dishes.findIndex((x) => x.dish.name === dish.name) === -1) {
            //no lo ha encontrado
            this.addDish(dish);
          }
          let position = this.#dishes.findIndex(
            (x) => x.dish.name === dish.name
          ); //posicion del plato
          this.#dishes[position].categories.push(category); //añadir a la categoria al plato
        }
        // Retornar la instancia de RestaurantsManager para encadenamiento de métodos
        return this;
      }
      assignAllergenToDish(dish, ...allergens) {
        for (const allergen of allergens) {
          // Verificar si el alergeno y el plato son objetos válidos y no nulos
          if (!allergen) throw new EmptyValueException("allergen");
          if (!dish) throw new EmptyValueException("dish");
          // comprobamos que el alergeno sea un objeto Category y que plato es un objeto Dish
          if (!(allergen instanceof Allergen))
            throw new ElementRestaurantsManagerException(allergen);
          if (!(dish instanceof Dish))
            throw new ElementRestaurantsManagerException(dish);

          // Comprobamos si el alergeno y el plato existe
          if (
            this.#allergens.findIndex((x) => x.name === allergen.name) === -1
          ) {
            this.addAllergen(allergen);
          }
          if (this.#dishes.findIndex((x) => x.dish.name === dish.name) === -1) {
            this.addDish(dish);
          }
          let position = this.#dishes.findIndex(
            (x) => x.dish.name === dish.name
          ); //posicion del plato
          this.#dishes[position].allergens.push(allergen); //añadir el alergeno al plato
        }
        // Retornar la instancia de RestaurantsManager para encadenamiento de métodos
        return this;
      }
      assignDishToMenu(menu, ...dishes) {
        // Verificar si la categoría y el plato son objetos válidos y no nulos
        for (const dish of dishes) {
          if (!dish) throw new EmptyValueException("dish");
          if (!menu) throw new EmptyValueException("menu");
          // comprobamos que la categoria sea un objeto Category y que plato es un objeto Dish
          if (!(dish instanceof Dish))
            throw new ElementRestaurantsManagerException(dish);
          if (!(menu instanceof Menu))
            throw new ElementRestaurantsManagerException(menu);

          // Comprobamos si la categoria y el plato existe
          if (this.#dishes.findIndex((x) => x.dish.name === dish.name) === -1) {
            this.addDish(dish);
          }
          if (this.#menus.findIndex((x) => x.menu.name === menu.name) === -1) {
            this.addMenu(menu);
          }
          let position = this.#menus.findIndex(
            (x) => x.menu.name === menu.name
          ); //posicion del menu
          this.#menus[position].dishes.push(dish); //añadir a la categoria al plato
        }
        // Retornar la instancia de RestaurantsManager para encadenamiento de métodos
        return this;
      }

      //DEASSIGNS
      deassignCategoryToDish(dish, ...categories) {
        for (const category of categories) {
          // Verificar si la categoría y el plato son objetos válidos y no nulos
          if (!category) throw new EmptyValueException("category");
          if (!dish) throw new EmptyValueException("dish");
          //posicion del plato
          let positionDish = this.#dishes.findIndex(
            (x) => x.dish.name === dish.name
          );
          // Verificar si estan registrado
          if (
            this.#categories.findIndex((x) => x.name === category.name) === -1
          )
            throw new NotFoundRestaurantsManagerException(category);
          //posicion de la categoria en el plato
          let positionCategoryInDish = this.#dishes[
            positionDish
          ].categories.findIndex((x) => x.name === category.name);
          // Eliminar la categoría del plato
          if (positionDish !== -1 && positionCategoryInDish !== -1) {
            this.#dishes[positionDish].categories.splice(
              positionCategoryInDish,
              1
            );
          }
        }
        return this;
      }
      deassignAllergenToDish(dish, ...allergens) {
        for (const allergen of allergens) {
          // Verificar si la categoría y el plato son objetos válidos y no nulos
          if (!allergen) throw new EmptyValueException("allergen");
          if (!dish) throw new EmptyValueException("dish");
          //posicion del plato
          let positionDish = this.#dishes.findIndex(
            (x) => x.dish.name === dish.name
          );
          // Verificar si estan registrado
          if (this.#allergens.findIndex((x) => x.name === allergen.name) === -1)
            throw new NotFoundRestaurantsManagerException(allergen);
          if (positionDish !== -1) {
            //posicion del alergeno en el plato
            let positionAllergenInDish = this.#dishes[
              positionDish
            ].allergens.findIndex((x) => x.name === allergen.name);
            // Eliminar la alergeno del plato
            if (positionAllergenInDish !== -1) {
              this.#dishes[positionDish].allergens.splice(
                positionAllergenInDish,
                1
              );
            }
          }
        }
        return this;
      }
      deassignDishToMenu(menu, ...dishes) {
        for (const dish of dishes) {
          // Verificar si la categoría y el plato son objetos válidos y no nulos
          if (!dish) throw new EmptyValueException("dish");
          if (!menu) throw new EmptyValueException("menu");
          //posicion del menu
          let positionMenu = this.#menus.findIndex(
            (x) => x.menu.name === menu.name
          );
          // Verificar si estan registrado
          if (this.#dishes.findIndex((x) => x.dish.name === dish.name) === -1)
            throw new NotFoundRestaurantsManagerException(dish);
          if (positionMenu === -1)
            throw new NotFoundRestaurantsManagerException(menu);
          //posicion del plato en el menu
          let positionDishInMenu = this.#menus[positionMenu].dishes.findIndex(
            (x) => x.name === dish.name
          );
          // Si no existe
          if (positionDishInMenu === -1)
            throw new NotFoundRestaurantsManagerException(dish);
          // Eliminar el plato del menu
          this.#menus[positionMenu].dishes.splice(positionDishInMenu, 1);
        }
        return this;
      }
      //Metodo extra para designar menu del restaurante
      deassignMenuToRestaurant(restaurant, ...menus) {
        for (const menu of menus) {
          // Verificar si la categoría y el plato son objetos válidos y no nulos
          if (!menu) throw new EmptyValueException("menu");
          if (!restaurant) throw new EmptyValueException("restaurant");
          //posicion del restaurante
          let positionRestaurant = this.#restaurants.findIndex(
            (x) => x.name === restaurant.name
          );
          // Verificar si estan registrado
          if (this.#menus.findIndex((x) => x.name === menu.name) === -1)
            throw new NotFoundRestaurantsManagerException(menu);
          if (positionRestaurant === -1)
            throw new NotFoundRestaurantsManagerException(restaurant);
          //posicion del menu en el restaurante
          let positionMenuInRestaurant = this.#restaurants[
            positionRestaurant
          ].menus.findIndex((x) => x.name === menu.name);
          // Si no existe
          if (positionMenuInRestaurant === -1)
            throw new NotFoundRestaurantsManagerException(menu);
          // Eliminar el menu del restaurante
          this.#restaurants[positionRestaurant].menus.splice(
            positionMenuInRestaurant,
            1
          );
        }
        return this;
      }

      //INTERCAMBIO DE DOS PLATOS EN EL MENU(POR POSICION)
      changeDishesPositionsInMenu(menu, dish1, dish2) {
        // Verificar si los platos y el menú son objetos válidos y no nulos
        if (!dish1 || !dish2) throw new EmptyValueException("dish1 or dish2");

        if (!menu) throw new EmptyValueException("menu");

        // Verificar si los platos existen en el menú
        let positionMenu = this.#menus.findIndex((x) => x.name === menu.name);
        if (positionMenu === -1) {
          throw new NotFoundRestaurantsManagerException(menu);
        }
        let menuDishes = this.#menus[positionMenu].dishes;
        let positionDish1 = menuDishes.findIndex((x) => x.name === dish1.name);
        let positionDish2 = menuDishes.findIndex((x) => x.name === dish2.name);

        if (positionDish1 === -1 || positionDish2 === -1) {
          throw new NotFoundRestaurantsManagerException(
            "One or both of the dishes are not found in the menu."
          );
        }
        // Intercambiar las posiciones de los platos
        let temp = menuDishes[positionDish1];
        menuDishes[positionDish1] = menuDishes[positionDish2];
        menuDishes[positionDish2] = temp;

        // Retornar this para permitir encadenamiento
        return this;
      }
      //GETDISHES
      getDishesInCategory(category, ordenacion) {
        // Verificar si la categoria es objeto válido y no nulo
        if (!category) throw new EmptyValueException("category");
        // Verificar si esta registrado
        if (this.#categories.findIndex((x) => x.name === category.name) === -1)
          throw new NotFoundRestaurantsManagerException(category);

        // referencia para habilitar el closure en el objeto
        let dishesInCategory = this.#dishes.filter((dishObject) => dishObject.categories.includes(category)).map((dishObject)=>dishObject.dish);
        if(ordenacion != null){
          if (typeof ordenacion !== 'function') {
            throw new Error('La función proporcionada no es una función.');
          }
          if (ordenacion.length !== 2) {
            throw new Error('La función de comparación debe aceptar exactamente dos parámetros.');
          }
          
          dishesInCategory.sort(ordenacion);
        }
        let nextIndex = 0;
        let array = dishesInCategory;
        return {
          next: function () {
            return nextIndex < array.length
              ? { value: array[nextIndex++], done: false }
              : { done: true };
          },
        };
      }

      getDishesWithAllergen(allergen, ordenacion) {
        // Verificar si la categoria es objeto válido y no nulo
        if (!allergen) throw new EmptyValueException("allergen");
        // Verificar si esta registrado
        if (this.#allergens.findIndex((x) => x.name === allergen.name) === -1)
          throw new NotFoundRestaurantsManagerException(allergen);
        // referencia para habilitar el closure en el objeto
        let dishesWithAllergen = this.#dishes.filter((dishObject) => dishObject.allergens.includes(allergen)).map((dishObject)=>dishObject.dish);
        if(ordenacion != null){
          if (typeof ordenacion !== 'function') {
            throw new Error('La función proporcionada no es una función.');
          }
          if (ordenacion.length !== 2) {
            throw new Error('La función de comparación debe aceptar exactamente dos parámetros.');
          }
          
          dishesWithAllergen.sort(ordenacion);
        }
        let nextIndex = 0;
        let array = dishesWithAllergen;
        return {
          next: function () {
            return nextIndex < array.length
              ? { value: array[nextIndex++], done: false }
              : { done: true };
          },
        };
      }
      //FIND
      findDishes(callback, ordenacion) {
        let findDishes = this.#dishes.filter((dishObj) => callback(dishObj.dish));
        if(ordenacion != null){
          if (typeof ordenacion !== 'function') {
            throw new Error('La función proporcionada no es una función.');
          }
          if (ordenacion.length !== 2) {
            throw new Error('La función de comparación debe aceptar exactamente dos parámetros.');
          }
          findDishes.sort(ordenacion);
        }
        let nextIndex = 0;
        let array = findDishes;
        return {
          next: function () {
            return nextIndex < array.length
              ? { value: array[nextIndex++], done: false }
              : { done: true };
          },
        };
      }
      //CREATES
      // Crea un nuevo Plato
      createDish(name, description, ingredients = [], image) {
        let dish;
        let position = this.#dishes.findIndex((x) => x.dish.name === name);
        // Comprobamos si la categoria y el plato existe
        if (position === -1) {
          dish = new Dish(name, description, (ingredients = []), image);
        } else {
          dish = this.#dishes[position];
        }
        return dish;
      }
      // Crea un nuevo Menu
      createMenu(name, description) {
        let menu;
        let position = this.#menus.findIndex((x) => x.menu.name === name);
        // Comprobamos si la categoria y el plato existe
        if (position === -1) {
          menu = new Menu(name, description);
        } else {
          menu = this.#menus[position];
        }
        return menu;
      }
      // Crea un nuevo Alergeno
      createAllergen(name, description) {
        let allergen;
        let position = this.#allergens.findIndex((x) => x.name === name);
        // Comprobamos si la categoria y el plato existe
        if (position === -1) {
          allergen = new Allergen(name, description);
        } else {
          allergen = this.#allergens[position];
        }
        return allergen;
      }
      // Crea una nueva Categoria
      createCategory(name, description) {
        let category;
        let position = this.#categories.findIndex((x) => x.name === name);
        // Comprobamos si la categoria y el plato existe
        if (position === -1) {
          category = new Category(name, description);
        } else {
          category = this.#categories[position];
        }
        return category;
      }
      // Crea un nuevo Restaurante
      createRestaurant(name, description, location) {
        let restaurant;
        let position = this.#restaurants.findIndex((x) => x.name === name);
        // Comprobamos si la categoria y el plato existe
        if (position === -1) {
          restaurant = new Restaurant(name, description, location);
        } else {
          restaurant = this.#restaurants[position];
        }
        return restaurant;
      }
    }
    Object.defineProperty(RestaurantsManager.prototype, "name ", {
      enumerable: true,
    });
    Object.defineProperty(RestaurantsManager.prototype, "categories", {
      enumerable: true,
    });
    Object.defineProperty(RestaurantsManager.prototype, "menus", {
      enumerable: true,
    });
    Object.defineProperty(RestaurantsManager.prototype, "dishes", {
      enumerable: true,
    });
    Object.defineProperty(RestaurantsManager.prototype, "allergens", {
      enumerable: true,
    });
    Object.defineProperty(RestaurantsManager.prototype, "restaurants", {
      enumerable: true,
    });
    let sh = new RestaurantsManager(name); // Congelamos el objeto StoreHouse para que sea una instancia única.
    Object.freeze(sh);
    return sh;
  } // Fin inicialización del Singleton
  return {
    //Devuelve un objeto con el método getInstance
    getInstance: function (name) {
      if (!instantiated) {
        //Si la variable instantiated es undefined, priemera ejecución, ejecuta init.
        instantiated = init(name); //instantiated contiene el objeto único
      }
      return instantiated; //Si ya está asignado devuelve la asignación.
    },
  };
})();
