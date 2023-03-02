"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareOf = exports.createPerson = void 0;
function createPerson(fristName, lastName) {
    return {
        fristName,
        lastName,
    };
}
exports.createPerson = createPerson;
const squareOf = (x) => {
    if (typeof x === "number")
        return x * x;
    return null;
};
exports.squareOf = squareOf;
const squareOfTwoNumber = (0, exports.squareOf)(2);
const squareOfTwoString = (0, exports.squareOf)("Iarlen");
if (typeof squareOfTwoNumber === "number") {
    const result = squareOfTwoNumber * 20;
    console.log(result);
}
