// Exercício 1
// Vamos modelar algumas partes de um software de uma escola. Escreva uma classe 
// cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. 
// Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 
// notas de prova, 2 notas de trabalho.

// Exercício 2
// Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. 
// Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante 
// e outro que calcula a média das notas da pessoa estudante.

// Exercício 3
// Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. 
// Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que 
// represente um pedido e uma que represente um item do pedido.
// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. "Batatas fritas"; "Açaí") e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: "cartão",
// "dinheiro") e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 
// 0.3 para 30%), o pedido pode ou não possuir desconto.

class Student {
  private _enrollment: string;
  private _name: string = String();
  private _examsGrades: number[];
  private _worksGrades: number[];
  
  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this.name = name;
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de trabalhos.');
    }
    this._worksGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
    }
    this._worksGrades = value;
  }

  sumNotes(): number {
    return [...this._examsGrades, ...this._worksGrades]
      .reduce((previousNote, note) => {
        note += previousNote;

        return note;
      }, 0)
  }

  sumAvegereNotes(): number {
    const sumNotes = this.sumNotes();
    const divider = this.examsGrades.length + this.worksGrades.length;
    return Math.round(sumNotes / divider);
  
  }
}

// Para testar!

const personOne = new Student('202001011', 'Maria da Silva');

console.log(personOne);

const personTwo = new Student('202001012', 'João da Silva');

console.log(personTwo);
