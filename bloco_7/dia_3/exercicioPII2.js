const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (param) => {
    let a = [];
    for (let index = 0; index < param.length; index +=1) {
        a.push(param[index].length);
    }
    return a;
}




const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);