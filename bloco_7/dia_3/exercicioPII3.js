const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (param) => {
    let soma = 0;
    for (let index = 0; index < param.length; index +=1) {
        soma += param[index];
    }

    return soma;
}


const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);