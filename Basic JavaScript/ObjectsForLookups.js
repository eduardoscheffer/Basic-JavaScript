function phoneticLookup (val) {
    let result = "";
    let lookUp = {
        'alpha': 'Adams',
        'bravo': 'Boston',
        'charlie': 'Chicago',
        'delta': 'Denver',
        'echo': 'Easy',
        'foxtrot': 'Frank',
    }
    result = lookUp[val];
    return result;
};

console.log(phoneticLookup('alpha')) // "Admas";
console.log(phoneticLookup('bravo')) // "Boston";