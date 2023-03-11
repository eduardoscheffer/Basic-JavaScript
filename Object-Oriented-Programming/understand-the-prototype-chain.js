function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle));  // yields true


console.log(Object.prototype.isPrototypeOf(Dog.prototype));
//  This is an example of the prototype chain. In this prototype chain, Dog is the supertype for beagle, while beagle is the subtype. Object is a supertype for both Dog and beagle. Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.