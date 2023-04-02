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

  function titleCase2(str) {
    let newString = [];
    str = str.split(' ')
    for (let word of str) {
      word = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
      newString.push(word);
    }
    return newString.join(' ');
  }
  
  console.log(titleCase2("I'm a little tea pot"));

  function titleCase3(str) {
    let newString = [];
    str.split(' ').forEach(el => {
      newString.push(el[0].toUpperCase() + el.slice(1).toLowerCase());
    })
    return newString.join(' ');
  }
  
  console.log(titleCase3('sHoRt AnD sToUt')); // Short And Stout