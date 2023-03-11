// Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + this.name + ".";}
    // this is a deep topic, and the above example is only one way to use it. In the current context, this refers to the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read
  };

duck.sayName();

// The example adds the sayName method, which is a function that returns a sentence giving the name of the duck

