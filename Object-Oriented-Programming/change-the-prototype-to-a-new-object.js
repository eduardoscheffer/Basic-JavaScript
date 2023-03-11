function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  describe: function() {
    return "My name is " + this.name;
  },
  eat: function() {
    return "nom nom nom";
  }
};

let terrier = new Dog("Shoyo");
console.log(terrier); // { name: 'Shoyo' }
console.log(terrier.describe()); // My name is Shoyo
console.log(terrier.eat()); // nom nom nom