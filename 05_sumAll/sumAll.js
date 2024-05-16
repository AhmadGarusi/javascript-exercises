const sumAll = function(x ,y) {
  if (x<0 || y<0 || typeof(x) != typeof(1) || typeof(y) != typeof(1))
    return 'ERROR';

  let sum = 0, temp;
  if (x>y){
    temp = x;
    x = y;
    y = temp;
  }
  for (let i=x; i<=y; i++)
    sum += i;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
