let person = {
name: 'Ricardo',
lastName: 'antonio',
age: 42,
canDrive: true,
favoriteMovies: ['Armagedon', 'Exterminador do futuro'],
favoriteNumber: [7,4],
address: {
    street: 'rua xablau',
    number: 45678,
    city: 'São Paulo',
}
}

console.log('Olá ' + person.name + ' ' + 'bem vindo ao nosso curso.')

console.log('Olá ' + person['name'] + ' ' + 'bem vindo ao nosso curso.')

let aleiltonProperty = 'age';

console.log('Olá ' + person[aleiltonProperty] + ' ' + 'bem vindo ao nosso curso.')

for (let key in person) {
    console.log(person[key]);
}

person.favoriteAlbums = ['Barões da Pisadinha', 'Foo Fighters'];
person['favoriteColor'] = 'Blue';

console.table(person.favoriteMovies);

