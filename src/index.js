// const file = "prueba.txt";

const validateFormat = (file) =>  {
  // return 'prueba'; 
  let getExtensionFile = (/[.]/.exec(file)) ? /[^.]+$/.exec(file)[0] : undefined;
  console.log(getExtensionFile);
  
  return getExtensionFile == 'md' ? true : false;
};

// console.log(validateFormat(file));

module.exports = {
  validateFormat
};
