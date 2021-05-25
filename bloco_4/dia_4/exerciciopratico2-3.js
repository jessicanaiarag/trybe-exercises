let teste = [2, 4, 6, 7, 10, 0, -3];

function verificaMenorPosicao(teste) {
  let menorPosicao = 0;
  for (let index in teste) {
    if (teste[menorPosicao] > teste[index]) {
      menorPosicao = index;
    }
  }
  return menorPosicao;
}

console.log(verificaMenorPosicao(teste));