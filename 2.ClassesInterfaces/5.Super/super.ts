/*
Aprendendo superClasse em typescript:
- É uma classe que está acima na hierarquia da classe que extende ela.

- Quando precisamos ter acesso a algum atributo da superClasse utilizamos a
    a palvra super, ela vai nós dá acesso a metódos da classeSuper na classe
    sub.

- Também é utilizado quando temos um construtor em uma subClasse, ele vai nós
    permitir inicializar os atributos do construtor da superClasse e assim vamos
    puder definir os atributos da subClasse normalmente.

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
  constructor(
    name: string,
    surname: string,
    age: number,
    cpf: string,
    public readonly room?: string
  ) {
    super(name, surname, age, cpf);
  }

  getCompleteName = (): string => {
    console.log("Fazendo algo antes.");
    return super.getCompleteName();
  };
}

export class Client extends Person {}

const student = new Student("Iarlen", "Reis", 21, "000.000.000-00");
const client = new Client("Dame", "Lillard", 32, "111.111.111-11");
