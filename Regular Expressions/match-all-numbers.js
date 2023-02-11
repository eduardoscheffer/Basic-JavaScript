// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

let movieName = "2001: A Space Odyssey";
// Use the shorthand character class \d to count how many digits are in movie titles.
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
console.log(result); // 4

// MATCH ALL NON-NUMBERS:
