/*
Aprendendo atributos e metodos estaticos:
- Atributos e metódos estaticos eles podem ser acessados sem
    a necessidade de instaciar a classe.

- Para isso usamos a palavra static ao criar um metódo estático.

- As instância não tem acesso ao metódo estático, apenas a classe.

- Observações:
    - Metódos estáticos não podem ser utilizadas dentro de metódos da
        classe utilizando a palavra 'this' para usa-lo dentro da classe
        utilize a propria classe:
        
          Person.ageDefault

    - Podemos criar um metódo de instância e faze-lo acessar os metódos ou atributos
        estáticos.
*/

export class Person {
  // Um atributo estático:
  static ageDefault = 0;

  constructor(
    public readonly name: string,
    public readonly surname: string,
    public readonly age: number,
    public cpf: string
  ) {}

  // Esse metódo ficará disponivel ao acessar Person, nem a necessidade de instância.
  static speakHello = (): void => {
    console.log("Hello!");
  };

  // Esse metódo estático cria uma pessoa com nome e sobrenome utilizando instância da classe.
  static createPersonWithNameAndSurName = (
    name: string,
    surname: string
  ): Person => {
    return new Person(name, surname, 0, "000.000.000-99");
  };
}

const person = new Person("Iarlen", "Reis", 21, "123.457.789-00");

const iarlen = Person.createPersonWithNameAndSurName("Iarlen", "Reis");

console.log(iarlen);
