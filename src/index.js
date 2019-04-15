const fs = require('fs');

const fileExists = fs.existsSync;

const validateFormat = (file) =>  {
  let getExtensionFile = (/[.]/.exec(file)) ? /[^.]+$/.exec(file)[0] : undefined;

  return getExtensionFile == 'md' ? true : false;
};

const readFile = () => {
  
}

module.exports = {
  fileExists,
  validateFormat,
  readFile,
};
