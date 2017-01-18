var duplicate = function (arr) {
  return arr.concat(arr);       //concat makes a shallow copy of the array, does not modify the original array.
                                //Time complexity of this would be O(n) - 2n
};

console.log(duplicate([1,2,3,4,5]))     // [1,2,3,4,5,1,2,3,4,5]

