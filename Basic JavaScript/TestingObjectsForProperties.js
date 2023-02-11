var myObj = {
    gift: 'pony',
    pet: 'kitten',
    bed: 'sleigh',
};

function checkObj (checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    }
    else {
        return "Not Found";
    }
}
// Se "myObj" tem a propriedade "checkProp", retorna a "checkProp" da "myObj". 
console.log(checkObj('pet')); // kitten
