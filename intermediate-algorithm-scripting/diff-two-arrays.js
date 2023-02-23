// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  const newArr = [];

  function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
    for (let i = 0; i < first.length; i++) {
      // se o elemento do 1º arr não tiver no 2º arr, coloca pra newArr:
      if (second.indexOf(first[i]) === -1) {
        // na 2 call de onlyInFirst([1,2,3,4 [1,2,3]]):
        // [1,2,3,5].indexOf(4) vai retornar -1, pois [4] não existe em [1,2,3,5]
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]