function sumAll(arr) {
    // se o numero maior tiver a esquerda, temos que arrumar a array:
    if(arr[0] > arr[1]) 
      arr.sort((a, b) => a - b) // retorna a array ordenada
    let newArr = [] // nova array pra receber os parametros de arr[0] até arr[1]
    for (let i = arr[0]; i <= arr[1]; i++) {
      newArr.push(i); // [ 1, 2, 3, 4 ]
    }
    return newArr.reduce((acum, curr) => acum + curr); // soma os itens da newArr
  }
  
  console.log(sumAll([1, 4])); // == 1 + 2 + 3 + 4 = 10;
  console.log(sumAll([10, 5])); // == 5 + 6 + 7 + 8 + 9 + 10 = 45