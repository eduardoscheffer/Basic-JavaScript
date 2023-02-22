// the global variable
var fixedValue = 4;

function incrementer() {
  // Add your code below this line
  return fixedValue + 1;

  // Add your code above this line
}

var newValue = incrementer(); //  5
console.log(fixedValue); // 4

// Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
// The global variable
let fixedValue = 4;

const incrementer = (variable) => variable + 1;