// for...in:
// O laço for...in interage sobre propriedades enumeradas de um OBJETO, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.
let obj = {a:1, b:2, c:3};

for(let prop in obj) {
    console.log(`obj.${prop} = ${obj[prop]}`)
}
// obj.a = 1
// obj.b = 2
// obj.c = 3



// for...of:

let iterable = [10, 20, 30];

// O loop for...of percorre objetos iterativos (en-US) (incluindo Array, Map, Set, o objeto arguments (en-US) e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

for (let value of iterable) {
  console.log(value);
};
// 10
// 20
// 30


// FOREACH
// O método forEach() executa uma dada função em cada elemento de um array. Diferente do array.map que invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
iterable.forEach(item => console.log(item));
// 10
// 20
// 30

// Artigo sobre a diferencas entre for` vs `forEach` vs `for..in` vs `for..of`:
URL("https://oieduardorabelo.medium.com/javascript-for-vs-foreach-vs-for-in-vs-for-of-44b8beffbfa0#:~:text=Vis%C3%A3o%20geral%20da%20sintaxe&text=Com%20as%20outras%20duas%20constru%C3%A7%C3%B5es,..of%20voc%C3%AA%20n%C3%A3o%20pode.")

let pessoas = {
    01: "Eduardo",
    02: "Maria",
    03: "Naruto",
    04: "Ragnar",
    05: "Bjorn"
};

//forEach:
Object.keys(pessoas).forEach(key => console.log(`${key} - ${pessoas[key]}`));
// a - Eduardo
// b - Maria
// c - Naruto
// d - Ragnar
// e - Bjorn

//for...in:
for (let key in pessoas) {
    console.log(`${key} - ${pessoas[key]}`)
  };
  // a - Eduardo
  // b - Maria
  // c - Naruto
  // d - Ragnar
  // e - Bjorn

  // for...of with Object.entries():
  for (let [key, val] of Object.entries(pessoas)) {
    console.log(`${key} - ${val}`);
  }
  // a - Eduardo
  // b - Maria
  // c - Naruto
  // d - Ragnar
  // e - Bjorn
  for (let [key, val] of Object.entries(pessoas)) {
    if (val === "Naruto") {
      console.log(`Naruto esta na chave: ${key}`)
    }
  }
  // Naruto esta na chave: c

  for (let [key, val] of Object.entries(pessoas)) {
    if (val === "Naruto") {
      console.log(`Naruto esta na chave: ${key}`)
    }
    else {
      console.log(`Naruto não está aqui na ${key}`)
    }
  }
// Naruto não está aqui na a
// Naruto não está aqui na b
// Naruto esta na chave: c
// Naruto não está aqui na d
// Naruto não está aqui na e


// Object.values(object) retorna uma array com os values das keys do objeto:
Object.values(pessoas).forEach(key => {
  console.log(`Este(a) é ${key}.`);
})
// Este(a) é Eduardo.
// Este(a) é Maria.
// Este(a) é Naruto.
// Este(a) é Ragnar.
// Este(a) é Bjorn.