let palavra1 = "arara";
let palavra2 = "desenvolvimento";

function checkpalavra(palavra) {
  let verificaPalavra = "";
  for (var index = palavra.length - 1; index >= 0; index -= 1) {
    verificaPalavra += palavra[index];
  }
  if (verificaPalavra === palavra) {
    return true;
  }
  return false;
}

console.log(checkpalavra(palavra1));
console.log(checkpalavra(palavra2));
