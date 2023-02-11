// Using character classes, you were able to search for all letters of the alphabet with [a-z]. This kind of character class is common enough that there is a shortcut for it, although it includes a few extra characters as well.
// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // true
shortHand.test(numbers); // true
longHand.test(varNames); // true
shortHand.test(varNames); // true

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result); // 31


// MATCH EVERYTHING BUT LETTERS AND NUMBERS:
// You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

let shortHand2 = /\W/;
let numbers2 = "42%";
let sentence = "Coding!";
numbers.match(shortHand1);
sentence.match(shortHand2);
// The first match call would return the value ["%"] and the second would return ["!"].

let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
let result2 = quoteSample2.match(nonAlphabetRegex);
console.log(result2); // [ ' ', ' ', ' ', ' ', ' ', '.' ]