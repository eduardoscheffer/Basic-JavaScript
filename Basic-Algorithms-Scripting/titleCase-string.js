// Return the provided string with the first letter of each word capitalized. The rest of the word is in lower case

function titleCase(str) {
    return str.toLowerCase() // coloca toda a string pra lowercase;
    .split(" ") // converte a string em uma array separada por 1 espaço;
    .map((word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase())) // invoca uma função callback pra cada elemento (string nesse caso) da array que substitui o primeiro elemento por um valor igual a ele so que maiusculo;
    .join(' '); // devolve a array para ser uma string separar por 1 espaço;
  }
  
  console.log(titleCase("I'm a little tea pot"));
  // I'm A Little Tea Pot
  
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
  // Here Is My Handle Here Is My Spout