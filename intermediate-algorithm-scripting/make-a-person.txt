const Person = function(firstAndLast) {
  let fullName = firstAndLast
  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function () {
    return fullName.split(' ')[0];
  }
  this.getLastName = function () {
    return fullName.split(' ')[1];
  }
  this.setFirstName = function (first) {
    fullName = first + " " + fullName.split(' ')[1];
  }
  this.setLastName = function (last) {
    fullName = fullName.split(' ')[0] + " " + last;
  }
  this.setFullName = function (newName) {
    fullName = newName;
  }
  return firstAndLast;
};

const bob = new Person('Bob Ross');
console.log(bob.getFullName()) // Bob Ross
console.log(bob instanceof Person) // true
console.log(bob.getFirstName())// Bob
console.log(bob.getLastName()) // Ross
// bob.setFirstName("Edu")
console.log(bob.getFullName()) // Edu Ros
