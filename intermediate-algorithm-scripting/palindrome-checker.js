function palindrome(str) {
  // criando uma string1
  // remove qualquer coisa que não seja numero ou caracter ou espaço em branco e converte pra minusculo:
  let string1 = str.replace(/[^a-zA-Z0-9 ]|\s+/g, '').toLowerCase();
  // criando uma string2 igual string1 mas inversa pra comparação
  let string2 = string1
  .split('') // splita em uma array
  .reverse() // reverte os elementos
  .join('') // devolve a array pra ser uma string
  .toLowerCase(); // pra minusculo
  return string1 === string2 ? true: false;
}

console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("My age is 0, 0 si ega ym.")); // true