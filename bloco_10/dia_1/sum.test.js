const sum = require('./sum')

describe('sum', () => {
  it('4 mais 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
  })

  it('0 mais 0 igual 0', () => {
    expect(sum(0,0)).toBe(0)
  })

  it('Throw an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  })

  it('Error msg is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/)
  })
})