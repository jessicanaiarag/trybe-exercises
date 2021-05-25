let teste = [2, 3, 6, 7, 10, 1];

function verificaMaiorPosicao(teste) {
  let maiorPosicao = 0;
  for (let index in teste) {
    if (teste[maiorPosicao] < teste[index]) {
      maiorPosicao = index;
    }
  }
  return maiorPosicao;
}

console.log(verificaMaiorPosicao(teste));