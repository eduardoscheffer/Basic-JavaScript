function repeatStringNumTimes(str, num) {
    let newArr = "";
    if (num < 0) {
      return newArr;
    }
    else {
      for (let i = 0; i < num; i++) {
        newArr = newArr.concat('', str);
      }
    }
    return newArr;
  }
  
  console.log(repeatStringNumTimes("abc", 3)); // abcabcabc

  // using the string.prototype.repeat() method:
  function repeatStringNumTimes(str, num) {
    return str.repeat(num);
  }
  
  console.log(repeatStringNumTimes("*", 3)); // ***