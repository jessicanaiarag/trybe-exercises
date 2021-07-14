
const hydrate = (string) => {
    let coposAgua = 0;
    const caracteres = string.split(' ');
    coposAgua = caracteres.reduce((acc, curr) => {
      const qtd = parseInt(curr);
      if (!isNaN(qtd)) {
        acc += qtd;
      }
      return acc;
    }, 0)
    
    return coposAgua > 1 ? coposAgua + ' copos de água' : coposAgua + ' copo de água';

}

  module.exports = hydrate;