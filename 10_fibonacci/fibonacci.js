const fibonacci = function(a) {
  if( a < "9" && a > "0" )
    a = Number(a);
  if( a < 0 ) 
    return "OOPS";

  let num1 = 1, num2 = 0, temp = 0;
  for (let i = 1; i <= a; i++){
    temp = num1 + num2;
    num1 = num2;
    num2 = temp;
  }
  return num2;
};

// Do not edit below this line
module.exports = fibonacci;

//1  1  2  3  5  8  13