var alice;
var bob;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName() {
    return this.name;
  }

  printAge() {
    return this.age;
  }
}

class Child extends Person {
  constructor(name, age) {
    super(name, age);
  }

  printName() {
    return super.printName().toUpperCase();
  }
}

alice = new Person('Alice', 27);
console.log(alice.printName());
console.log(alice.printAge());

bob = new Child('Bob', 7);
console.log(bob.printName());
