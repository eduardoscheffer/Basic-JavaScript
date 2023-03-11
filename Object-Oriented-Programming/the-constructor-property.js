let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
// Both of these console.log calls would display true in the console.

// Note that the constructor property is a reference to the constructor function that created the instance. 
// The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:
function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
      return true;
    } else {
      return false;
    }
  };

  function Dog(name) {
    this.name = name;
  }
  
  const joinDogFraternity = (candidate) => candidate.constructor === Dog ? true: false;