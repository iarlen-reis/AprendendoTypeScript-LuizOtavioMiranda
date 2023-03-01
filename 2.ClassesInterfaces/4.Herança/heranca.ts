/*
Aprendendo herança em typescript:
- Geralmente criamos uma classe para e a partir dela, por herança criamos
    outras classes que herdam atributos e metódos já definidos.

- Geralmente não herdamos de classes concretas.
*/

export class Person {
  constructor(
    public readonly name: string,
    public readonly surname: string,
    private readonly age: number,
    protected readonly cpf: string
  ) {}

  getAge = (): number => {
    return this.age;
  };

  getCpf = (): string => {
    return this.cpf;
  };

  getCompleteName = (): string => {
    return `${this.name} ${this.surname}`;
  };
}

export class Student extends Person {
  getCompleteName = (): string => {
    return `${this.name} ${this.surname}`.toUpperCase();
  };
}

export class Client extends Person {}

const student = new Student("Iarlen", "Reis", 21, "000.000.000-00");
const client = new Client("Dame", "Lillard", 32, "111.111.111-11");

console.log(student);
console.log(client);
