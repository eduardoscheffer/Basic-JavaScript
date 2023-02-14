const users1 = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }

//   Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a for...in statement. For our users object, this could look like:

for (let user in users1) {
  console.log(user);
};
// Expected output:
// Alan
// Jeff
// Sarah

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  
  //  Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to true
  function countOnline(usersObj) {
    let counter = 0;
    for (let user in usersObj) {
      if (usersObj[user].online === true) {
        counter +=1;
      }
    }
    return counter;
  }
  
  console.log(countOnline(users)); // 1