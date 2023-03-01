"use strict";
/*
Aprendendo tiplagem de tupla:
- É um tipo exclusivo do typescript.

- É um array com tipos e tamanho especifico.

- Podemos alterar o valor da tupla, desde que o valor seja
    do tipo que escolhemos na tipagem:

    const dataClient: [number, string] = [1, "Iarlen"];

    dataClient[0] = 100;


- Podemos dizer que um valor é opcional ao adicionar '?' na tipagem:

    const dataClient: [number, string?] = [1];

- Podemos deixar a tupla imutavel ao utilizar readonly:

    const dataClient: readonly [number, string?] = [1];

*/
const dataClient = [1, "Iarlen"];
console.log(dataClient);
