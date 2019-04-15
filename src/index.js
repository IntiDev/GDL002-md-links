const pathExists = path;

const validateFormat = (file) =>  {
  let getExtensionFile = (/[.]/.exec(file)) ? /[^.]+$/.exec(file)[0] : undefined;

  return getExtensionFile == 'md' ? true : false;
};

module.exports = {
  validateFormat
};
