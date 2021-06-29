// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacaxi', 'Morango', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Goiaba', 'Banana', 'Laranja'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  fruitSalad = [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));