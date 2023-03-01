"use strict";
/*
Aprendendo tipo alias:
- É basicamente criar um aplido para um tipo ou conjunto de tipo para
    usa-lo de forma mais facil e deixar o código mais limpo.

- Devemos iniciar o nosso tipos com letras maiusculas.

- No exemplo da criação do tipo Person, ao criar e unir as cores usando
    type, o typescript trabalha de forma maravilhosa com o auto-complete.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.setColorFavorite = void 0;
// Criando um objeto para atribuir o tipo criado:
const person = {
    name: "Iarlen",
    surname: "Reis",
    age: 23,
    salary: 5000,
    favoriteColor: "GREEN",
};
//criando uma função que inplementa o tipo que criamos:
function setColorFavorite(person, color) {
    return Object.assign(Object.assign({}, person), { favoriteColor: color });
}
exports.setColorFavorite = setColorFavorite;
console.log(setColorFavorite(person, "YELLOW"));
