let basketballPlayer = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
};

console.log(
  'A jogadora ' +
    basketballPlayer.name +
    ' '  +
    basketballPlayer.lastName +
    ' tem ' +
    basketballPlayer.age +
    ' anos de idade.'
);

basketballPlayer['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(
  'A jogadora ' +
    basketballPlayer.name +
    ' ' +
    basketballPlayer.lastName +
    ' foi eleita a melhor do mundo por ' +
    basketballPlayer.bestInTheWorld.length +
    ' vezes.'
);

console.log('A jogadora ' + basketballPlayer.name + ' '+ basketballPlayer.lastName +
 ' possui ' + basketballPlayer.medals.golden +
  ' medalhas de ouro e ' + basketballPlayer.medals.silver + ' medalhas de prata.' 
);
