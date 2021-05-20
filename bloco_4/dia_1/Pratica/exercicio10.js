const valorCusto = 10;
const valorVenda = 20;
const impostoSobreOCusto = valorCusto * 0.2;
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const lucro = valorVenda - valorCustoTotal;
const lucroTotal = lucro * 1000;

if (valorCusto < 0 || valorVenda < 0) {
    console.log('erro');
}
else {
    console.log(lucroTotal);
}
