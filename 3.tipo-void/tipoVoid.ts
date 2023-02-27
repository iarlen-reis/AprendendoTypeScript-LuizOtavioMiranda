/*
Aprendendo tipo Void:
- Quer dizer que uma função ou metodo não retorna nada.
*/

// tipando o args da função, informando que será um array de string.
const semRetorno = (...args: string[]): void => {
  console.log(args.join(" "));
};

semRetorno("Iarlen", "Santos", "Reis");

// tipando o retorno da função para void
const Person = {
  username: "Iarlen",
  surname: "Reis",
  showName(): void {
    console.log(this.username + " " + this.surname);
  },
};

Person.showName();

// Criando interface da classe
interface Dog {
  name: string;
}

// tipando retorno de classe para void:
class Dog {
  constructor(name: string) {
    this.name = name;
  }

  sayHello = (): void => {
    console.log(`${this.name} está falando Hello!`);
  };
}

const dog = new Dog("Lili");
dog.sayHello();
