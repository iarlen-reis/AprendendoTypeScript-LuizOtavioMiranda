"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concactStrings = exports.multiplyArgs = void 0;
const multiplyArgs = (...args) => {
    return args.reduce((ac, value) => ac * value, 1);
};
exports.multiplyArgs = multiplyArgs;
const result = (0, exports.multiplyArgs)(1, 2, 3, 4, 5);
console.log(result);
const concactStrings = (...args) => {
    return args.join(" ");
};
exports.concactStrings = concactStrings;
const stringResult = (0, exports.concactStrings)("Iarlen", "Santos", "Reis");
console.log(stringResult);
