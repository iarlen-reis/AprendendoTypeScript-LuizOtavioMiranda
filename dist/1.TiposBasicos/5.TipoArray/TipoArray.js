"use strict";
/*
Aprendendo tipagem de array:
- Podemos criar um array de duas maneiras:
    - Array<> ou [] podemos passar qualquer tipo.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.concactStrings = exports.multiplyArgs = void 0;
// Criando uma função que mutiplica array de números:
const multiplyArgs = (...args) => {
    return args.reduce((ac, value) => ac * value, 1);
};
exports.multiplyArgs = multiplyArgs;
const result = (0, exports.multiplyArgs)(1, 2, 3, 4, 5);
console.log(result);
// Criando uma função que concatena strings:
const concactStrings = (...args) => {
    return args.join(" ");
};
exports.concactStrings = concactStrings;
const stringResult = (0, exports.concactStrings)("Iarlen", "Santos", "Reis");
console.log(stringResult);
