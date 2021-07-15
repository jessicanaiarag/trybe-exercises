const filterBySpeed = require('./pokemon')

test('Pokemons acima de 50 de velocidade', () => {
    filterBySpeed(50) 
    .then((filteredPokemons) => {
        expect(filteredPokemons).toEqual(['Charmander', 'Pikachu']);
    });
});