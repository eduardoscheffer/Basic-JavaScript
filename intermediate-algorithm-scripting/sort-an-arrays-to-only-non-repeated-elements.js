function uniteUnique(arr) {
  let args = [...arguments]; // variavel que recebe todos os argumentos da função
  let result = []; // variável que vai receber todos os elementos diferentes
  for (let i = 0; i < args.length; i ++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) { // se result não tiver args[i][j];
        result.push(args[i][j]);
      }
    }
  }
  return result;
}



console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [ 1, 3, 2, 5, 4 ]

function uniteUnique2(arr) {
  let result = []; // variavel que vai receber os elementos não repetidos das arrays;
  for (let i of arguments) { // (for let = 0; i < args.length; i++)
    for (let k of i) { // for (let j = 0; j < args[i].length; j++)
      if (result.indexOf(k) === -1) { // se result não incluir o elemento da iteração;
        result.push(k);
      }
    }
  }
  return result;
};

console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [ 1, 3, 2, 5, 4 ]