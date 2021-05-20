const notaMaxima = 1000;
const valorNota = 0;
const porcentagem = (valorNota * 100) / notaMaxima;
let resultado = "";

if (porcentagem < 0 || porcentagem > 100) {
    resultado = "erro";
}
else if (porcentagem >= 90) {
    resultado = "A";
}
else if (porcentagem >= 80) {
    resultado = "B";
}    
else if (porcentagem >= 70) {
    resultado = "C";
}  
else if (porcentagem >= 60) {
    resultado = "D";
}  
else if (porcentagem >= 50) {
    resultado = "E";
}  
else if (porcentagem < 50) {
    resultado = "F";
}  
console.log(resultado);