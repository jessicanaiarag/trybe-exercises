const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const order = array => {
    const result = array.sort((a, b) => a - b);
    return result;
}

console.log(order(oddsAndEvens));