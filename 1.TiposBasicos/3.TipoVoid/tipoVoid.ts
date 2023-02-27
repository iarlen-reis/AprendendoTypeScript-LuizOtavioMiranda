/*
- informar que a função ou metódo não tem retorno.
*/

// Função

// Tipando os args como string e a função como sem retorno.
const noReturn = (...args: string[]): void => {
  console.log(args.join(" "));
};

noReturn("Iarlen", "Santos", "Reis");

// Classe

// Interface da classse
interface Dog {
  name: string;
}

class Dog {
  constructor(name: string) {
    this.name = name;
  }

  // Tipando a o metódo como sem retorno.
  sayHello = (): void => {
    console.log(`${this.name} está falando Hello!`);
  };
}

const dog = new Dog("Lili");

dog.sayHello();
