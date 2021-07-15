const { uppercase, getUserName } = require('./exercicio');


describe('Testes assincronos', () => {
    // 1
    it('Verifica se o callback é chamado', (done) => {
        uppercase('a,b', (valor) => {
            expect(valor).toBe('A,B');
            done();
        })
    })

    // 2
    it('Verica se o usuário é encontrado', (done) => {
        getUserName(4).then((name) => {
            expect(name).toBe('Mark');
            done();
        })
    })

    // 3
    it('Verica se o usuário não é encontrado', (done) => {
        getUserName(4).then((name) => {
            expect(name).toBe('Mark');
            done();
        })
    })
});

