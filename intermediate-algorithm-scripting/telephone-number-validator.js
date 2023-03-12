// for complex and not complex regex: https://regex101.com/

function telephoneCheck(str) {
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
    return regex.test(str)
  }
  
  console.log(telephoneCheck("555-555-5555")); // true
  console.log(telephoneCheck("2(757)6227382")); // false
  console.log(telephoneCheck("1 (555) 555-5555")); // true

//   /^1?\s? = começa por um 1 ou espaço no começo opcionais;
// (\d{3}|\(\d{3}\)) = seguido de 3 digitos ou 3 digitos em parenteses;
// -?\s? = seguido por um traço opcional ou um espaço opcional
// \d{3} = seguido por 3 digitos;
// -?\s? = seguido por um traço opcional e um espaço opcional
// \d{4}$ = seguido e finalizado por 4 digitos
// /gm = g de global (não retorna depois do primeiro match), m de multi-line;