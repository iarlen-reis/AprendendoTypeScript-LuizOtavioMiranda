/*
Aprendendo interfaces em typescript:
- Geralmente interfaces está relacionadas a programação orientada a objetos.

- Ele funciona igual o type Alias, usamos com o implements ao invés de utilizar
    extends.

- A diferença é que type alias é mais flexivel que a interface.
*/

interface TypePerson {
  name: string;
  surname: string;

  fullName(): string;
}

export class Person implements TypePerson {
  constructor(public name: string, public surname: string) {}

  fullName(): string {
    return this.name + " " + this.surname;
  }
}

const pessoa = new Person("Iarlen", "Reis");
