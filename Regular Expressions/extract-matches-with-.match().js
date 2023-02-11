// EXTRACT MATCHES
//  You can also extract the actual matches you found with the .match() method.
// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

// Here's an example:
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Here the first match would return ["Hello"] and the second would return ["expressions"].
// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
'string'.match(/regex/);
/regex/.test('string');


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result1 = extractStr.match(codingRegex);
console.log(result1);
/*
Output:
[ 'coding',
  index: 18,
  input: 'Extract the word \'coding\' from this string.',
  groups: undefined ]
*/ 

// search or extract a pattern more than once:
let testStr = "Repeat, Repeat, Repeat";
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// And here match returns the value ["Repeat", "Repeat", "Repeat"]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // procura varias vezes(flag 'g') pela palavra twinkle independente da case(flag 'i').
let result2 = twinkleStar.match(starRegex);