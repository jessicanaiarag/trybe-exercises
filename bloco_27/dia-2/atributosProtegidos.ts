// Para Fixar
// Com base no exemplo do exercício anterior:
// Comente a chamada da função passando o objeto da Superclass .
// Faça a função receber não mais um objeto da Superclass , mas sim da Subclass .
// Crie, na Subclass , um método público chamado sayHello2 .
// Chame o método sayHello dentro do método sayHello2 .
// Mude a visibilidade do método sayHello de public para protected .
// Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. 
// Conserte esse erro utilizando o novo método sayHello2 .
// Mude a visibilidade do método sayHello de protected para private . O que acontece?
// Desfaça estas alterações (ou seja, volte para como era ao final do primeiro exercício)
// antes de fazer o próximo exercício.

class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  // Mude a visibilidade do método `sayHello` de _public_ para _protected_.
  protected sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  // Crie, na _Subclass_, um método público chamado `sayHello2`.
  public sayHello2(): void {
    // Chame o método `sayHello` dentro do método `sayHello2`.
    this.sayHello();
  }
}

// Faça a função receber não mais um objeto da _SuperClass_, mas sim da Subclass_.
const myFunc = (object: Subclass) => {
  // Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método `sayHello2`.
  object.sayHello2()
};

const sup = new Superclass();
const sub = new Subclass();

// Comente a chamada da função passando o objeto da _Superclass_.
// MyFunc(sup);
myFunc(sub);

// Mude a visibilidade do método `sayHello2` de _protected_ para _private_. O que acontece?
// Ao mudar a visibilidade de _protected_ para _private_, o método `sayHello2` da _Subclass_ deixa de poder acessar o método `sayHello2`
// definido na _Superclass_, pois como privado o método só pode ser acessado na classe que define.