function confirmEnding(str, target) {
    // str.slice(-target.length) gets the very last character
    // If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
    // console.log(str.slice(-target.length)) // 'nothing'
    return (str.slice(-target.length) === target) ? true
    : false; 
  }
  
  confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");

  // string.prototype.endsWith() does that for us:
  function confirmEnding(str, target) {
    return str.endsWith(target);
  };