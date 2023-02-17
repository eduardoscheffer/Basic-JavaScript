function booWho(bool) {
    if (typeof bool === typeof true) {
      return true;
    }
    else {
      return false
    }
  }
  
  // O operador typeof retorna uma string indicando o tipo de um operando:
  // if typeof bool is equal to 'boolean' return true:
  const booWho2 = bool => 'boolean' === typeof bool;
  
  console.log(booWho(true)); // true
  
  console.log(booWho2(true)); // true
  
  console.log(booWho('false')); // false
  
  console.log(booWho('true')); // false
  