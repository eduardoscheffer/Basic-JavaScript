function getIndexToIns(arr, num) {
    arr.push(num); // adiciona num na array;
    arr.sort((a,b) => { return a - b }); // ordena a array em ordem crescente corretamente
    return arr.indexOf(num);
  };

  // Para comparar números ao invés de texto, a função de comparação pode simplesmente subtrair b de a. A função abaixo irá ordenar o array em ordem crescente:
  
  console.log(getIndexToIns([40, 60], 50)); // 1
  console.log(getIndexToIns([5, 3, 20, 3], 5)); // 2
  console.log(getIndexToIns([2, 5, 10], 15)); // 3
  