const assert = require('assert');

const factorialOf = (number) => {
   let factorial = 1;
    if (number === 0 || number === 1) {
        return 1;
    }

    let factorial = 1;
    for (let index = 1; index =< number; index += 1) {
        factorial *= index;
        
    }
    
    return factorial;
}

assert.strictEqual(typeof(factorialOf), 'function');
assert.strictEqual(factorialof(1), 1);
assert.strictEqual(factorialof(0), 1);
assert.strictEqual(factorialof(3), 6);
assert.strictEqual(factorialof(4), 24);
assert.strictEqual(factorialof(5), 120);