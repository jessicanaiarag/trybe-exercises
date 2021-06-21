const summationof = (number) => {
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