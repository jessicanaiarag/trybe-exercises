const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const transfArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return transfArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
//1 - Dada uma matriz, transforme em um array.