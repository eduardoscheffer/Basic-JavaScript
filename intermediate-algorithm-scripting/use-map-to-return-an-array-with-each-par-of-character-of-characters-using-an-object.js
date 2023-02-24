// First define an object with all pair possibilities, this allows us to easily find by key or value.
// Split str into a characters array so we can use each letter to find its pair.
// Use the map function to map each character in the array of individual characters to an array with the character and its matching pair, creating a 2D array.

function pairElement(str) {
  // create object for pair lookup
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  // map character to array of character and matching pair
  return str
    .split("") // [ 'G', 'C', 'G' ]
    .map(c => [c, pairs[c]]);
}

// test here
console.log(pairElement("GCG")); // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]