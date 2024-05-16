const removeFromArray = function(arr, ...numToRemove) {
  for (let j=0, n = numToRemove.length, len = arr.length; j<n; j++ )
    for (let i=0; i<len; i++)
      if (arr[i] === numToRemove[j]){
        arr.splice(i,1);
        i--;
      }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
