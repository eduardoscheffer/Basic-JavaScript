// Destructuring assignment:
// TO EXTRACT VALUES FROM OBJECTS:
const user1 = { name1: 'John Doe', age1: 34 };
const user2 = {name2: 'Eduardo', age2: 24}

const {name1, age1} = user1; // name1 = user1.name1;
const {name2, age2} = user2; // name2 = user2.name2;

console.log(name1 + " " + age1); // John Doe 34
console.log(name2 + " " + age2); // Eduardo 24;

const HIGH_TEMPERATURE = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow, yesterday} = HIGH_TEMPERATURE;
console.log(today);
console.log(tomorrow);
console.log(yesterday); // === console.log(HIGH_TEMPERATURE.yesterday)
// OUTPUT: 77; 80; 75

// USE DESTRUCTURING ASSIGNMENT TO ASSIGN VALUES FROM OBJECTS:
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
 
const {yesterday: highYesterday} = HIGH_TEMPERATURES; // nova variável highYesterday = HIGH_TEMPERATURES.yesterday;
const {today: highToday} = HIGH_TEMPERATURES; // nova variável highToday = HIGH_TEMPERATURES.today
 
console.log(highToday);
console.log(highYesterday);
//OUTPUT: 77; 75
console.log(HIGH_TEMPERATURES.tomorrow) // 80

// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowOfToday, high: highOfToday}} = LOCAL_FORECAST ;

console.log(lowOfToday); // 64
console.log(highOfToday); // 77

// Use Destructuring Assignment to Assign Variables from Arrays:
// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1 2 5

// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a:
let x = 8, y = 6;
[x, y] = [6, 8]
console.log(x); // 6
console.log(y); // 8

let [h, i, j] = [1, 2, "eduardo"];
console.log(j); // eduardo

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

// USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION’S PARAMETERS:
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;
console.log(half(stats)); // 28.15
console.log((stats.max + stats.min) / 2); // 28.15
 
/* MESMA COISA QUE:
function half (stats1, stats2) {
  let calc
  calc = (stats1 + stats2) / 2.0;
  return calc;
}
 
console.log(half(stats.max, stats.min));
*/
