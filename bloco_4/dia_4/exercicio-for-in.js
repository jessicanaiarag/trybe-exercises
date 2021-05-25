let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

for (let persons in names) {
    console.log('Olá ' + names[persons]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

 for (let Product in car) {
     console.log(Product, car[Product]);
 }