function findElement(arr, func) {
    // The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
    return arr.find(func);
  }
  
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); // 2;
  
  console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })); // 8