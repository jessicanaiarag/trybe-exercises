import Marguerita from "./Pizzas/MargueritaPizza";
import Peperoni from "./Pizzas/Peperoni";
import Pizza from "./Pizzas/pizza";
import PizzaSize from "./Pizzas/PizzaSize";

const pizza1 = new Pizza(PizzaSize.LARGE);
console.log(pizza1.makePizza());
console.log(pizza1.price);

const pizzaMarguerita = new Marguerita(PizzaSize.LARGE);
console.log(pizzaMarguerita.makePizza());
console.log(pizzaMarguerita);
console.log(pizzaMarguerita.price);

const pizzaPeperoni = new Peperoni(PizzaSize.EXTRA_LARGE);
console.log(pizzaPeperoni.makePizza());
console.log(pizzaPeperoni);
console.log(pizzaPeperoni.price);

let pizzas: Pizza [] = [];

pizzas.push(pizza1);
pizzas.push(pizzaPeperoni);
pizzas.push(pizzaMarguerita);

pizzas.forEach((pizza) => {
  console.log(`${pizza.makePizza()} => ${pizza.price}`);
})

