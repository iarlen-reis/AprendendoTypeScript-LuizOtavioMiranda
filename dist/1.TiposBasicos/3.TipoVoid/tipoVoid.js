"use strict";
/*
- informar que a função ou metódo não tem retorno.
*/
// Função
// Tipando os args como string e a função como sem retorno.
const noReturn = (...args) => {
    console.log(args.join(" "));
};
noReturn("Iarlen", "Santos", "Reis");
class Dog {
    constructor(name) {
        // Tipando a o metódo como sem retorno.
        this.sayHello = () => {
            console.log(`${this.name} está falando Hello!`);
        };
        this.name = name;
    }
}
const dog = new Dog("Lili");
dog.sayHello();
