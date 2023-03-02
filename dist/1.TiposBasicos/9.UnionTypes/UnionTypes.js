"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrCocat = void 0;
function addOrCocat(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    return `${a}${b}`;
}
exports.addOrCocat = addOrCocat;
console.log(addOrCocat(10, 20));
console.log(addOrCocat("10", 20));
console.log(addOrCocat(10, "20"));
console.log(addOrCocat("Eu", "aprendi"));
