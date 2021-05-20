let numbers = [];

for (let index = 1; index <= 25; index +=1) {
    numbers.push(index);
    //console.log(index / 2);
}

let numbersDividida = [];

for (let index = 0; index < numbers.length; index +=1) {
    numbersDividida.push(numbers[index] / 2);
}

console.log(numbersDividida);