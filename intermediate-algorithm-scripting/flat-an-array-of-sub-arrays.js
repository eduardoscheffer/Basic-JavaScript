function steamrollArray(arr) {
  return arr.flat(arr.length);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
// [ 1, 2, 3, 4 ]

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth 