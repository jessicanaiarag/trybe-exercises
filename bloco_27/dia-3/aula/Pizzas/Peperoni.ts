import Pizza from "./pizza";
import PizzaSize from "./PizzaSize";

export default class Peperoni extends Pizza {
  constructor(size: PizzaSize) {
    super(size)
    this.ingredients.push('peperoni')
  }

  public makePizza(): string {
    return `Peperoni>> ${this.size} pizza está sendp preparada!`
  };
  
}
