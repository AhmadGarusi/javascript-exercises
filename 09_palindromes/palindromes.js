const palindromes = function (str) {
  str = str.toLowerCase();
  charArray = str.split('');
  filteredCharArr = charArray.filter( characterr => (characterr >= 'a' && characterr <= 'z') || (characterr >= '0' && characterr <= '9') );
  cleanOldStr = filteredCharArr.join();
  reversedCharArr = filteredCharArr.reverse();
  newStr = reversedCharArr.join();

  return newStr === cleanOldStr ;
};

// Do not edit below this line
module.exports = palindromes;
