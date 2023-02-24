function myReplace(str, before, after) {
  // se a primeira letra de before começar com maiuscula e after com minuscula, atualiza after pra ser maiuscula a primeira letra:
  if(before[0] === before[0].toUpperCase() && after[0] === after[0].toLowerCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  // se a primeira letra de before começar com minuscula e after com maiuscula, atualiza after pra ser minuscula:
  else if (before[0] === before[0].toLowerCase() && after[0] === after[0].toUpperCase()) {
    after = after[0].toLowerCase() + after.slice(1);
  }
  // return (`${before}, ${after}`)
  // replace onde é before por after:
  return str.replace(before, after)
}

console.log(myReplace("His name is Tom", "Tom", "john"));

console.log(myReplace("I think we should look up there", "up", "Down"));