const assert = require('assert');
// escreva a função addOne aqui
const addOne = (num) => {
    let a = [];
    for (let index = 0; index < num.length; index += 1) {
        a.push(num[index] + 1);
    }
    return a;
}


const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);