const assert = require('assert');
  
  const greetPeople = (people) => {
    let array = [];
  
    for (const person in people) {
      array.push('Hello ' + people[person])
    }
    return array;
  };
 
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  const resultado = greetPeople(parameter);

assert.deepStrictEqual(resultado, result);