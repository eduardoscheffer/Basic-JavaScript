function sumFibs(num) {
  let fibArr = [];
  function fibonacci (num) { // função que cria uma array com os valores fibonacci:
    let x = 0;
    let y = 1;
    while (true) {
        fibArr.push(x);
        let z = x + y;
        x = y;
        y = z;
        if (x > num) {
            break;
        }
    }
}
  // dispara a função fibonacci:
  fibonacci(num); // fibArr = [ 0, 1, 1, 2, 3, 5 ]
  // filtra a array pra pegar so os impares, e retorna a soma deles:
  return fibArr.filter((n) => n % 2 == 1).reduce((acum, curr) => acum + curr);
};

console.log(sumFibs(4))
  
