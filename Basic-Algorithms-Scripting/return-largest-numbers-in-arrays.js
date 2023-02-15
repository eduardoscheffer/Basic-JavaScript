function largestOfFour(arr) { // não funciona com números negativos
    // cria uma array que vai receber cada valor:
    // como se fosse um contador pra cada elemento da array;
    let biggestNumber = [0, 0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        // se o valor de cada elemento da array for maior a cada elemento da array 'biggestNumber':
        if (arr[i][j] > biggestNumber[i]) {
          // 'biggestNumber' recebe esse elemento
          biggestNumber[i] = arr[i][j];
        }
      }
    }
    return console.log(biggestNumber);
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);  // [ 5, 27, 39, 1001 ]

  largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // [27, 5, 39, 1001]
  
  largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); //[9, 35, 97, 1000000]
  
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

// using .map() and .reduce() methods:
  function largestOfFour2(arr) {
    // pra cada array aplica uma função:
    return arr.map(function (subArr) {
        // pra cada sub-array aplica uma função que retorna o maior valor:
      return subArr.reduce(function (previousLarger, currentLarger) {
        return (currentLarger > previousLarger) ? currentLarger: previousLarger;
      })
    })
  };
  
  largestOfFour2([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); 
  // [25, 48, 21, -3]