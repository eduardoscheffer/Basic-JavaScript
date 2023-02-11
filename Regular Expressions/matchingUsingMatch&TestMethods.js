// Matching using .test()and .match() method:
let myString = "freeCodeCamp";
let fccRegex = /FREECODECAMP/i; // "i" flag ignores case
let result = fccRegex.test(myString);
console.log(result); // true

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // flag "g" extract a pattern more than once 
let result = twinkleStar.match(starRegex); 
console.log(result) // [ 'Twinkle', 'twinkle' ];
// -------------------------- //

// Extract Matches:
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
console.log(result) /*[ 'coding',
  index: 18,
  input: 'Extract the word \'coding\' from this string.',
  groups: undefined ] */

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
console.log("Hello, World!".match(/Hello/));/* [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]*/
console.log(ourStr.match(ourRegex)); /*[ 'expressions',
  index: 8,
  input: 'Regular expressions',
  groups: undefined ] */
  // ------------------------------- //
  
// Match Single Character with Multiple Possibilities:
// For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u:
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
// In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

// find all the vowels in the string quoteSample:
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);
console.log(result);
// --------------------------------------- //

// Match Numbers and Letters of the Alphabet:
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // matches a range of letters between "h" and "s" and a range of numbers between "2" and "6";
let result = quoteSample.match(myRegex);
console.log(result);
// ---------------------------- //

// set of characters that you do not want to match:
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // // not match vowels and any numbers
let result = quoteSample.match(myRegex);
console.log(result); // [ ' ', 'b', 'l', 'n', 'd', ' ', 'm', 'c', '.' ];
// ---------------------------- //

// Match All Letters and Numbers:
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
// All four of these test calls would return true. //
// Match Everything But Letters and Numbers:
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
// The first match call would return the value ["%"] and the second would return ["!"] //
// ----------------------------------------- //
// RESTRICT POSSIBLE USERNAMES:
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
console.log(result); // true;
/* 
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
*/
// -------------------------- //

// REMOVE WHITESPACES FROM START AND END
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$|\s+(?=\s)/g;
let result = hello.replace(wsRegex, "");
console.log(result); // Hello, World!
// ---------------------------- //
