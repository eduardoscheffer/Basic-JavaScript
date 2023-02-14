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
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms')); // mushrooms