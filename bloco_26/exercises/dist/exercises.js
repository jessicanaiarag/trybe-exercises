"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circulo = exports.trapezio = exports.losango = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
;
function add(x, y) {
    return x + y;
}
exports.add = add;
;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
;
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
;
function square(side) {
    return side ** 2;
}
exports.square = square;
;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
;
function losango(diagonal_D, diagonal_d) {
    return (diagonal_D * diagonal_d) / 2;
}
exports.losango = losango;
;
function trapezio(altura, base_B, base_b) {
    return ((base_B + base_b) * altura) / 2;
}
exports.trapezio = trapezio;
;
function circulo(r) {
    return 3.14 * r * r;
}
exports.circulo = circulo;
;
// A quarta função que vamos desenvolver será para calcular a área do triângulo. 
// Para calcular a área de um triângulo, basta multiplicar a medida da base com 
// a medida da altura e dividir o resultado por dois.
// x = B . A / 2 
// Fórmula da Área do Triângulo
// A quinta função que vamos desenvolver será para calcular a área do quadrado. 
// Para calcular sua área, multiplicamos a medida da base com a medida altura. 
// Como as medidas são as mesmas, multiplicá-las é o mesmo que elevar o lado ao quadrado.
// X = L . L ou X = L²
// Fórmula da Área do Quadrado
// A quinta função que vamos desenvolver será para calcular a área do quadrado. 
// Para calcular sua área, multiplicamos a medida da base com a medida altura. 
// Como as medidas são as mesmas, multiplicá-las é o mesmo que elevar o lado ao quadrado.
// x = B . A 
// Fórmula da Área do Quadrado
