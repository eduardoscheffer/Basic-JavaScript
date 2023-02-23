function destroyer(arr, ...args) {
  // console.log(args); // [ 2, 3 ]
  // console.log(arr); // [ 1, 2, 3, 1, 2, 3 ]
  // console.log(args[0]); // 2
  // console.log(args[1]); // 3
  return arr.filter(elem => !args.includes(elem))
  // filtra a arr (se args NÃO inclui o elem da arr), retorna (filtra) só os elementos da arr que não estão em args; 
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// [ 1, 1 ]

console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // [ 'hamburger' ]


// OBS: CASO QUEIRA RETORNAR SÓ OS ELEMENTOS DE ARGS QUE ESTÃO NA ARR, BASTA REMOVER '!' DA FUNÇÃO destroyer();