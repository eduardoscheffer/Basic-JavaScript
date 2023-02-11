// Iterate with JS DO...WHILE loop:
// The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
// Essentially, a do...while loop ensures that the code inside the loop will run at least once
const myArray = [];
let i = 0;

do {
    myArray.push(i);
    i++;
} while (i <= 10);

console.log(myArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let j = 0;
do {
    myArray.push(j);
    j++;
} while (j >= 0 && j <= 15);

console.log(myArray); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
