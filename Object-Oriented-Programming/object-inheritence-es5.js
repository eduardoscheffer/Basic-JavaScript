fnction Animal (name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototye.eat = function (amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
}

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
}

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
}

function Dog (name, energy, breed) {
  Animal.call(this, name, energy); // chama a função Animal no contexto de Dog
  
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // setaa Dog pra ser prototype de Animal


Dog.prototype.bark = function () { // agora Dog pode não somente eat, sleep e play mas também bark
  console.log('Woof Woof');
  this.energy -= .1;
}

Dog.prototype.constructor = Dog // o constuctor de Dog agora é Dog e não mais Animal
  
const charlie = new Dog('Charlie', 10, 'Goldendoodle') // cria um novo cachorro com todas as proopriedades e funcionalidades de Animal e Dog

charlie.play(4); // Charlie is playing