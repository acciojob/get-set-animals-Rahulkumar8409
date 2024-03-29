//complete this code
class Animal {
	 private _species: string;

  constructor(species: string) {
    this._species = species;
  }

  get species(): string {
    return this._species;
  }
	 makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
	 purr(): void {
    console.log("purr");
  }
}

class Cat extends Animal {
	 bark(): void {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
