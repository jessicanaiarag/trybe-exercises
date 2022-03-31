// Exercício 3
// Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. 
// Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que 
// represente um pedido e uma que represente um item do pedido.
// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. "Batatas fritas"; "Açaí") e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: "cartão",
// "dinheiro") e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 
// 0.3 para 30%), o pedido pode ou não possuir desconto.

// Exercício 4
// Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. 
// A classe que representa o pedido deverá ter dois métodos: um que calcula o total do 
// pedido e outro que calcula o total aplicando o valor de desconto.

class Client {
  private _name: string = String();

  constructor(name: string) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }
}

class OrderItem {
  private _name: string = String();
  private _price: number = Number();

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (value > 0) {
      throw new Error('O preço deve ser positivo.');
    }
    this._price = value;
  }
}

class Order {
  private _client: Client;
  private _items: OrderItem[] = [];
  private _paymentMethod = string;
  private _discount = discount;

  constructor(client: Client, items: OrderItem[], paymentMethod: string, discount: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item.');
    }
    this._items = value;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (length < 0) {
      throw new Error('O disconto não pode ser um valor negativo.');
    }
    this._discount = value;
  }

  calculateTotal(): number {
    return this.items.reduce((previousValue, item) => {
      const total = previousValue += item.price;
      return total;
    }, 0)
  }

  calculateTotalWithDiscount(): number {
    return this.calculateTotal() * (1 - this.discount);
  }
}

// Para testar!

const client = new Client('João');

const sandwiche = new OrderItem('Sandwiche Natural', 5.00);
const juice = new OrderItem('Suco de Abacaxí', 5.00);
const dessert = new OrderItem('Gelatina de Uva', 2.50);

const order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());

