function findLongestWordLength(str) {
    let string = str.split(" "); // splita a string em uma array separada por cada espaço;
    let longestWord = 0; // inicia um contador pra cada palavra(elemento da array);
    for (let i = 0; i < string.length; i++){
      // se o tamanho da palavra de cada iteração for maior que 'longestWord', 'longestWord' recebe o tamanho dessa palavra:
      if (string[i].length > longestWord) {
        longestWord = string[i].length;
      }
    }
    // retorna o valor dessa variavel:
    return longestWord;
  };
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6

  function findLongestWord(str) {
    // split the string into an array separated by one empty space
    let strArray = str.split(" ");
    // organiza (sort) a array do maior length pro menor length:
    let sortedArray = strArray.sort((a,b) => {
      return b.length - a.length;
    });
    return sortedArray[0];
  };
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped
  console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology")); // otorhinolaryngology