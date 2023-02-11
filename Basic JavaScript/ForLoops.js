let myArrayUsingFor = [];
for (let i = 0; i <= 10; i++) {
     myArrayUsingFor.push(i);
};
console.log(myArrayUsingFor); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myArrayUsingWhile = [];
let i = 0;
while (i <= 10) {
    myArrayUsingWhile.push(i);
    i++;
};
console.log(myArrayUsingWhile); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// FOR LOOP WITH ODD NUMBERS 
let myArrayWithOddNumbers = [];
for (let i = 0; i <= 20; i+=2) {
    myArrayWithOddNumbers.push(i);
};
console.log(myArrayWithOddNumbers); // [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// FUNÇÃO USANDO FOR QUE RETORNA A SOMA DA myArrayWithOddNumbers 

function somaDaArray (array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
};

console.log(somaDaArray(myArrayWithOddNumbers)); // 110

let arrayTeste = [0, 1, 9];
function somaUsingForIn (array) {
    let total = 0;
    for (let i in array) {
        total += array[i];
    };
    return total;
};

console.log(somaUsingForIn(myArrayWithOddNumbers)); // 110
console.log(somaUsingForIn(arrayTeste)); // 10

// ITERATE THROUGH AN ARRAY WITH FOR LOOP:
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
};
console.log(total) // 20;