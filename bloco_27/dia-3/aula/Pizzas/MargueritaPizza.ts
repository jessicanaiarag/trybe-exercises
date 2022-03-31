import Pizza from "./pizza";
import PizzaSize from "./PizzaSize";

export default class Marguerita extends Pizza {
  constructor(size: PizzaSize) {
    super(size)
    this.ingredients.push('basil', 'fresh mozzarella', 'tomatoes')
  }

  public get price(): number {
    const pizzaPrices = {
      "medium":28,
      "large": 33,
      "extra-large": 38
    }
    const price = pizzaPrices[this.size] ?? pizzaPrices.large
    return price
  }
}

