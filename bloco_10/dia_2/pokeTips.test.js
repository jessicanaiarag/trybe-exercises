const pokeTips = require ('./pokeTips')

test('returns the best starting pokemon', (done) => {
    pokeTips((data) => {
        expect(data).toBe('Charmander é o melhor pokémon para começar.')
        done();
    });
});