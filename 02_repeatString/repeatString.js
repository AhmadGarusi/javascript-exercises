const repeatString = function( st , num ) {
  let sumStr = '';
  if (num < 0) 
    return 'ERROR';

  for (let i = 0; i<num; i++)
    sumStr += st;
  return sumStr;
};

// Do not edit below this line
module.exports = repeatString;
