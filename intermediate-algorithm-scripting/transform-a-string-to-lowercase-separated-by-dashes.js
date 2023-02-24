function spinalCase(str) {
  return str
  .replace(/([a-z])([A-Z])/g, "$1 $2") // coloca um espaço em branco em qualquer letra maiuscula que venha encontrar
  .split(/\s+|_+/g) // regex select all white spaces and underscores.
  .join('-') // retorna pra string separadod por '-'
  .toLowerCase(); // coloca tudo pra lowercase
}


console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));