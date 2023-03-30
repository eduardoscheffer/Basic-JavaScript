// factory function:
function person0 (name, surName) {
    return {
      nome: name,
      surname: surName,
      falaNome() {
        console.log(`Olá, meu nome é ${this.nome} ${this.surname}`);
      }
    }
  }
  let p0 = person0 ('Maria', 'DB');
  console.log(p0); // { nome: 'Maria', surname: 'DB', falaNome: [Function: falaNome] }
  p0.falaNome(); // Olá, meu nome é Maria DB
  
  
  console.log('################################################')
  
  // constructor functions:
  function Person(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falaNome = () => `Olá, meu nome é ${this.nome} ${this.sobrenome}`;
  };
  
  
  let p1 = new Person('Eduardo', 'Scheffer');
  console.log(p1); // { nome: 'Eduardo', sobrenome: 'Scheffer', falaNome: [Function] }
  console.log(p1.falaNome()); // Olá, meu nome é Eduardo Scheffer
  
  // class syntax:
  class Person2 {
    constructor(name, surname, peso, altura) {
      this.name = name;
      this.surname = surname;
      this.peso = peso;
      this.altura = altura;
    }
  
    falaNome = () => `Olá, meu nome é ${this.nome} ${this.surname}`;
  
    get imc () {
      return this.calcImc();
    }
  
    calcImc = () => this.peso / this.altura ** 2;
  
  }
  
  let p2 = new Person2 ('Ragnar', 'Lothbrock', 85, 1.90);
  console.log(p2); // { name: 'Ragnar', surname: 'Lothbrock', peso: 85, altura: 1.9 }
  console.log(p2.falaNome()); // Olá, meu nome é undefined Lothbrock
  console.log(p2.imc.toFixed(2)); // 23.55