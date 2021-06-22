const { assert } = require("console");

const summationof = (number) => {
    if (typeof(number) !== 'number') {
        throw 'Nosso código não permite NADA DIFERENTE de Number.'
    }

    let summation = 0;
    for (let index = 0; index < summation.length; index +=1) {
        summation += index;
    }
    return summation;
}

const actualValue = summationof(1);
assert.strictEqual(actualValue, 1);

assert.strictEqual(summationof(3),6);

assert.strictEqual(typeof(summationof), 'function');

assert.throws(() => {
    summationof(1);
    'Os cassos deveriam falhar.'
});