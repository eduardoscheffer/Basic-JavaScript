// .map()
    // O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

    // arr.map(callback[, thisArg])
    var numbers = [1, 4, 9];
    var roots = numbers.map(Math.sqrt);
    // roots é [1, 2, 3], numbers ainda é [1, 4, 9]

// .filter()
    // O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
    // var newArray = arr.filter(callback[, thisArg])
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // Expected output: Array ["exuberant", "destruction", "present"]

// .reduce()
    // O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
    const array1 = [1, 2, 3, 4];
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );
    console.log(sumWithInitial);
    // Expected output: 10

    // Using the restParameter:
    const sum = (...args) => {
        const arr = [...args];
        return arr.reduce((a, b) => a + b, 0);
      };  
    console.log(sum(1, 2, 3, 4)); // 10