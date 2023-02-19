function bouncer(arr) {
// The filter(Boolean) step does the following:
// Passes each item in the array to the Boolean() object
// The Boolean() object coerces each item to true or false depending on whether it's truthy or falsy
// If the item is truthy, we keep it
    return arr.filter(Boolean)
  };

// The main thing to know is that, in JavaScript, this:

// array.filter(item => Boolean(item))
// is exactly the same as this:

// array.filter(Boolean)
  
  console.log(bouncer([7, "ate", "", false, 9]));
  // [7, "ate", 9]
  console.log(bouncer(["a", "b", "c"]));
  // ["a", "b", "c"]
  console.log(bouncer([null, NaN, 1, 2, undefined]));
  // [1, 2]