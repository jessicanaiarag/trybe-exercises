// Para Fixar
// Com base no final do primeiro exercício de fixação.
// No construtor da Subclass , o atributo isSuper deve ser setado como false.
// Você vai precisar utilizar o super.
// Dentro da função que recebe um objeto da Superclass como parâmetro, cheque 
// o valor do atributo isSuper e imprima no console "Super!" se for true e "Sub!" se 
// for false;

class Superclass {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  // No contructor da _Subclass_, o atributo _isSuper_ deve ser setado como `false`. Você vai precisar utilizar o _super_.
  constructor() {
    super();
    this.isSuper = false;
  }  
}


const myFunc = (object: Superclass ) => {
  object.sayHello();
  // dentro da função que recebe da _Superclass_ como parâmetro, cheque o valor do atributo
  // _isSuper_ e imprimi no console "Super!" se for `true` e "sub!" se for `false`;
  console.log(object.isSuper ? 'Super!' : 'Sub!' ); 
};

const sup = new Subclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);