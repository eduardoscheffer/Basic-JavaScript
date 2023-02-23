// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source); // ['last']
  return collection
  .filter(obj => sourceKeys // obj é cada objeto de collection
  .every(key => obj.hasOwnProperty(key) && obj[key] == source[key] )); // 'key' nesse caso é 'last';
      //'last' => obj.hasOwnProperty('last') && obj['last'] == source['last'];
};



console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })); // [ { first: 'Tybalt', last: 'Capulet' } ] 