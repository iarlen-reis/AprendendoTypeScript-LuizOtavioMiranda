/*
Aprendendo a implementar tipo alias em classes:
- Para fazermos isso criamos o tipo e definimos os atributos ou metódos.

- Criamos a classe e ao invés de utilizar extends, usamos implements, assim a
    classe vai implementar o tipo criado.

- O tipo também vai funcionar como um contrato.

- Uma classe pode implementar quantos tipos quiser.
*/

type TypePerson = {
  name: string;
  surname: string;

  fullName(): string;
};

export class Person implements TypePerson {
  constructor(public name: string, public surname: string) {}

  fullName(): string {
    return this.name + " " + this.surname;
  }
}

const pessoa = new Person("Iarlen", "Reis");

console.log(pessoa.name);
console.log(pessoa.surname);
console.log(pessoa.fullName());
