// Using Recursion to crate a factorial of a number function:
function factorialOf (number) {
    let total = number;
    if (number === 1) {
        return 1;
    }
    else {
        total *= factorialOf(number - 1);  
    }
    return total;
};
console.log(factorialOf(5)); // 120

// Replace Loops using Recursion;
function sum (arr, n) {
    if (n <= 0) {
        return 0; // base case (pra não deixar a função infinita)
    } else {
        return sum(arr, n-1) + arr[n-1]; // ex: sum (arr,6) === sum(arr, 5) + arr[5];
    }    
}; // sum(arr, n) == sum(arr, n - 1) + arr[n - 1];

console.log(sum([0, 1, 2, 3, 4, 5, 6, 7, 8], 9)); // 36 
// Using recursion to create a countdown:
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
    
    /*
    return n < 1 ? [] : [n].concat(countdown(n - 1));
    */
  }
  console.log(countdown(10)) // [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];

// USE RECURSION TO CREATE A COUNTUP:
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5)); // [1, 2, 3, 4, 5]
  /*
  countup(5):
    n = 5;
    countArray = countup (4):
                    n = 4;
                    countArray = countup(3):
                                    n = 3;
                                    countArray = countup(2):
                                                    n = 2;
                                                    countArray = countup(1):
                                                                    n = 1;
                                                                    countArray = countup(0) = []
                                                                    countArray.push(1);
                                                                    return countArray; // [1]
                                                                  
                                                      

  */

// USE RECURSION TO CREATE A RANGE OF NUMBERS:
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      let numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
  console.log(rangeOfNumbers(1, 5)); // [1, 2, 3, 4, 5];

  function rangeOfNumbers(startNum, endNum) {
    // first the base case:
    // if (startNum === endNum + 1) {
    //   return [];
    // }
    // else {
    //   const myArr = rangeOfNumbers(startNum + 1, endNum);
    //   myArr.unshift(startNum);
    //   return myArr;
    // }
  
    return startNum === endNum + 1 ? [] : [startNum].concat(rangeOfNumbers(startNum + 1, endNum))
  };
  
  console.log(rangeOfNumbers(6, 9)); // [ 6, 7, 8, 9 ]