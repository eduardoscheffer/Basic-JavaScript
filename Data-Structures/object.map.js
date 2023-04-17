const pessoas = [
    { id: 3, nome: 'Luiz' },
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' },
  ];
  
  // const novasPessoas = {};
  // for (let pessoa of pessoas) {
  //   const { id } = pessoa;
  //   novasPessoas[id] = {...pessoa}
  // }
  // console.log(novasPessoas); 
  /*
  { '1': { id: 1, nome: 'Helena' },
    '2': { id: 2, nome: 'Maria' },
    '3': { id: 3, nome: 'Luiz' } }
   */
  const map1 = new Map();
  
  map1.set('a', 1);
  map1.set('b', 2);
  map1.set('c', 3);
  
  // console.log(map1); // Map(3) {a => 1, b => 2, c => 3})
  
  // console.log(map1.get('a')); // 1
  
  // NOVAS PESSOAS UTILIZANDO OBJECT MAP():
  const novasPessoas = new Map();
  for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, {...pessoa});
  }
  
  console.log(novasPessoas);
  /*
  Map(3) {
    3 => { id: 3, nome: 'Luiz' },
    2 => { id: 2, nome: 'Maria' },
    1 => { id: 1, nome: 'Helena' }
  }
   */
  
  // O OBJETO MAP É DIRETAMENTE ACESSÁVEL;
  const myMap = new Map();
  myMap.set(0, "zero");
  myMap.set(1, "one");

  // console.log(myMap);
  
  // myMap.has(2) ? console.log("Existe"): console.log("Não existe")

  for (const [key, value] of myMap) {
    // console.log(`${key} -> ${value}`);
  }
  // 0 = zero
  // 1 = one
  
  for (const key of myMap.keys()) {
    // console.log(key);
  }
  // 0
  // 1
  
  for (const value of myMap.values()) {
    // console.log(value);
  }
  // zero
  // one
  
  for (const [key, value] of myMap.entries()) {
    // console.log(`${key} = ${value}`);
  }
  // 0 = zero
  // 1 = one
  

  // Create a Map
const fruits = new Map();

// Set Map Values
//           key     value
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits); // Map(3) {apples => 500, bananas => 300, oranges => 200})
// https://www.w3schools.com/js/js_object_maps.asp

// You can create a Map by passing an Array to the new Map() constructor:
// Create a Map
const fruits2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits2); // Map(3) {apples => 500, bananas => 300, oranges => 200})