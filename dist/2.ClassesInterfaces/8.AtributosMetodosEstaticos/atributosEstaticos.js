"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, surname, age, cpf) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.cpf = cpf;
    }
}
exports.Person = Person;
Person.ageDefault = 0;
Person.speakHello = () => {
    console.log("Hello!");
};
Person.createPersonWithNameAndSurName = (name, surname) => {
    return new Person(name, surname, 0, "000.000.000-99");
};
const person = new Person("Iarlen", "Reis", 21, "123.457.789-00");
const iarlen = Person.createPersonWithNameAndSurName("Iarlen", "Reis");
console.log(iarlen);
