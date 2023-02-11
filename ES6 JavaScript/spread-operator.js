const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
// Math.max(arr) returns a Nan because Math.max() expects comma-separated arguments, but not an array.
// ...arr returns an unpacked array. In other words, it spreads the array. The spread operator only works in-place, like in an argument to a function or in an array literal. 
// Spreaded:
console.log(...arr); // 6 89 3 45
console.log(maximus); 89