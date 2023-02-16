function truncateString(str, num) {
    // the substring method returns the part of the string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied:
    let truncatedString; // cria a variável que vai receber a nova string truncada;
    if (str.length > num) { // se a string passada for maior que o limite:
      // 'truncatedString' recebe os caracteres da 'str' truncados de 0 a 'num' + as reticencias:
      truncatedString = str.substring(0, num).concat("...");
    }
    else { // se não recebe o valor da propria 'str' mesmo:
      return str;
    }
    // retorna a string truncada
    return truncatedString;
  };
  
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); // A-tisket...
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));