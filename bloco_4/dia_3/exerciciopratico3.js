let linhas = 5;  
let asteriscos = '';
let posicao = linhas;

for (let index1 = 0; index1 <= linhas; index1 +=1) {
    for (let index2 = 0; index2 <= linhas; index2 += 1) {
        if (index2 < posicao) {
            asteriscos = asteriscos + ' ';
    } else {
        asteriscos = asteriscos + '*';
    }
    }
    console.log(asteriscos);
    asteriscos = '';
    posicao -= 1; 
}