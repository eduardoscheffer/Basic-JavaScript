// Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      nome: name,
      idade: age,
      genero: gender
    };
    // Only change code above this line
  };
  
  const eduardo = createPerson("Eduardo", 25, "Masc");
  console.log(eduardo); // { nome: 'Eduardo', idade: 25, genero: 'Masc' }
