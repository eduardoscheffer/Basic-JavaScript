// JavaScript provides us with two different ways to do this. One uses the hasOwnProperty() method and the other uses the in keyword. If we have an object users with a property of Alan, we could check for its presence in either of the following ways:

users.hasOwnProperty('Alan'); // true
'Alan' in users; // true


// it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
   return userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan");
  }
  
  console.log(isEveryoneHere(users)); // true
  
  // writing the same function using .every():
  function isEveryoneHere2(userObj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      userObj.hasOwnProperty(name)
    );
  };
  /*
  Uses an array with all of the names which should be present in the object.
  The every method is used to validate all of names used in conjunction with the hasOwnProperty method result in a value of true being returned during each iteration.
  If at least one name is not found using the hasOwnProperty method, the every method returns false.
  */