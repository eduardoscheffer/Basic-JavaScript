function addTogether(...args) {
  const [first, second] = args;
  // se so for passado um argumento pra função:
  if (args.length === 1 && typeof first === 'number') {
    // retorna uma função de argumento (num) que vai esperar pra ser disparada:
    return num => {
      if (typeof num === 'number') {
        return first + num;
      }
    }
  }
  // se nao retorna a soma de first com second
  if (typeof first === 'number' && typeof second === 'number') {
    return first + second;
  }
}

// passo a passo de como vai funcionar o currying function:
// a variavel sumTwoAnd recebe a função com 1 argumento e agora se torna não uma variavel, mas uma função com um valor (first) e um argumento (num) esperando pra ser disparado:
let sumTwoAnd = addTogether(2); // sumTwoAnd recebe 2 e se torna uma function(num) aguardando pra ser invocada

sumTwoAnd(3); // vai retornar 5

let soma = sumTwoAnd(3);
console.log(soma); // 5

let soma2 = sumTwoAnd(48);
console.log(soma2); // 50