let myFirstName = "eduardo"
let myLastName = "scheffer"
const populacao = {
  macho: 4,
  femea: 93,
  outros: 10
};

// seta outros pra ser 100
populacao.outros = 100

// iteração em população que pega cada key e guarda na variavel generos no formato de array
let generos = Object.keys(populacao);
console.log(generos); // [ 'macho', 'femea', 'outros' ]
generos.forEach(gen => console.log(gen));

generos.forEach(gen => console.log(`Há ${populacao[gen]} ${gen}`))

// SOMA TODOS OS GENEROS DA POPULAÇÃO USING Object.keys()
function sumPop (obj) {
  let totalPop = 0; // contador
  generos = Object.keys(obj); // array generos que recebe cada key de obj
  generos.forEach(gen => totalPop += obj[gen]) // loop na array que soma cada valor em totalPop
  return totalPop;
};

console.log(sumPop(populacao)) // 197

// SOMA TODOS OS GENEROS DA POP USING Object.values
const sumUp2 = (obj) => {
  let sum = 0;
  let numbers = Object.values(obj);
  numbers.forEach(num => sum += num);
  return sum;
};

console.log(sumUp2(populacao)); // 107