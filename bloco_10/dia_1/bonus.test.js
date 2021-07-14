const searchEmployee = require('./bonus.js');

describe('Testa searchEmployee', () => {
    it('Testa se searchEmployee é uma função', () => {
        expect(typeof searchEmployee).toBe('function');
    });
    it('testa se searchemployee(id, "firstName") retorna o 1º nome do usuário da id consultada', () => {
        const actual = searchEmployee('1256-4', 'firstName');
        const expected = 'Linda';
        expect(actual).toBe(expected)
    });
    it('Testa se searchEmployee(id, "lastname") retorna o segundo nome do usuário da id consuldatada', () => {
        const actual = searchEmployee('1256-4', 'lastName');
        const expected = 'Bezos';
        expect(actual).toBe(expected);
    });
    it('Testa se searchEmployee(id, "specialities") retorna um array com todas as habilidades do id pesquisado', () => {
        const actual = searchEmployee('1256-4', 'specialities');
        expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
    });
    it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
        expect(() => { searchEmployee('1256-8', 'specialities') }).toThrow();
    });
    it('Testa a mensagem do erro para ID inexistente', () => {
        expect(() => { searchEmployee('1256-8', 'specialities') }).toThrowError(new Error("ID não identificada"));
    });
    it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
        expect(() => { searchEmployee() }).toThrow();
    });
    it('Testa a mensagem do erro para informação inexistente', () => {
        expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error('Informação indisponível'));
    });

});