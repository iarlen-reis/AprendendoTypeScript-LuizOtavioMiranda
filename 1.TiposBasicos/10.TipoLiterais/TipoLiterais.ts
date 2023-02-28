/*
Aprendendo tipo literais:
- É basicamente utilizar valores como tipos.

- É preferivel sempre utilizar const para criar tipos literais.
*/

let x = 10;

x = 304329;

const y = 10;

// Definindo o tipo do name como Iarlen, sendo assim "Iarlen" será um tipo.
export const person = {
  name: "Iarlen" as const,
  surname: "Reis",
};

// Usando tipo literal para tipar um função: No casa usando as cores para tipar.
export function selectColor(color: "Red" | "Yellow" | "Blue"): string {
  return color.toUpperCase();
}

console.log(selectColor("Blue"));
console.log(selectColor("Red"));
console.log(selectColor("Yellow"));

export default 1;
