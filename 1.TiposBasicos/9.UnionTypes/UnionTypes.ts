/*
Aprendendo Union Types:
- Seria basicamente informar que o retorno de uma função ou até mesmo váriavel
    tem mais de um tipo.
*/

export function addOrCocat(
  a: number | string,
  b: number | string
): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
}

console.log(addOrCocat(10, 20));
console.log(addOrCocat("10", 20));
console.log(addOrCocat(10, "20"));
console.log(addOrCocat("Eu", "aprendi"));
