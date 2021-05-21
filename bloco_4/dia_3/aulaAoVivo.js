//Queen Attack
// Posição da rainha
let queenRowPosition = 6;
let queenColumnPosition = 4;
// Posição da peça oponente
let opponentRowPosition = 2;
let opponentColumnPosition = 4;
// Pode atacar?
let canfullAttack = false;
// calculo para enderder se o ataque foi bem sucedido ou não

// Se a rainha esta na mesma linha que a peça oponente ou se a rainha esta
//na mesma coluna que a peça oponente, significa que o ataque é sem sucedido
if (queenRowPosition === opponentRowPosition || queenColumnPosition === opponentColumnPosition) {
    canfullAttack = true;
}  

// Identificar se a peça do oponente esta na diagonal superior esqueda
for (let index = 1 ; index < 8; index += 1) {
    let currentQueenRow = queenRowPosition + index;
    let currentQueenColumn = queenColumnPosition - index;
    // Se a posição da linha ou da coluna forem igual a 0, o tabuleiro terminou.
    // Logo, termina o loop.
    if (currentQueenRow === 0 || currentQueenColumn ===0) {
        break;
    }
    // Se a posição currente de  linha e coluna estiverem na mesma posição que a 
    // peça oponente eu posso atacar
    if (currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
        console.log('ataque bem sucedido na diagonal inferior esquerda');
        canfullAttack = true;
        break;
    }  
}
// Identificar se a peça do oponente esta na diagonal inferior esqueda
// Identificar se a peça do oponente esta na diagonal superior direita
// Identificar se a peça do oponente esta na diagonal inferior direita

