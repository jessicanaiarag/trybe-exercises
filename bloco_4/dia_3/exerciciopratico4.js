let linhas = 5;  
let asteriscos = '';
let meio = (linhas + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let index1 = 0; index1 <= meio; index1 +=1) {
    for (let index2 = 0; index2 <= linhas; index2 += 1) {
        if (index2 > esquerda && index2 < direita) {
            asteriscos = asteriscos + '*';
    } else {
        asteriscos = asteriscos + ' ';
    }
    }
    console.log(asteriscos);
    asteriscos = '';
    esquerda -= 1; 
    direita += 1;
}