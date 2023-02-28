"use strict";
/*
Aprendendo tipo alias:
- É basicamente criar um aplido para um tipo ou conjunto de tipo para
    usa-lo de forma mais facil e deixar o código mais limpo.

- Devemos iniciar o nosso tipos com letras maiusculas.

- No exemplo da criação do tipo Person, ao criar e unir as cores usando
    type, o typescript trabalha de forma maravilhosa com o auto-complete.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.setColorFavorite = void 0;
// Criando um objeto para atribuir o tipo criado:
var person = {
    name: "Iarlen",
    surname: "Reis",
    age: 23,
    salary: 5000,
    favoriteColor: "GREEN"
};
//criando uma função que inplementa o tipo que criamos:
function setColorFavorite(person, color) {
    return __assign(__assign({}, person), { favoriteColor: color });
}
exports.setColorFavorite = setColorFavorite;
console.log(setColorFavorite(person, "YELLOW"));
