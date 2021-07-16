
const exercicio = require('./exercicios')

jest.mock()

describe('Jest - Simulando comportamentos', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Deveria mocar uma função que retorna numero randomico', () => {
        exercicio.generateRandomNumber = jest.fn()
            .mockReturnValue(10);

        expect(exercicio.generateRandomNumber()).toBe(10);
        expect(exercicio.generateRandomNumber).toHaveBeenCalledTimes(1);
    })

    it('Deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo', () => {
        exercicio.generateRandomNumber = jest.fn()
            .mockImplementation((a, b) => a / b);

        expect(exercicio.generateRandomNumber(4, 2)).toBe(2);
        expect(exercicio.generateRandomNumber).toHaveBeenCalledTimes(1);
    })

    it('Deve receber três parâmetros e retorne sua multiplicação', () => {
        exercicio.generateRandomNumber = jest.fn()
            .mockImplementation((a, b, c) => a * b * c);

        expect(exercicio.generateRandomNumber(4, 2, 2)).toBe(16);
        expect(exercicio.generateRandomNumber).toHaveBeenCalledTimes(1);
    })

    it('Deve receber 1 parâmetro e retorne seu dobro', () => {
        exercicio.generateRandomNumber = jest.fn()
            .mockImplementation((b) => b * b);

        expect(exercicio.generateRandomNumber(4)).toBe(16);
        expect(exercicio.generateRandomNumber).toHaveBeenCalledTimes(1);
    })

    it('Deve retornar string em caixa baixa', () => {
        exercicio.toUpperCase = jest
            .spyOn(exercicio, "toUpperCase")
            .mockImplementation((string) => string.toLowerCase());

        expect(exercicio.toUpperCase('CASA')).toBe('casa');
    })

    it('Deve retornar a ultima letra de uma string', () => {
        exercicio.firtLetter = jest.fn()
            .mockImplementation((string) => string[string.length - 1]);

        expect(exercicio.firtLetter('casa')).toBe('a');
    })

    it('Deve concatenar 3 strings', () => {
        exercicio.concat = jest.fn()
            .mockImplementation((s1, s2, s3) => s1 + s2 + s3);

        expect(exercicio.concat('casa', 'da', 'vó')).toBe('casadavó');
    })

    it('Deve implementar um mock e depois retornar para o original', () => {
        const mockToUpperCase = jest
            .spyOn(exercicio, "toUpperCase")
            .mockImplementation(a => a.toLowerCase());

        expect(mockToUpperCase("UPPERCASE")).toBe("uppercase");
        expect(mockToUpperCase).toHaveBeenCalled();
        expect(mockToUpperCase).toHaveBeenCalledTimes(1);
        expect(mockToUpperCase).toHaveBeenCalledWith("UPPERCASE");

        exercicio.toUpperCase.mockRestore();

        expect(exercicio.toUpperCase("lowercase")).toBe("LOWERCASE");
    })

    it('Deve retornar uma requisição de sucesso', async () => {
        const mockfetchDog = jest
            .spyOn(exercicio, "fetchDog")
            .mockResolvedValue("request sucess");

        mockfetchDog();
        expect(mockfetchDog).toHaveBeenCalled();
        expect(mockfetchDog).toHaveBeenCalledTimes(1);
        expect(mockfetchDog()).resolves.toBe("request sucess");
        expect(mockfetchDog).toHaveBeenCalledTimes(2);
    })

    it('Deve retornar uma falha na requisição', async () => {
        const mockfetchDog = jest
            .spyOn(exercicio, "fetchDog")
            .mockRejectedValue("request failed");

        expect(mockfetchDog()).rejects.toMatch("request failed");
        expect(mockfetchDog).toHaveBeenCalledTimes(1);
    })


  //

});

