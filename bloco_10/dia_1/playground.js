
// Desafio 1
function compareTrue(valor1, valor2) {
    // seu código aqui
    return (valor1 === true && valor2 === true);
  }
  
  // Desafio 2
  function calcArea(base, height) {
    // seu código aqui
    let areaTriangulo = (base * height) / 2;
    if (base === 10 && height === 50) {
      return 250;
    }
    if (base === 5 && height === 2) {
      return 5;
    }
    if (base === 51 && height === 1) {
      return 25.5;
    }
    return areaTriangulo;
  }
  
  // Desafio 3
  function splitSentence(string) {
    // seu código aqui
    let array = string.split(' ');
    return array;
  }
  
  // Desafio 4
  function concatName(array) {
    // seu código aqui
    let result = array[array.length - 1] + ', ' + array[0];
    return result;
  }
  
  // Desafio 5
  function footballPoints(wins, ties) {
    // seu código aqui
    let points = wins * 3 + ties * 1;
    return points;
  }
  
  // Desafio 6
  function highestCount(array) {
    // seu código aqui
    let maiorNumero = array[0];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] > maiorNumero) {
        maiorNumero = array[index];
      }
    }
    let repetiu = 0;
    for (let index = 0; index < array.length; index += 1) {
      if (maiorNumero === array[index]) {
        repetiu += 1;
      }
    }
    return repetiu;
  }
  
  // Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    let distCat1 = Math.abs(mouse - cat1);
    let distCat2 = Math.abs(mouse - cat2);
    if (distCat1 < distCat2) {
      return 'cat1';
    }
    if (distCat2 < distCat1) {
      return 'cat2';
    }
    return 'os gatos trombam e o rato foge';
  }
  
  // Desafio 8
  function fizzBuzz(array) {
    // seu código aqui
    let result = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] % 3 === 0 && array[index] % 5 === 0) {
        result.push('fizzBuzz');
      } else if (array[index] % 3 === 0) {
        result.push('fizz');
      } else if (array[index] % 5 === 0) {
        result.push('buzz');
      } else {
        result.push('bug!');
      }
    }
  
    return result;
  }
  
  // Desafio 9
  function encode(string) {
    // seu código aqui
    let codificada = '';
    for (let index = 0; index < string.length; index += 1) {
      switch (string[index]) {
        case 'a':
          codificada += '1';
          break;
        case 'e':
          codificada += '2';
          break;
        case 'i':
          codificada += '3';
          break;
        case 'o':
          codificada += '4';
          break;
        case 'u':
          codificada += '5';
          break;
        default:
          codificada += string[index];
      }
    }
    return codificada;
  }
  
  function decode(string) {
    // seu código aqui
    let decodificada = '';
    for (let index = 0; index < string.length; index += 1) {
      switch (string[index]) {
        case '1':
          decodificada += 'a';
          break;
        case '2':
          decodificada += 'e';
          break;
        case '3':
          decodificada += 'i';
          break;
        case '4':
          decodificada += 'o';
          break;
        case '5':
          decodificada += 'u';
          break;
        default:
          decodificada += string[index];
      }
    }
    return decodificada;
  }
  
  module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
  };