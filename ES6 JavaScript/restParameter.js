// Rest Parameter (...args):
// Rest parameters foram criados para reduzir o código padrão que foi induzida pelos argumentos
const args = (...args) => console.log(args);
args(5, 3); // [5, 3]
args(10, 5, 4, 6); // [10, 5, 4, 6]
args(10, 
    "Eduardo", 
    true, 
    {
      name: "Mariana",
      age: 25
    },
    NaN
    ); // [ 10, 'Eduardo', true, { name: 'Mariana', age: 25 }, NaN ]

const sum = (...args) => {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
};
console.log(sum(1,2,3)); // 6;

const countArgs = (a, b, ...manyMore) => {
    console.log('a', a);
    console.log('b', b);
    console.log('many more args', manyMore);
};
countArgs('one', 'two', 3, 4, 5, 6, 7, 8, 9); 
// a,"one"
// b,"two"
// many more args,[3, 4, 5, 6, 7, 8, 9];
// In this example, the first argument is mapped to a and the second to b, so these named arguments are used as normal.
// However, the third argument, manyMoreArgs, will be an array that contains the third, fourth, fifth, sixth, …, nth — as many arguments that the user includes.

const howMany = (um, dois, tres, ...args) => {
    console.log(`${um} ${dois} ${tres} e mais ${args.length} elementos`);
};
howMany(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15); // 1 2 3 e mais 12 elementos;
howMany('Eduardo', 'Mengue', 'Scheffer', 1, 2, 3, 4, 5); // Eduardo Mengue Scheffer e mais 5 elementos
