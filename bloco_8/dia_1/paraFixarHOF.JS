
const msg = () => 'Acordando!!';

const coof = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(msg));
console.log(doingThings(coof));
console.log(doingThings(sleep));



// Ao chamar a função doingThings:
//doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

