"use strict";
/*
Aprendendo a implementar tipo alias em classes:
- Para fazermos isso criamos o tipo e definimos os atributos ou metódos.

- Criamos a classe e ao invés de utilizar extends, usamos implements, assim a
    classe vai implementar o tipo criado.
*/
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.fullName = function () {
        return this.name + " " + this.surname;
    };
    return Person;
}());
exports.Person = Person;
var pessoa = new Person("Iarlen", "Reis");
console.log(pessoa.name);
console.log(pessoa.surname);
console.log(pessoa.fullName());
