/*
Aprendendo Declaration Merging:
-  Não se pode criar uma interface e um type com o mesmo nome.

- Mas podemos criar duas interfaces com o mesmo nome, com isso, as duas
    interfaces serão unidas.

- Podemos adicionar readonly nós atributos da interface.

- Podemos dizer que um atributo é opcional adicionando o '?'.
*/

interface Person {
  name: string;
}

interface Person {
  readonly surname: string;
}

export const person: Person = {
  name: "iarlen",
  surname: "Reis",
};
