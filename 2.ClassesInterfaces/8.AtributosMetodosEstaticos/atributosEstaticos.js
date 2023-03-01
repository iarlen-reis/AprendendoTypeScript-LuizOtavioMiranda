"use strict";
/*
Aprendendo atributos e metodos estaticos:
- Atributos e metódos estaticos eles podem ser acessados sem
    a necessidade de instaciar a classe.

- Para isso usamos a palavra static ao criar um metódo estático.

- As instância não tem acesso ao metódo estático, apenas a classe.

- Observações:
    - Metódos estáticos não podem contém atributos da classe.
*/
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, surname, age, cpf) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.cpf = cpf;
    }
    // Esse metódo ficará disponivel ao acessar Person, nem a necessidade de instância.
    Person.speakHello = function () {
        console.log("Hello!");
    };
    // Esse metódo estático cria uma pessoa com nome e sobrenome utilizando instância da classe.
    Person.createPersonWithNameAndSurName = function (name, surname) {
        return new Person(name, surname, 0, "000.000.000-99");
    };
    return Person;
}());
exports.Person = Person;
var person = new Person("Iarlen", "Reis", 21, "123.457.789-00");
var iarlen = Person.createPersonWithNameAndSurName("Iarlen", "Reis");
console.log(iarlen);
