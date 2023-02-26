function dropElements(arr, func) {
  // retorna o index do primeiro elemento que satisfaz a função
  let indexToDrop = arr.findIndex(func); 
  // retorna uma copia da array a partir do index que satisfaz a função
  return arr.slice(indexToDrop >= 0 ? indexToDrop: arr.length);
}

console.log(dropElements([1, 2, 3, 4, 5], function(n) {return n >= 3; }));