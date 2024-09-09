const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total+num, 0);
};

const multiply = function(arr) {
  return arr.reduce( (total, num) => total * num);
};

const power = function(a, b) {
  let resault = 1;
	for( let i = 1; i <= b; i++ )
    resault *= a;
  return resault;
};

const factorial = function(a) {
	let resault = 1;
  for(let i = 1; i <= a; i++)
    resault *= i;
  return resault;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
