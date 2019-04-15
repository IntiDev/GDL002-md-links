const fs = require('fs');
const {validateFormat} = require('../src/index.js');

//Organización de test en grupo
describe('validateFormat', () => {

  it('is a function', () => {    
    expect(typeof validateFormat).toBe('function');
  });

  it('is a markdown file ',() => {
    expect(validateFormat('prueba.txt')).toBe(true);
  } );
});
