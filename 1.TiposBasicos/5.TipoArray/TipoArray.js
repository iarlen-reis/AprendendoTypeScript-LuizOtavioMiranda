"use strict";
/*
Aprendendo tipagem de array:
- Podemos criar um array de duas maneiras:
    - Array<> ou [] podemos passar qualquer tipo.
*/
exports.__esModule = true;
exports.concactStrings = exports.multiplyArgs = void 0;
// Criando uma função que mutiplica array de números:
var multiplyArgs = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (ac, value) { return ac * value; }, 1);
};
exports.multiplyArgs = multiplyArgs;
var result = (0, exports.multiplyArgs)(1, 2, 3, 4, 5);
console.log(result);
// Criando uma função que concatena strings:
var concactStrings = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.join(" ");
};
exports.concactStrings = concactStrings;
var stringResult = (0, exports.concactStrings)("Iarlen", "Santos", "Reis");
console.log(stringResult);
