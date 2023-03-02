"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Student = exports.Person = void 0;
class Person {
    constructor(name, surname, age, cpf) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.cpf = cpf;
        this.getAge = () => {
            return this.age;
        };
        this.getCpf = () => {
            return this.cpf;
        };
        this.getCompleteName = () => {
            return `${this.name} ${this.surname}`;
        };
    }
}
exports.Person = Person;
class Student extends Person {
    constructor() {
        super(...arguments);
        this.getCompleteName = () => {
            return `${this.name} ${this.surname}`.toUpperCase();
        };
    }
}
exports.Student = Student;
class Client extends Person {
}
exports.Client = Client;
const student = new Student("Iarlen", "Reis", 21, "000.000.000-00");
const client = new Client("Dame", "Lillard", 32, "111.111.111-11");
console.log(student);
console.log(client);
