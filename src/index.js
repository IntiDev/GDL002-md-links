const fs = require('fs');

const fileExists = fs.existsSync;

const validateFormat = (file) => {
  let getExtensionFile = (/[.]/.exec(file)) ? /[^.]+$/.exec(file)[0] : undefined;

  return getExtensionFile === 'md' ? true : false;
};

//    /\[(.?)\]\(.*?\)/gm
// /^\[.*\]\(.*\)/
// https://stackoverflow.com/questions/14599071/how-can-i-write-a-javascript-regular-expression-to-replace-hyperlinks-in-this-fo
const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFileSync(file, 'utf8', (error, data) => {
      if (error) {
        reject(error);
      }
      console.log(data);
      resolve(data);
    });
  });
};

// readFile('../src/test.md');

module.exports = {
  fileExists,
  validateFormat,
  readFile,
};
