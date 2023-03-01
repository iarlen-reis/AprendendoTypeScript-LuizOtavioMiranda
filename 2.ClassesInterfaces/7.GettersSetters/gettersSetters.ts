/*
Aprendendo Getters e Setters em typeScript:
- Geralmente todos atributos são deixados privados e utilizamos getters e setters
    para manipula-los.

- Podemos usar o getters para modificar algum atributo privado antes de
    entrega-lo.

- Podemos utilizar o setter para modificar algum atributo privado, recebemos
    um valor como parâmetro e usamos ele para alterar o valor do atributo privado.

- Quando usamos getter e setter, o metódo se comporta como uma atributo da classe,
    sendo assim, temos que reescrever o atributo no contructor adicioando um
    _ (undeline) no inicio dele, assim ele vai sustentar o valor do atributo sem
    entrar em conflito com o atributo criado pelo getter e setter.
*/

export class Person {
  constructor(
    private readonly name: string,
    private readonly surname: string,
    private readonly age: number,
    private _cpf: string
  ) {}

  // getter que remover os caracteres especiais do cpf antes de retorna-lo.
  get cpf(): string {
    return this._cpf.replace(/\D/g, "");
  }

  //
  set cpf(value: string) {
    this._cpf = value;
  }
}

const person = new Person("Iarlen", "Reis", 21, "123.457.789-00");

// Usando o setter:
person.cpf = "111-111-111-11";

// Usando o getter:
person.cpf;
