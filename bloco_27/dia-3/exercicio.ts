// Exercício 1
// A a classe pessoa no nosso sistema hoje é uma classe comum, podendo ser instanciada, 
// ou seja, conseguimos criar novas pessoas diretamente, porém isso não faz sentido, 
// já que nossa classe pessoa é apenas uma abstração para ser herdada por outras classes 
// do sistema como pessoa estudante e pessoa professora. Refatore nossa classe pessoa de
// forma que não possamos mais criar diretamente instâncias de pessoa, somente das classes
// que herdam dela

// person

export default abstract class Person {
  private _name: string = string();
  private _birthdate: Date = New Date();

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this._birthdate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthdate
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value)
    this._birthdate = value;
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // Diferença em milissegundoa entre a data atual e a data passada por parâmetro
    const yearMs = 31_536_000_000 // 1 ano = 31536000000 milissegundos
    return Math.floor(diff / yearMS);
  }

  private validadteName(value: string): void {
    if (value.length < 3) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(value) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
  }
}

// Para testar
// index.ts

import Person from './Person';
import Teacher from './Teacher';
import Student from './Student';
import Subject from './Subject';

// tentar fazer isso agora deve gerar um erro
// já que nossa classe se tornou abstrata e não podemos criar instancias de classes abstratas

const pessoa = new Person('carolina da Silva', new Date('2005/03/17'));

// isso não deve gerar nenhum erro
const carolina = new Subject('Matemática');

// isso tambem nao deve gerar nenhum erro
const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
console.log(marta);



