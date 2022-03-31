import PizzaSize from './PizzaSize'

export default class Pizza {
  protected size: PizzaSize;
  protected ingredients: string[];

  constructor (size: PizzaSize) {
    this.size = size;
    this.ingredients = ['massa'];
  }

  public makePizza(): string {
    return `${this.size} pizza está sendp preparada!`
  };
  
  public get price(): number {
    const pizzaPrices = {
      "medium":25,
      "large": 30,
      "extra-large": 35
    }
    const price = pizzaPrices[this.size] ?? pizzaPrices.large
    return price
  }
}