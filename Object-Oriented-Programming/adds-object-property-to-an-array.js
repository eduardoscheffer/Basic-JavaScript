// The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
// The console would display the value ["name", "numLegs"].


// Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
// Here is how you add duck's own properties to the array ownProps and prototype properties to the array prototypeProps:
let ownProps2 = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps2.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps2);
console.log(prototypeProps);
// console.log(ownProps) would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4; // creates a prototype of Dog

let beagle = new Dog("Snoopy");

console.log(beagle); // { name: 'Snoopy' }
console.log(beagle.numLegs); // 4

let ownProps3 = [];
let prototypeProps2 = [];
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps3.push(property);
  }
  else {
    prototypeProps3.push(property)
  }
};

console.log(ownProps2); // ['name];
console.log(prototypeProps3); // ['numLges']