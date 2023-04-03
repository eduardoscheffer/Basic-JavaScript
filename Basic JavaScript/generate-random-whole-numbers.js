Math.floor(Math.random() * max - min + 1) + min;

// use parseInt function:
const a = parseInt("007"); // converst the string 007 to the integer 7

// GENERATE RANDOM ARRAY:
function randomArr (elements, min = 0, max = 100) {
    let newArr = [];
    for (let i = 0; i < elements; i++) {
      newArr.push(Math.floor(Math.random() * max - min + 1) + min);
    }
    return newArr;
  }
  
  const randomArray = randomArr(10);
  console.log(randomArray); // [ 11, 6, 7, 15, 11, 7, 16, 18, 6, 11 ]
  