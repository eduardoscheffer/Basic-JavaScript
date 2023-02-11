// Set default parameters to functions:
const greetings = (name = "Default") => console.log(`Hello ${name}`);

greetings(); // Hello Default;
greetings("Eduardo"); // Hello Eduardo;

// It will add 1 to number if value is not specified:
const increment = (number, value = 1) => number + value;

console.log(increment(4)); // 5
console.log(increment(4, 1)); // 5