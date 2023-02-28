"use strict";
/*
Aprendendo tipo literais:
- É basicamente utilizar valores como tipos.
*/
exports.__esModule = true;
exports.selectColor = exports.person = void 0;
var x = 10;
x = 304329;
var y = 10;
// Definindo o tipo do name como Iarlen, sendo assim "Iarlen" será um tipo.
exports.person = {
    name: "Iarlen",
    surname: "Reis"
};
// Usando tipo literal para tipar um função: No casa usando as cores para tipar.
function selectColor(color) {
    return color.toUpperCase();
}
exports.selectColor = selectColor;
console.log(selectColor("Blue"));
console.log(selectColor("Red"));
console.log(selectColor("Yellow"));
exports["default"] = 1;
