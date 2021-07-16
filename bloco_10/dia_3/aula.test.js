const = { expect } = 

function myRandom(){
    return Math.random();
}

function randomDice(sides) {
    const random = 10;
    return Math.random();
}

function randomDice(sides) {
    const random = myRandom();
    return Math.ceil(random * sides);
}

text('Testando a randomDice', () => {
    myRandom = jest.fn()
    .mockReturnvalueOnce(0.6)
    .mockReturnvalueOnce(0.1)
    .mockReturnvalueOnce(0.3)
    .mockReturnvalueOnce(0.7)
    .mockReturnvalueOnce(0)

    expect(randomDice(10)).toBe(6);
    expect(randomDice(10)).toBe(1);
    expect(randomDice(10)).toBe(3);
    expect(randomDice(10)).toBe(7);
    expect(randomDice(10)).toBe(0);

    expect(myRandom).toHaveBeenCalledTimes(1);
});