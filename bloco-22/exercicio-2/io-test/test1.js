const { expect } = require('chai');

const checksNumber = require('./exercicio1');

describe('checksNumber', () => {
  describe('Verifica se o numero é > < ou = a zero', () => {
    it('Positivo', () => {
      const resposta = checksNumber(4);

      expect(resposta).to.be.equals('Positivo');
    });

    it('Negativo', () => {
      const resposta = checksNumber(-1);

      expect(resposta).to.be.equals('Negativo');
    });

    it('Neutro', () => {
      const resposta = checksNumber(0);

      expect(resposta).to.be.equals('Neutro');
    });
  });

  describe('Verifica se o numero é um numero', () => {
    it('é um numero', () => {
      expect(() => { checksNumber('a') }).to.throw()
    });
  });
});