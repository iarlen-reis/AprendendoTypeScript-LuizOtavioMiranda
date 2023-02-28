/*
Aprendendo tipo alias:
- É basicamente criar um aplido para um tipo ou conjunto de tipo para
    usa-lo de forma mais facil e deixar o código mais limpo.

- Devemos iniciar o nosso tipos com letras maiusculas.

- No exemplo da criação do tipo Person, ao criar e unir as cores usando
    type, o typescript trabalha de forma maravilhosa com o auto-complete.
*/

// tipo alias de apenas um tipo
type Age = number;

type Person = {
  // tipo alias de um objeto
  name: string;
  surname: string;
  age: Age;
  salary: number;
  favoriteColor: ColorFavorite;
};

// Fazendo união de tipos:
type ColorRGB = "RED" | "GREEN" | "BLUE";
type ColorCMYK = "CYAN" | "YELLOW" | "BLACK";

type ColorFavorite = ColorRGB | ColorCMYK;

// Criando um objeto para atribuir o tipo criado:
const person: Person = {
  name: "Iarlen",
  surname: "Reis",
  age: 23,
  salary: 5000,
  favoriteColor: "GREEN",
};

//criando uma função que inplementa o tipo que criamos:
export function setColorFavorite(person: Person, color: ColorFavorite): Person {
  return { ...person, favoriteColor: color };
}

console.log(setColorFavorite(person, "YELLOW"));
