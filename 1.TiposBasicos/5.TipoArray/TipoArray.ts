/*
Aprendendo tipagem de array:
- Podemos criar um array de duas maneiras:
    - Array<> ou [] podemos passar qualquer tipo.
*/

// Criando uma função que mutiplica array de números:
export const multiplyArgs = (...args: Array<number>): number => {
  return args.reduce((ac, value) => ac * value, 1);
};

const result = multiplyArgs(1, 2, 3, 4, 5);

console.log(result);

// Criando uma função que concatena strings:
export const concactStrings = (...args: string[]): string => {
  return args.join(" ");
};

const stringResult = concactStrings("Iarlen", "Santos", "Reis");

console.log(stringResult);
