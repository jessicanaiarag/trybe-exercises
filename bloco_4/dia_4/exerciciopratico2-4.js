let names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function verificaTamanhoNames(names) {
  let maiorName = names[0];
  for (let index in names) {
    if (names.length < names[index].length) {
      maiorName = names[index];
    }
  }
  return maiorName;
  
}

console.log(verificaTamanhoNames(names));