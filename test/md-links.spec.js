// const mdLinks = require('../src/index.js');
const validateFormat = require('../src/index.js');

//Organización de test en grupo

describe('validateFormat', () => {

  it('is a function', () => {    
    expect(typeof validateFormat).toBe('function');
  });

  it('returns `prueba`', () => {
    expect(validateFormat()).toBe('undefined');
  });

});
