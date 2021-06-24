const person = {
    name: 'Jessica',
    lastName:'Naiara'

    greet: function (callback) {
       if (callback === undefined) {
           console.log('Olá');
       } else {
           console.log(callback());
       }
    }
}

console.log(person.greet());

function formalGreeting() {
    return 'Olá, tudo bem? Espero que esteja.';
}


function bad() {
    return 'Oi';
}

function vove = () {
    return 'Olá querida!'
} 