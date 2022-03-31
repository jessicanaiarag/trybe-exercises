// Exercício 1
// Crie uma classe chamada Tv, com os atributos: - brand : marca da TV;
// size : tamanho em polegadas;
// resolution : resolução da tela;
// connections : conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo : conexão atual Este atributo não precisa ser inicializado no construtor.

class tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }


  // Exercício 2
  // Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados
  // no construtor.

  turnOn(): void {
    console.log(` Tv ${this.brand}, ${this.size}", resolution: ${this.resolution} \navalable connections: ${this.connections}`);
  }
}

// Exercício 3
// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

const tv1 = new tv('LG', 32, '4k', ['HDMI', 'Ethernet', 'wifi']);
tv1.turnOn()