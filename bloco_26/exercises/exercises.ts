export function greeter(name: string) {
    return `Olá ${name}!`;
};

export function personAge(name: string, age: number) {
    return `${name} tem ${age} anos!`;
};

export function add(x: number, y: number): number {
    return x + y;
};

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
};

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
};
export function square(side: number): number {
    return side ** 2;
};

export function rectangle(base: number, height: number): number {
    return base * height;
};

export function losango(diagonal_D: number, diagonal_d: number): number {
    return (diagonal_D * diagonal_d) / 2;
};

export function trapezio(altura: number, base_B: number, base_b: number): number {
    return ((base_B + base_b) * altura) / 2;
};


export function circulo(r: number): number {
    return 3.14 * r * r;
};

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
