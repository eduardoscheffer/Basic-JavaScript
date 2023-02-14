// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true


// O exemplo a seguir testa se todos elementos no array são maiores que 10.
[12, 5, 8, 130, 44].every(elem => elem >= 10); // false
[12, 54, 18, 130, 44].every(elem => elem >= 10); // true