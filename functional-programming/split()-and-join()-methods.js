// string.split():
function splitify(str) {
    // splits a string indo an array os strings separated for an argumentç
    // For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.
    return str.split(/\W/); // regex that matches any non-word character
  }
  
  console.log(splitify("Hello World,I-am code"));
  // [ 'Hello', 'World', 'I', 'am', 'code' ]


// arr.join():
// The join method is used to join the elements of an array together to create a string.
function sentensify(str) {
    return str.split(/\W/).join(" ");
  }
  
  console.log(sentensify("May-the-force-be-with-you")); // May the force be with you

  console.log(sentensify("The.force.is.strong.with.this.one")) // The force is strong with this one