// Função construtora:
function Person (name, age, ocupation) {
    this.nome = name;
    this.idade = age;
    this.profissão = ocupation;
};

// Criando uma nova pessoa como objeto usando a função construtora "Person":
const eduardo = new Person('Eduardo Mengue Scheffer', '24 years old', 'Engineering');
const mariana = new Person('Mariana Carolina de Lima Mendes', '25 years old', 'Nurse');

console.log(eduardo); // {nome: "Eduardo Mengue Scheffer", idade: "24 years old", profissão: "Engineering"} 
console.log(mariana); // {nome: "Mariana Carolina de Lima Mendes", idade: "25 years old", profissão: "Nurse"} 

// USANDO class SYNTAX (ES6):
class Person {
    constructor(name, age, ocupation) {
        this.nome = name;
        this.idade = age;
        this.profissão = ocupation;
    }
};

class Vegetal {
    constructor(vegetal) {
        this.nome = vegetal
    }
};

const cenoura = new Vegetal('Cenoura');
console.log(cenoura.nome); // "Cenoura"
