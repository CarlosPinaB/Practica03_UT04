"use strict";
//Importamos los objetos que necesitamos
function testRestaurant() {

  
  console.log("");
  console.log("-----------------------------");
  console.log("   ***RestaurantManager***")
  console.log("-----------------------------");
  console.log("");

  let restMan = RestaurantsManager.getInstance("PineappleRestaurant");
  console.log(restMan);
  console.log("Creamos otro restaurante con otro nombre para comprobar si se mantiene el mismo de antes");
  let restMan2 = RestaurantsManager.getInstance("BarbaRestaurant");
  console.log(restMan2);
  console.log("Categorias del RestaurantsManager");
  let categories = restMan.categories;
  let category = categories.next();
  while (!category.done) { // Mientras la propiedad "done" no es true.
    console.log(category.value);
    category = categories.next();
  }
  console.log("");
  console.log("***Comprobando clase Coords***");
  let coords1 = new Coordinate(3.2, 43);
  console.log(coords1);
  console.log("Expepciones:");
  try {
    let coords2 = Coordinate(2, 3);
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let coords2 = new Coordinate(2);
  } catch (error) {
    console.log(error.toString());
  }
  try {
    let coords2 = new Coordinate();
  } catch (error) {
    console.log(error.toString());
  }
  console.log("");

  console.log("");
  console.log("***Category***");
  let cat1 = restMan.createCategory("Pescados", "Pescado");
  let cat2 = restMan.createCategory("Carnes", "Carne");
  let cat3 = restMan.createCategory("Verduras", "Verdura");
  console.log(cat1);
  console.log(cat2);
  console.log(cat3);
  console.log("EXCEPCIONES:");

  console.log("- No invocando con new:");
  try {
    let cat4 = Category(2, 3);
  } catch (error) {
    console.log(error.toString());
  }
  console.log("- Creando un ojeto vacio:");
  try {
    let cat5 = restMan.createCategory();
  } catch (error) {
    console.log(error.toString());
  }
  console.log("");
  console.log("");
  console.log("***Allergen***");
  let all1 = restMan.createAllergen("Frutas", "Fruta");
  let all2 = restMan.createAllergen("Lacteos", "Lacteo");
  let all3 = restMan.createAllergen("Huevos", "Huevo");
  console.log(all1);
  console.log(all2);
  console.log(all3);

  console.log("EXCEPCIONES:");
  console.log("- No invocando con new:");
  try {
    let all4 = Allergen(2, 3);
  } catch (error) {
    console.log(error.toString());
  }
  console.log("- Creando un ojeto vacio:");
  try {
    let all5 = restMan.createAllergen();
  } catch (error) {
    console.log(error.toString());
  }

  console.log("");
  
  console.log("");

  console.log("***Platos***");
  let dish1 = restMan.createDish("Arroz", "Arroz frito con verduras", ["Verduras"]);
  let dish5 = restMan.createDish("Arroz", "Arroz frito con verduras", ["Verduras"]);
  let dish2 = restMan.createDish("Patatas", "Patatas Fritas");
  let dish3 = restMan.createDish("Salmon", "Salmon a lo noruego", [
    "Salmon",
    "Patatas",
    "Ensalada",
  ]);
  let dish4 = restMan.createDish("Ternera", "Ternera a lo americano", [
    "Ternera",
    "Patatas",
    "Salsa de algo",
  ]);
  console.log(dish1);
  console.log(dish2);
  console.log(dish3);
  console.log(dish4);
  console.log(dish5);

  console.log("");
  console.log("Expepciones:");
  console.log("- Creando un ojeto vacio:");
  try {
    let dish5 = restMan.createDish();
  } catch (error) {
    console.log(error.toString());
  }
  console.log("- No invocando con new:");
  try {
    let dish1 = Dish("Patatas", "Patatas Fritas");
  } catch (error) {
    console.log(error.toString());
  }
  console.log("- Creando un ojeto con parametros vacios:");
  try {
    let dish1 = restMan.createDish("", "", "");
  } catch (error) {
    console.log(error.toString());
  }
  console.log("");
  console.log("");
  
  console.log("***Menus***");
  let menu1 = restMan.createMenu("Fernando Torres", "Menu para niños");
  let menu2 = restMan.createMenu("Koke Resurrecion", "Menu para la resaca");
  let menu3 = restMan.createMenu("Griezzman", "Menu frances");
  let menu4 = restMan.createMenu("Simeone", "Menu Argentino");

  console.log(menu1);
  console.log(menu2);
  console.log(menu3);
  console.log(menu4);

  console.log("");
  console.log("Expepciones:");
  console.log("- Creando un ojeto vacio:");
  try {
    let menu4 = restMan.createMenu();
  } catch (error) {
    console.log(error.toString());
  }
  console.log("- No invocando con new:");
  try {
    let menu1 = Menu("Patatas", "Patatas Fritas");
  } catch (error) {
    console.log(error.toString());
  }
  console.log("- Creando un ojeto con parametros vacios:");
  try {
    let Menu1 = restMan.createMenu("", "");
  } catch (error) {
    console.log(error.toString());
  }
  console.log("");
  console.log("");
  
  console.log("***Restaurant***");
  let rest1 = restMan.createRestaurant(
    "PepeRestaurant",
    "4 estrellas",
    new Coordinate(143, 1542)
  );

  console.log(rest1);
  console.log("Expepciones:");
  console.log("- No invocando con new:");
  try {
    let rest3 = Restaurant(
      "MikiRestaurant",
      "2 estrellas",
      new Coordinate(143, 15423.2)
    );
  } catch (error) {
    console.log(error.toString());
  }
  console.log(
    "- Llamando a rest2 que no se puede acceder por que se declara mas tarde :"
  );
  try {
    let x;
    rest2.name = x;
  } catch (error) {
    console.log(error.toString());
  }

  console.log("- Poniendo mal las coordenadas no llamando a su clase :");

  try {
    let rest4 = restMan.createRestaurant("MikiRestaurant", "2 estrellas", (143, 15423.2));
  } catch (error) {
    console.log(error.toString());
  }
  let rest2 = restMan.createRestaurant(
    "RomanRestaurant",
    "2 estrellas",
    new Coordinate(143, 1542)
  );
  let rest3 = restMan.createRestaurant(
    "ManzanaresRestaurant",
    "5 estrellas",
    new Coordinate(143, 1542)
  );
  console.log(rest2);
  console.log(rest3);

  console.log("***Metodos categorias***");
  console.log("Añadimos categorias");
  restMan.addCategory(cat1);
  restMan.addCategory(cat2);
  restMan.addCategory(cat3);
  console.log("Eliminamos la categoria cat2");
  let categories1 = restMan.categories;
  let category1 = categories1.next();
  restMan.removeCategory(cat2);
  while (!category1.done) { // Mientras la propiedad "done" no es true.
    console.log(category1.value);
    category1 = categories1.next();
  }
  console.log("");
  console.log("***Metodos Alergias***");
  console.log("Añadimos Alergias");
  restMan.addAllergen(all1);
  restMan.addAllergen(all2);
  restMan.addAllergen(all3);
  console.log("Eliminamos eL alergeno all2");
  restMan.removeAllergen(all2);
  let allergens1 = restMan.allergens;
  let allergen1 = allergens1.next();
  while (!allergen1.done) { // Mientras la propiedad "done" no es true.
    console.log(allergen1.value);
    allergen1 = allergens1.next();
  }
  console.log("");
  console.log("***Metodos Platos***");
  console.log("Añadimos Platos");
  restMan.addDish(dish1);
  restMan.addDish(dish2);
  restMan.addDish(dish3);
  restMan.addDish(dish4);
  console.log("Eliminamos eL plato dish3");
  restMan.removeDish(dish3);
  let platos1 = restMan.dishes;
  let plato1 = platos1.next();
  while (!plato1.done) { // Mientras la propiedad "done" no es true.
    console.log(plato1.value);
    plato1 = platos1.next();
  }
  console.log("");
  console.log("***Metodos Menus***");
  console.log("Añadimos Menus");
  restMan.addMenu(menu1);
  restMan.addMenu(menu2);
  restMan.addMenu(menu3);
  restMan.addMenu(menu4);
  console.log("Eliminamos eL menu dish3");
  restMan.removeMenu(menu3);
  let menuses1 = restMan.menus;
  let menuu1 = menuses1.next();
  while (!menuu1.done) { // Mientras la propiedad "done" no es true.
    console.log(menuu1.value);
    menuu1 = menuses1.next();
  }
  console.log("");
  console.log("***Metodos Restaurant***");
  console.log("Añadimos restaurantes");
  restMan.addRestaurant(rest1);
  restMan.addRestaurant(rest2);
  restMan.addRestaurant(rest3);
  console.log("Eliminamos eL restaurante dish3");
  restMan.removeRestaurant(rest2);
  let restaurants1 = restMan.restaurants;
  let restaurant1 = restaurants1.next();
  while (!restaurant1.done) { // Mientras la propiedad "done" no es true.
    console.log(restaurant1.value);
    restaurant1 = restaurants1.next();
  }
  console.log("");
  console.log("***Metodos Asignar***");
  
  console.log("");
  console.log("Asigna categoria a un plato");
  restMan.assignCategoryToDish(dish1, cat3, cat1);
  restMan.assignCategoryToDish(dish3, cat3, cat1);
  let platos2 = restMan.dishes;
  let plato2 = platos2.next();
  while (!plato2.done) { // Mientras la propiedad "done" no es true.
    console.log(plato2.value);
    plato2 = platos2.next();
  }
  console.log("");
  console.log("Asigna alergeno a un plato");
  restMan.assignAllergenToDish(dish1, all3, all1);
  restMan.assignAllergenToDish(dish1, all3, all1);

  let platos3 = restMan.dishes;
  let plato3 = platos3.next();
  while (!plato3.done) { // Mientras la propiedad "done" no es true.
    console.log(plato3.value);
    plato3 = platos3.next();
  }
  console.log("");

  console.log("Asigna platos a un menu");
  restMan.assignDishToMenu(menu1, dish1, dish3);
  let menuses2 = restMan.menus;
  let menuu2 = menuses2.next();
  while (!menuu2.done) { // Mientras la propiedad "done" no es true.
    console.log(menuu2.value);
    menuu2 = menuses2.next();
  }
  console.log("");
  console.log("***Metodos DESasignar***");
  
  console.log("");
  console.log("DESasignar categoria a un plato");
  restMan.deassignCategoryToDish(dish1, cat1);
  let platos2d = restMan.dishes;
  let plato2d = platos2d.next();
  while (!plato2d.done) { // Mientras la propiedad "done" no es true.
    console.log(plato2d.value);
    plato2d = platos2d.next();
  }
  console.log("");
  console.log("DESasignar alergeno a un plato");
  restMan.deassignAllergenToDish(dish1,all1);
  let platos3d = restMan.dishes;
  let plato3d = platos3d.next();
  while (!plato3d.done) { // Mientras la propiedad "done" no es true.
    console.log(plato3d.value);
    plato3d = platos3d.next();
  }
  console.log("");

  console.log("DESasignar platos a un menu");
  restMan.deassignDishToMenu(menu1, dish3);
  let menuses2d = restMan.menus;
  let menuu2d = menuses2d.next();
  while (!menuu2d.done) { // Mientras la propiedad "done" no es true.
    console.log(menuu2d.value);
    menuu2d = menuses2d.next();
  }

  console.log("");
  console.log("");


  console.log("Funcion comparacion descendente");
  function compararNombresDescendente(a, b) {
    const nombreA = a.name.toLowerCase();
    const nombreB = b.name.toLowerCase();
    if (nombreA < nombreB) {
      return 1; // Devolvemos 1 para indicar que a debe ir después de b
    } else if (nombreA > nombreB) {
      return -1; // Devolvemos -1 para indicar que a debe ir antes de b
    } else {
      return 0; // Devolvemos 0 si son iguales
    }
  }
  console.log("***getDishesInCategory***");
  let dishesInCategory = restMan.getDishesInCategory(cat3);
  let disheInCategory = dishesInCategory.next();
  while (!disheInCategory.done) { // Mientras la propiedad "done" no es true.
    console.log(disheInCategory.value);
    disheInCategory = dishesInCategory.next();
  }
  console.log("***getDishesInCategory con funcion ordenacion***");
  let dishesInCategory2 = restMan.getDishesInCategory(cat3, compararNombresDescendente);
  let disheInCategory2 = dishesInCategory2.next();
  while (!disheInCategory2.done) { // Mientras la propiedad "done" no es true.
    console.log(disheInCategory2.value);
    disheInCategory2 = dishesInCategory2.next();
  }
  console.log("***getDishesWithAllergen***");
  let dishesWithAllergen = restMan.getDishesWithAllergen(all3);
  let disheWithAllergen = dishesWithAllergen.next();
  while (!disheWithAllergen.done) { // Mientras la propiedad "done" no es true.
    console.log(disheWithAllergen.value);
    disheWithAllergen = dishesWithAllergen.next();
  }
  console.log("***getDishesWithAllergen con funcion ordenacion***");
  let dishesWithAllergen2 = restMan.getDishesWithAllergen(all3, compararNombresDescendente);
  let disheWithAllergen2 = dishesWithAllergen2.next();
  while (!disheWithAllergen2.done) { // Mientras la propiedad "done" no es true.
    console.log(disheWithAllergen2.value);
    disheWithAllergen2 = dishesWithAllergen2.next();
  }

  console.log("Funcion callback");
  function letraA(dish) {
    return dish.name.toLowerCase().startsWith('a');
  }
  console.log("***findDishes***");
  let findDishes = restMan.findDishes(letraA);
  let findDishe = findDishes.next();
  while (!findDishe.done) { // Mientras la propiedad "done" no es true.
    console.log(findDishe.value);
    findDishe = findDishes.next();
  }
  console.log("***findDishes con funcion ordenacion***");
  let findDishes2 = restMan.findDishes(letraA, compararNombresDescendente);
  let findDishe2 = findDishes2.next();
  while (!findDishe2.done) { // Mientras la propiedad "done" no es true.
    console.log(findDishe2.value);
    findDishe2 = findDishes2.next();
  }

}
window.onload = testRestaurant;
