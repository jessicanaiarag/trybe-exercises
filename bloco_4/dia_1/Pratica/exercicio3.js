let a = 8;
let b = 20;
let c = 15;
let maior = 0;
if (a > b && a > c) {
    maior = a;
}
else if (b > a && b > c) {
    maior = b;
} 
else {
    maior = c;
}
console.log(maior);