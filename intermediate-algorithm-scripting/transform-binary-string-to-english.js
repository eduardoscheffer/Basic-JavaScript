function binaryAgent(str) {
  let binArr = str.split(" ");
  let binCode = [];
  for (let i = 0;i < binArr.length; i++) {
    binCode.push(String.fromCharCode(parseInt(binArr[i], 2)));
  }
  return binCode.join("");
}

// O método String.fromCharCode() retorna uma string criada ao usar uma sequência específica de valores Unicode.
String.fromCharCode(65, 66, 67);  // retorna "ABC"

// A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
console.log(parseInt("1111", 2)); // 15

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// Aren't bonfires fun!?