"use strict";
// Tipos básicos (Aqui ocorre inferência de tipos):
let nome = "Iarlen"; // Qual tipo de string
let idade = 21; // Qualquer tipo de número
let adulto = true; // true ou false
let simbolo = Symbol("qualquer-symbol"); // symbol
//let big: bigint = 10n; // bigint
// Tipos passados por refêrencia (array, objetos):
//Arrays
let arrayOfNumbers = [1, 2, 3, 30.5, -1];
let arrayOfStrings = ["Iarlen", "Santos", "pato"];
//Objetos
let person = {
    name: "Iarlen",
    age: 21,
    adult: true,
};
//Funções
// Forma 1:
function sum(x, y) {
    return x + y;
}
const result = sum(2, 2);
// Forma 2:
const sum2 = (x, y) => x + y;
