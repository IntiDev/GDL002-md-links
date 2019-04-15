const fs = require('fs');
const {fileExists, validateFormat} = require('../src/index.js');



describe('File exists', () => {
  it('will be return true when a file exists', () => {
    expect(fileExists('README.md')).toBe(true);
  });
});

//Organización de test en grupo
describe('Validate format', () => {

  it('is a function', () => {    
    expect(typeof validateFormat).toBe('function');
  });

  it('is a markdown file ',() => {
    expect(validateFormat('prueba.md')).toBe(true);
  } );
});
