// const mdLinks = require('../index.js');
const {validateFormat} = require('../index.js');

//Organización de test en grupo

describe('validateFormat', () => {

  test('is a function', () => {    
    expect(typeof validateFormat).toBe('undefined');
  });

  it('returns `Prueba`', _ => {
    expect(validateFormat()).toBe('Prueba');
  });

});
