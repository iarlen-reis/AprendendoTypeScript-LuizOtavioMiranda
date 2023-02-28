/*
Aprendendo o tipo intersection:
- Não é tão utilizado quanto o union type.

- Ele utiliza o simbolo de & e faz o papel de interseção entre dois conjuntos.

*/

// Criando um tipo enxutos:
type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };

// Criando tipo com os tipos enxutos (Não indicado):
type Person = HasName | HasSurname | HasAge;

// Usando tipo intersection para criar tipo com tipos enxutos (indicado):
type PersonTwo = HasName & HasSurname & HasAge;

// Utilizando o tipo com union (Os campos ficam opcionais):
export const person: Person = {
  age: 20,
};

console.log(person);

// Utilizando o tipo com intersetion (Os campos ficam obrigatórios):
export const personTwo: PersonTwo = {
  name: "Iarlen",
  surname: "Reis",
  age: 20,
};

console.log(personTwo);
