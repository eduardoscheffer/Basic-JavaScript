const person = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };
  console.log(person); // { name: 'Taylor', sayHello: [Function: sayHello] }
  console.log(person.sayHello()); // Hello! My name is Taylor


const bicycle = {
    gear: 2,
    setGear(newGear) {
      // this.gear é a variável 'gear' deste objeto e 'newGear' é o novo valor passado como argumento da função.
      this.gear = newGear;
    }
  };
  console.log(bicycle.gear); // 2
  bicycle.setGear(3);
  console.log(bicycle.gear); // 3