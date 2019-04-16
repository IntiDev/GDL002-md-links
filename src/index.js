const fs = require('fs');

const fileExists = fs.existsSync;

const validateFormat = (file) =>  {
  let getExtensionFile = (/[.]/.exec(file)) ? /[^.]+$/.exec(file)[0] : undefined;

  return getExtensionFile == 'md' ? true : false;
};

//    /\[(.?)\]\(.*?\)/gm
// /^\[.*\]\(.*\)/
//https://stackoverflow.com/questions/14599071/how-can-i-write-a-javascript-regular-expression-to-replace-hyperlinks-in-this-fo
const readFile = (file, 'utf8') => {
  
  
}

module.exports = {
  fileExists,
  validateFormat,
  readFile,
};
