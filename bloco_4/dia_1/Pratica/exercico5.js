let a = -1;
let b = 100;
let c = 190;
let triangulo = 0;
if (a > 180 || b > 180 || c > 180 || a < 0 || b < 0 || c < 0) {
    console.log('erro');
} else if (a+b+c === 180) {
    console.log('true');
}
else {
    console.log('false');
}
