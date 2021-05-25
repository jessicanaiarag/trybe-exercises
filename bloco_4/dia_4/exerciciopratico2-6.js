let numbers = [1, 2, 3, 4, 5];

function somador(numbers) {
  let somatorio = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    somatorio += numbers[index];
  }
  return somatorio;
}

console.log(somador(numbers));
