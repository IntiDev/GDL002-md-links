const fs = require('fs');
const {fileExists, validateFormat} = require('../src/index.js');

describe('File exists', () => {
  it('will be return true when a file exists', () => {
    expect(fileExists('README.md')).toBe(true);
  });

  it('will be return false when a file doesnt exists', () => {
    expect(fileExists('test.md')).toBe(false);
  });
});

describe('Validate format', () => {

  it('is a function', () => {    
    expect(typeof validateFormat).toBe('function');
  });

  it('is a markdown file ',() => {
    expect(validateFormat('README.md')).toBe(true);
  } );

  it('isnt a markdown file', () => {
    expect(validateFormat('test.txt')).toBe(false);
  });
});
