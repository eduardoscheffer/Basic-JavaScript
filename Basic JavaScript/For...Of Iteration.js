// Escopo de Variáveis utilizando for...of:
var nome = "eduardo ";
console.log(nome); // eduardo
for (var nome of [ // nome agora recebe "Joao", depois recebe "Maria" e por fim recebe "Pedro";
    "Joao",
    "Maria",
    "Pedro"
]) {
    console.log(nome);
} // Joao /n  Maria /n  Pedro
console.log(nome); // Pedro. Fica pedro por foi utilizado a variável "var" que é uma variável global;

// ----------------- //

let pets = ["Magali", "Milly", "Preta"];
console.log(pets); // ["Magali", "Milly", "Preta"]

for (let pet of pets) { // pet agora recebe "Magali", depois recebe "Milly" e por fim recebe "Preta";
    console.log(pet); // Magali /n Milly /n Preta;
};
console.log(pet) // ReferenceError: pet is not defined (/index.js:21) 

// -------------------------- //

// DIFERENÇA ENTRE for...of E for...in:
let iterable = [3, 5, 7];

for (let i in iterable) {
  console.log(i); // escreve 0, 1, 2
}

for (let i of iterable) {
  console.log(i); // escreve 3, 5, 7
}
// ------------------------- //

const carros = [
    { id: 1, modelo: 'Corsa', marca: 'Chevrolet', preco: 18000 },
    { id: 2, modelo: 'Punto', marca: 'Fiat', preco: 12000 },
    { id: 3, modelo: 'Gol', marca: 'Volkswagen', preco: 14000 },
    { id: 4, modelo: 'Saveiro', marca: 'Volkswagen', preco: 20000 },
    { id: 5, modelo: 'Uno', marca: 'Fiat', preco: 12000 }
  ]

let total = 0;
for (const carro of carros) { // carro recebe(=) primeiramente carros[0], depois carros [1], depois 
    total = total + carro.preco
};

console.log(total); // 76000

const valorFinal = Number(total).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'EUR',
});
console.log(valorFinal); // R$ 76.000,00
// ------------------------- //

// FUNÇÃO QUE RETORNA A SOMA DE IDADES DE UMA SALA DE AULA:
const salaDeAula = [
    {Nome: "Eduardo", Idade: 24},
    {Nome: "Mariana", Idade: 25},
    {Nome: "João", Idade: 20},
    {Nome: "Maria", Idade: 14},
    {Nome: "Pedro", Idade: 35},
    {Nome: "José", Idade: 64},
];

function somaIdade () {
    let total = 0;
    for (let idade of salaDeAula) {
    total += idade.Idade
};
    return total;
}
console.log(somaIdade().toLocaleString("pt-BR", {style: 'currency', currency: "BRL"})); // R$ 182,00
