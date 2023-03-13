// capitalize first letter:
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`
console.log(capitalize('eduardo')) // Eduardo
const capitalize2 = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalize2('mariana')) // Mariana

// get a random element from an array:
const items = ["Nicely done!", "Good job!", "Good work!", "Correct!"];
const getRandomItem = (items) =>  items[Math.floor(Math.random() * items.length)];
getRandomItem(items); // "Good job!"

// sort an object based on a property:
const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
const lessons = [{ position: 1, name: "Intro" }, { position: 0, name: "Basics" }];
// This sortBy function uses the native sort method, compares the elements in the array based off of the provided key, and sorts the array in ascending order.
sortBy(lessons, 'position'); 
// {position: 0, name: 'Basics'},
// {position: 1, name: 'Intro'}

// check if arrays/objects are equals:
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b)
isEqual([1, '2'], [1, 2]); // false
isEqual([1, 2], [1, 2]); // true

// count the number of occorrences:
const countOccurrences = (arr, value) => arr.reduce((a, v) => (v === value ? a + 1 : a), 0);
const pollResponses = ["Yes", "Yes", "No"];
const response = "Yes";
countOccurrences(pollResponses, response); // 2

// pluck data from an array of objects
// If you need to extract data from an array of objects and are not interested in getting all the data that is returned, use the pluck function.
const pluck = (objs, key) => objs.map((obj) => obj[key]);
const users = [{ name: "Abe", age: 45 }, { name: "Jennifer", age: 27 }];
pluck(users, 'name'); // ['Abe', 'Jennifer']

// insert an element at a certain position:
const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];
// This is a great function to use instead of .splice() because it does not mutate the original array. It creates a new array with the help of the slice method, by slicing the array into two parts around the specified index and then creates a new one.
const itens = [1, 2, 4, 5];
// insert the number 3 at index 2:
insert(itens, 2, 3); // [1, 2, 3, 4, 5]
