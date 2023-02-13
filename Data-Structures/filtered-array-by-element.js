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