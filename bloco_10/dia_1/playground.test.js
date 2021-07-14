const {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
  } = require('./playground');

  describe('Test Playground', () => {
    it('Should be a function', () => {
      expect(typeof(encode)).toBe('function')
      expect(typeof(decode)).toBe('function')
    })

    it('Should encode return correctly from vocals to numbers', () => {
      const result = encode('aeiou');
      expect(result).toBe('12345');
    }) 
  
    it('Should decode return correctly from vocals to numbers', () => {
      const result = decode('12345');
      expect(result).toBe('aeiou');
    })  

    it('Should encode return correctly from vocals to numbers', () => {
      const result = encode('teste');
      expect(result).toBe('t2st2');
    }) 

    it('Should encode return correctly from vocals to numbers', () => {
      const result = encode('teste');
      expect(result.length).toBe(5);
    }) 
  })