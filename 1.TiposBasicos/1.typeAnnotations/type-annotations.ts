// Tipos básicos (Aqui ocorre inferência de tipos):
let nome: string = "Iarlen"; // Qual tipo de string
let idade: number = 21; // Qualquer tipo de número
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol("qualquer-symbol"); // symbol
let big: bigint = 10n; // bigint

// Tipos passados por refêrencia (array, objetos):

//Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3, 30.5, -1];
let arrayOfStrings: Array<String> = ["Iarlen", "Santos", "pato"];

//Objetos
let person: {
  name: string;
  age: number;
  adult?: boolean;
} = {
  name: "Iarlen",
  age: 21,
  adult: true,
};

//Funções

// Forma 1:
function sum(x: number, y: number): number {
  return x + y;
}

const result = sum(2, 2);

// Forma 2:
const sum2: (x: number, y: number) => number = (x, y) => x + y;
