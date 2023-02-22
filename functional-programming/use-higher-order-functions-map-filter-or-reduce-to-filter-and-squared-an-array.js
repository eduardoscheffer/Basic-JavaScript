const squareList = arr => {
  return arr
  .filter(num => Number.isInteger(num) && num > 0) // filtra arr pra pegar só numeros positivos e Integers;
  .map(num => num * num); // aplica uma função callback pra cada elemento dessa array filtrada;
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers); // [ 25, 9 ]