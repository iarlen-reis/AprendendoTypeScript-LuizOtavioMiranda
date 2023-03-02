"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setColorFavorite = void 0;
const person = {
    name: "Iarlen",
    surname: "Reis",
    age: 23,
    salary: 5000,
    favoriteColor: "GREEN",
};
function setColorFavorite(person, color) {
    return { ...person, favoriteColor: color };
}
exports.setColorFavorite = setColorFavorite;
console.log(setColorFavorite(person, "YELLOW"));
