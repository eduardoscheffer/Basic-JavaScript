// .push()
const arr1 = [1, 2, 3];
arr1.push(4);
const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2); // ["Stimpson", "J", "cat", ["hapy", "joy"]]

// .pop() is used to pop a value off of the end of an array
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown); // 6
console.log(threeArr); // [1, 4]

// .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift(); // "Stimpson"

// .unshift() works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
const myArray = ["Stimpson", "J", "cat"];
myArray.shift();
myArray.unshift("Happy");
// After the shift, ourArray would have the value ["J", "cat"]. After the unshift, ourArray would have the value ["Happy", "J", "cat"].

// Accessing Nested Arrays:
const ourPets = [
    {
      animalType: "cat",
      names: [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ]
    },
    {
      animalType: "dog",
      names: [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    }
  ];
  
  ourPets[0].names[1];
  ourPets[1].names[0];
  // urPets[0].names[1] would be the string Fluffy, and ourPets[1].names[0] would be the string Spot.