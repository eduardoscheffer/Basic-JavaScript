function fearNotLetter(str) {
  // usar UNICODE
  let array = str.split('');
  let first = array[0].charCodeAt(0); // 97 === 'a'; 98 === 'b' ...;
  for (let i = 0; i < array.length; i++) {
    // se o proximo valor UNICODE da array não for igual ao valor UNICODE da atual iteração, retorna o valor do proximo caracter como string;
    if (first + i !== array[i].charCodeAt(0)) {
        // na 3ª iteração (i = 3):
          // first + 1 == 100 e array[3].charCodeAt(0) é 101:
      return String.fromCharCode(first + i); // 'd'
    }
  }
}

console.log(fearNotLetter("abce")); // d