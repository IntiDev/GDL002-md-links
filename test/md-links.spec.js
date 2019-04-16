const fs = require('fs');
const {fileExists, validateFormat} = require('../src/index.js');

describe('File exists', () => {
  it('will be return true when a file exists', () => {
    expect(fileExists('README.md')).toBe(true);
  });

  it('will be return false when a file doesn\'t exists', () => {
    expect(fileExists('test.txt')).toBe(false);
  });
});

describe('Validate format', () => {
  it('is a function', () => {    
    expect(typeof validateFormat).toBe('function');
  });

  it('is a markdown file ', () => {
    expect(validateFormat('README.md')).toBe(true);
  });

  it('isn\'t a markdown file', () => {
    expect(validateFormat('test.txt')).toBe(false);
  });
});

describe('Read file', () => {

});
