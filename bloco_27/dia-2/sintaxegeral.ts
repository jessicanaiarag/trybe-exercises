// Para Fixar
// Crie uma classe chamada Superclass .
// A Superclass deve possuir um atributo público isSuper
// isSuper deve ser setado como true na inicialização.
// A Superclass deve possuir um método público chamado sayHello , 
// que deve imprimir um "Olá mundo!".
// Crie uma classe chamada Subclass que herda da Superclass .
// Crie uma função que recebe um objeto da Superclass .
// Dentro da função, chame o método sayHello do objeto passado como parâmetro.
// Crie um objeto da Superclass e outro da Subclass .
// Chame a função 2 vezes, passando os objetos criados.

// crie uma classe chamada _Superclass_.

class Superclass {
  // A _Superclass_ deve possuir um atributo publico _isSuper_.
  isSuper: boolean;

  constructor() {
    // _isSuper_ deve ser setado como `true` na inicialização.
    this.isSuper = true;
  }

  // A _Superclass_ deve possuir um método público chamado `sayHello`, que deve imprimir um "Olá mundo!".
  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

  // Crie uma classe chamada _Subclass que herda da _SuperClass_.
  class Subclass extends Superclass { }

  // Crie uma função que recebe um objeto da _Superclass_.
  const myFunc = (object: Superclass) => {
    // Dentro da função, chame o método `sayHello` do objeto passado como parâmetro.
    object.sayHello();
  };

  // Crie um objeto da _Superclass_ e outro da _Subclass_.
  const sup = new Superclass();
  const sub = new Subclass();

  // Chame a função 2 vezes, passada os objetos criados.
  myFunc(sup);
  myFunc(sub);