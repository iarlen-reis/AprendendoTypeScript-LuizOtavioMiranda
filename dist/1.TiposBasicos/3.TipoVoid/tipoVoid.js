"use strict";
const noReturn = (...args) => {
    console.log(args.join(" "));
};
noReturn("Iarlen", "Santos", "Reis");
class Dog {
    constructor(name) {
        this.sayHello = () => {
            console.log(`${this.name} está falando Hello!`);
        };
        this.name = name;
    }
}
const dog = new Dog("Lili");
dog.sayHello();
