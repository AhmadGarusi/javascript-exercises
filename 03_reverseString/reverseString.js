const reverseString = function(str) {
  let resault = '';
  for (let i = str.length - 1; i>=0; i--){
    resault += str[i];
  }
  return resault;
};

// Do not edit below this line
module.exports = reverseString;
