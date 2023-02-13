//  Luckily, JavaScript provides us with another built-in method, indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');

// indexOf('dates') returns -1, indexOf('oranges') returns 2, and indexOf('pears') returns 1

// função que retorna true/false se um elemento está em uma array
const quickCheck = (arr, elem) => {
    return arr.indexOf(elem) != -1 ? true: false;
}
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));



  // função que tira qualquer nested array de uma array, se contiver um elemento especifico nessas nested arrays:
  // return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));