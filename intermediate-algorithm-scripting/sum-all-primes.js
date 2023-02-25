function sumPrimes(num) {
  let primeNum = []; // array que vai receber os numeros primos
  for (let i = 2; i <= num; i++) { // loop de repetição iniciando em 2 e indo até num;
    if (primeNum.every((prime) => i % prime !== 0)) // se for primo push pra array
      primeNum.push(i);
  }
  return primeNum.reduce((acum, curr) => acum + curr); // metodo reduce pra somar os elementos da array;
}

console.log(sumPrimes(10)); // somando [ 2, 3, 5, 7 ] == 17;