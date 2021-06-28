const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  const letrasM = names.reduce((acc, curr) => {
    const qtdA = curr.split('').filter((letra) => letra.toUpperCase() === 'A').length;
    acc += qtdA;
    return acc;
  }, 0)
  return letrasM;
}

assert.deepStrictEqual(containsA(), 20);

//5 - Dada o array de nomes, retorne a quantidade de vezes em que 
//aparecem a letra a maiúscula ou minúscula.