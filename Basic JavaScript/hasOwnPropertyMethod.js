// Testing Objects for Properties:
const myObj = {
    top: "hat",
    bottom: "pants"
};
console.log(myObj.hasOwnProperty("top")); // true
console.log(myObj.hasOwnProperty("middle")); // false

let obj = {
    "gift": "pony",
    "pet": "kitten",
    "bed": "sleigh"
  }

function checkObj (obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found"
    }
}
console.log(checkObj(obj, 'gift')); // pony;