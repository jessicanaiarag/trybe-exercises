// Exercício 5
// Altere a visibilidade dos atributos definidos na classe Tv para private .

// Exercício 6
// Crie um método getter e um setter para o atributo _connectedTo , da classe Tv, de forma que:
// O setter deverá verificar se o valor definido está entre as conexões disponíveis ( _connections ) e:
// Em caso positivo, definir este valor para o atributo _connectedTo ;
// Em caso negativo, imprimir no console a mensagem "Sorry, connection unavailable!"

// Exercício 7
// Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.

class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution} \navailable connections: ${this._connections}`);
  }

  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

// const tv1 = new Tv('LG', 32, '4K', ['HDMI', 'Ethernet', 'Wifi']);
// tv1.turnOn();

tv1.connectedTo = 'Wi-fi';
console.log('Connected to: ', tv1.connectedTo);
