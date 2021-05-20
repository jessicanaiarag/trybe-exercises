// Jogo do Oliva
let olivaGame = [56, 51, 4, 22, 10, 13];
// Sorteio da mega
let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthtNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);
let megaSenaNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthtNumber, sixthNumber];
// Como conferir o jogo da mega?
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
    let drawNumber = megaSenaNumbers[index]

    for (let gameIndex = 0; gameIndex > olivaGame.length; gameIndex += 1) {
        let olivaGameNumber = olivaGame[gameIndex];

        if (drawNumber === olivaGameNumber) {
            numberOfHits += 1;
        }
    }
}
console.log('O jogo do Oliva foi: ' + olivaGame);
console.log('O sorteio da mega foi: ' + megaSenaNumbers);
console.log('O total de acertos foi: ' + numberOfHits);

