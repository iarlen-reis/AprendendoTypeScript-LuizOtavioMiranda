"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, surname, age, _cpf) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this._cpf = _cpf;
    }
    get cpf() {
        return this._cpf.replace(/\D/g, "");
    }
    set cpf(value) {
        this._cpf = value;
    }
}
exports.Person = Person;
const person = new Person("Iarlen", "Reis", 21, "123.457.789-00");
person.cpf = "111-111-111-11";
person.cpf;
