// USE GETTERS AND SETTERS TO CONTROL ACCESS TO AN OBJECT
// you can obtain values from an object and set the value of a property within an object;
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer); // anonymous 
novel.writer = 'newAuthor';
console.log(novel.writer); // newAuthor


// Agora podemos tanto acessar as propriedades de um objeto (com getters), quanto alterar os valores dela (com setters).
class Pessoa {
    constructor(name, lastName, ocupation){
        this.Nome = name,
        this.Sobrenome = lastName,
        this.profissão = ocupation
    }
    get nomeDaPessoa() {
        return this.Nome // função que retorna o Nome da Pessoa
    }
    get sobrenomeDaPessoa() { // função que retorna o SobreNome da Pessoa
        return this.Sobrenome
    }
    get profissãoDaPessoa() { // função que retorna a Profissão da Pessoa
        return this.profissão
    }
    set novoNome(novoNome) { // função que atualiza o Nome da Pessoa
        this.Nome = novoNome
    }
    set novaProfissão(novaProfissão) { // função que atualiza a Profissão da Pessoa
        this.profissão = novaProfissão
    }
}
 
console.log("Este é a Pessoa 'eduardo':");
const eduardo = new Pessoa('Eduardo', "Scheffer", "Engenheiro"); // criando a nova Pessoa eduardo
console.log(eduardo) // Pessoa {Nome: "Eduardo", Sobrenome: "Scheffer", profissão: "Engenheiro"}
 
console.log("Esta é a Pessoa 'joao':");
const joao = new Pessoa('João', 'da Silva', 'Mecânico') // criando a nova Pessoa joao
console.log(joao) // Pessoa {Nome: "João", Sobrenome: "da Silva", profissão: "Mecânico"}
 
joao.novaProfissão = 'Delegado'; // atribuindo uma nova Profissão para joao
console.log(`Esta é a nova profissão de joao: `, joao.profissão)
console.log(joao.profissãoDaPessoa) // retornando (getting) a profissão da Pessoa.
console.log(joao) // Pessoa {Nome: "João", Sobrenome: "da Silva", profissão: "Delegado"}

// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature:
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return 5/9 * (this.fahrenheit - 32) + " in Celsius";
  }
  set temperature(celcius) {
    this.fahrenheit = celcius * 9.0 / 5 + 32 + " in Fahrenheit"; 
  }
};
// cria a faviavel fahrenheitThermo como sendo 89ºF:
const fahrenheitThermo = new Thermostat(89);
console.log(fahrenheitThermo); // { fahrenheit: 89 }
// cria uma nova variavel e atribui a temperatura em celsius da fahrenheitThermo:
const celsiusThermo = fahrenheitThermo.temperature;
console.log(celsiusThermo); // 31.666666666666668 in Celsius
// 'seta' a this.fahrenheit da variavel para o valor ref. a 26ºC:
fahrenheitThermo.temperature = 31.666668;
console.log(fahrenheitThermo.fahrenheit); // 89.0000024 in Fahrenheit
  // temp = thermos.temperature; // 26 in Celsius