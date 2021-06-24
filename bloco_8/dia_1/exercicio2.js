const resultadoSorteio = (num, checkResultado) => {
    const numeroSorteado = Math.floor(Math.random() * 4) + 1;
    return checkResultado(num, numeroSorteado) ? "Parabéns você ganhou" : "Tente novamente";
}


const confereResultado = (aposta, numeroSorteado) => {
    return aposta === numeroSorteado;
}

console.log(resultadoSorteio(3, confereResultado));


/*
2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar 
um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma 
função que checa se o número apostado é igual ao número sorteado. O retorno da sua
HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/