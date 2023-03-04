function convertToRoman(num) {
  // criando a tabela de numeros romanos:
  const lookUpRomans = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };
  // criando o acumulador que vai receber as letras e retornar a string completa:
  let romanString = '';

  // loop na tabela de numeros romanos:
  for (const key in lookUpRomans) {
    const value = lookUpRomans[key];
    // enquanto value do objeto for menor ou igual ao num passado:
    while (value <= num) {
      // desconta value de num:
      num -= value;
      // e adiciona o numero romando na romanString:
      romanString += key; 
    }
  }
  return romanString;
}



console.log(convertToRoman(2500));
/*
 2500
-1000 ? <=2500? true // adiciona 'M';
------
 1500
-1000 ? <=1500? true // adiciona 'M';
------
 500
-1000 ? <= 500? false // break;
-900 ? <= 500? false // break;
-500 ? <= 500? true // adiciona 'D'

...

return romanString;
--End Of Loop---

*/