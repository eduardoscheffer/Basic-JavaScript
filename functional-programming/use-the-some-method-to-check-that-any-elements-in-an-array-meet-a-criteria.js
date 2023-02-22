// Array.prototype.some() method works exactly like the every method, but in this case it's not 'every' element that has to pass the criteri, it's at least 1 - any element;

function checkPositive(arr) {
  return arr.some(num => num > 0)
}

checkPositive([1, 2, 3, -4, 5]);