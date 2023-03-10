/*
Aprendendo tipo null e undefined:
- Undefined é raramente utilizado, geralmente ele será tipado
    quando uma coisa não foi definida ou pode não ser definida,
    como no exemplo da factory function abaixo, o lastName pode ser
    ou não enviado, logo ao adicionar a opcionalidade nele, ele ser tanto
    string, quanto undefined.


- No exemplo de tipagem de null, criamos uma função que retorna o quadrado de um
    número, mais essa função pode receber qualquer coisa, verificamos se o tipo
    do que foi recebido é número, se for, retornamos ele ao quadrado, se não for
    do tipo número retornamos null.

    - Ao utilizar essa função devemos sempre ter o cuidado de verificar se a função
    retornou null.

    - Podemos verificar se o retorno é null com if else ou verificar o tipo com
    typeof.

*/

// Criando uma factory function e tipando ela:
export function createPerson(
  fristName: string,
  lastName?: string // será string ou undefined
): {
  fristName: string;
  lastName?: string; // será string ou undefined
} {
  return {
    fristName,
    lastName,
  };
}

// Criando uma função que pode retornar null ou um número:
export const squareOf = (x: any) => {
  if (typeof x === "number") return x * x;
  return null;
};

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf("Iarlen");

// Como verificar se está retornando null?
if (typeof squareOfTwoNumber === "number") {
  const result = squareOfTwoNumber * 20;

  console.log(result);
}
