const myFunc1 = function() {
    const myVar = "value";
    return myVar;
}
// same way to write the functin above:
const myFunc2 = () => {
    const myVar = "value";
    return myVar;
};
// same way to write those same functions above
const myFunc3 = () => "value";

// arrow functions with parameter:
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // 8

// Concatenando duas arrays:
function concatenando (arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(concatenando([1,2], [3,4])); // [1, 2, 3, 4]

// usando arrow functions com parâmetros pra concatenar duas arrays:
const myConcat = (arr1, arr2) => arr1.concat(arr2); // arrow function
console.log(myConcat([5,6], [7,8])); // [5, 6, 7, 8]

const myName = (name, lastName) => `The is my name: ${name + ' ' + lastName}. `;
console.log(myName('Eduardo', 'Scheffer')); // The is my name: Eduardo Scheffer.