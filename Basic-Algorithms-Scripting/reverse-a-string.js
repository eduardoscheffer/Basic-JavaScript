function reversedString (str) {
    return str
    // The split() method splits a String object into an array of string by separating the string into sub strings.
    .split("") // [ 'h', 'e', 'l', 'l', 'o' ]
    // The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
    .reverse() // [ 'o', 'l', 'l', 'e', 'h' ]
    // The join() method joins all elements of an array into a string.
    .join(""); 
};

console.log(reversedString("hello")); // olleh

// SAME WAY TO REVERSE A STRING:
function reverseString(str) {
    let reversedStr = "";
    // Starting at the last character of the string passed to the function, you build a new string reversedStr from str
    for (let i = str.length - 1; i >= 0; i--) {
        // During each iteration of the for loop, reversedStr gets concatenated with itself and the current character.
        reversedStr += str[i];
    }
    // Finally, you return the final value of reversedStr.
    return reversedStr;
  };
