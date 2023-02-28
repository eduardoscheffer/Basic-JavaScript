function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = []; // array que vai receber novos dados (novo objeto)
  for (let property in arr) { // loop through arr
  // calculo do periodo orbital
    const orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[property].avgAlt, 3) / GM));
    // cria um novo objeto com a mesma propriedade de arr.name e com o novo periodo orbital calculado
    newArr.push({name: arr[property].name, orbitalPeriod: orbitalPer})
  }
  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));






// UTILIZANDO forEach pra iterar na array
// ESSE MÉTODO MODIFICA A arr FORNECIDA NA FUNÇÃO!! DIFERENTEMENTE DO MÉTODO ANTERIOR QUE RETORNA UMA NOVA ARR.

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr.forEach(function(obj) { // loop through the array, forEach obj
    // adiciona a propriedade orbitalPeriod e o seu value é o resultado do calculo:
    obj.orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM));
    // deleta a propriedade avgAlt:
    delete obj.avgAlt;
  })
  // retorna a arr modificada:
  return arr;
};

let arr = [{name : "sputnik", avgAlt : 35873.5553}]
orbitalPeriod(arr);
console.log(arr); // [ { name: 'sputnik', orbitalPeriod: 86400 } ]