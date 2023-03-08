function rot13(str) {
  // alfabeto com todas as letras pra pegar o index de cada letra da str
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let newString = '';
  // loop na str
  for (let i = 0; i < str.length; i++) {
    // se o caracter da str não tiver em alphabet (se nao for uma letra):
    if (alphabet.indexOf(str[i]) === -1) {
      // atualiza a string com esse caracter (pode ser um espaço em branco ou um sinal de pontuação)
      newString += str[i]
    }
    else { // caso for uma letra realmente
    // cria o novo index pegando o index da letra no alfabeto e adiciona 13, fazendo com que a contagem volte ao index 0 do alfabeto com o remainder %:
      let newIndex = (alphabet.indexOf(str[i]) + 13) % 26;
      // nova string recebe o caracter do alfabeto atrelado a esse index
      newString += alphabet[newIndex];
    }
  }
  return newString; // retorna a nova string decifrada;
}

console.log(rot13("SERR PBQR PNZC"));