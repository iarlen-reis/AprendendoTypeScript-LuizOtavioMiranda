"use strict";
/*
Aprendendo o tipo intersection:
- Não é tão utilizado quanto o union type.

- Ele utiliza o simbolo de & e faz o papel de interseção entre dois conjuntos.

*/
exports.__esModule = true;
exports.personTwo = exports.person = void 0;
// Utilizando o tipo com union (Os campos ficam opcionais):
exports.person = {
    age: 20
};
console.log(exports.person);
// Utilizando o tipo com intersetion (Os campos ficam obrigatórios):
exports.personTwo = {
    name: "Iarlen",
    surname: "Reis",
    age: 20
};
console.log(exports.personTwo);
