function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
      // salva o index de elem na variavel:
      const index = arr[i].indexOf(elem);
      // corta fora cada index que contém o elem:
      arr[i].splice(index, 1);
      newArr.push(arr[i])
    }
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  // [ [ 2, 3 ], [ 1, 6 ], [ 13, 26 ], [ 19, 9 ] ]

  // função que tira qualquer nested array de uma array, se contiver um elemento especifico nessas nested arrays:
  // return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));