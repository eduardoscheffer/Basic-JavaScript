// Nesting For Loops:
function multiplyAll (arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) { // iterate through the index of the array
        for (let j = 0; j < arr[i].length; j++) { // iterate trhough teh indexes of the index of the array
            product *= arr[i][j];
        }
    }
    return product;
}

let array = [[1,3], [2, 2], [6, 2]];
console.log(multiplyAll(array)); // 144
