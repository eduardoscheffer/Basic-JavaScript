// USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION: 
class Vegetable {
    constructor (name, color) {
      this.name = name;
      this.color = color;
    }
  }
 
  const carrot = new Vegetable('cenoura', 'laranja');
  console.log(`O vegetal do prato foi ${carrot.name} que tem a cor ${carrot.color}!`); //O vegetal do prato foi cenoura que tem a cor laranja!
  console.log(carrot) // Vegetable {name: "cenoura", color: "laranja"}
let Desert = function (desert, taste) {
    this.name = desert;
    this.taste = taste;
  };
  /* Utilizando class syntax:
class Desert {
    constructor (desert, taste) {
        this.name = desert;
        this.taste = taste;
    }
};
  */
  let desert = new Desert('Petit Gatou', 'Chocolate');
  console.log(`A sobremesa foi ${desert.name} sabor de ${desert.taste}`) // A sobremesa foi Petit Gatou sabor de Chocolate;
  console.log(desert) // Desert {name: "Petit Gatou", taste: "Chocolate"};


  class Rectangle {
    constructor (height, width) {
      this.height = height;
      this.width = width;
    }

    get Area() {
      return this.calcArea()
    }

    calcArea = () => this.height * this.width

  }

let square1 = new Rectangle (10, 5);
let square1Area = square1.Area;
console.log(square1Area); // 50;

class Cilinder {
	constructor(raio, altura) {
		this.raio = raio;
		this.altura = altura;
	};

	get areaBase() {
		return this.calcBase();
	};

	calcBase() {
  const PI = 3.141592;
	let b;
  b = PI * (this.raio * this.raio)
  return b;
	}

	get volume() {
		return this.calcVolume();
	}

	calcVolume() {
    return this.areaBase * this.altura
  }
};

// criando novo cilindro:
let cilinder1 = new Cilinder (2, 10);
console.log(cilinder1); // { raio: 2, altura: 10 }
// atribuindo o volume do cilinder1 a variavel:
let cilinder1Volume = cilinder1.volume;
console.log(cilinder1Volume); // 125.66368


// an object whose properties are objects
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}


const family = {};

family.mother = new Person("Janet", "Jones");
family.father = new Person("Tyrone", "Jones");
family.daughter = new Person("Maria", "Jones");

console.table(family);