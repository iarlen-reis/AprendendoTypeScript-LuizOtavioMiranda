"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    fullName() {
        return this.name + " " + this.surname;
    }
}
exports.Person = Person;
const pessoa = new Person("Iarlen", "Reis");
