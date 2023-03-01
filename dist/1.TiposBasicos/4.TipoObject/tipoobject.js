"use strict";
/*
Tipo object - Objetos em geral

- A partir do momento que o tipo foi inferido pelo TS eu não posso
  alterar mais objeto, como por exemplo criar uma nova chave dentro dele:

    objectA.chaveC = "Valor C";

- Para podermos fazer a criação de uma nova chave no objeto devemos tipa-lo
  como record<String, unknown>:

    const objectA: Record<string, unknown>

    - A string representa a chave e anknown o valor, sendo possivel adicionar qualquer
    tipo de valor.

    - Ao fazer isso perdermos a função de AUTO-COMPLETE do typescriptS.

- A melhor forma é deixar o typescript fazer a inferência de tipos no objeto.

- Podemos também fazer a tipagem do objeto e adicionar a chaveC como
  opcional:
    = {
    chaveA: string;
    chaveB: string;
    chaveC?: string;
    };

- Podemos também tipar o objeto e definir a chaveC como uma string e o valor
    como qualquer um, é igual a primeira forma abordada, porém não perdemos o
    auto-complete do typescript, ele vai saber as chaves que falamos que iriam
    existir, mas as novas chaves que serão criadas não terão auto-complete:

    = {
      chaveA: string;
      chaveB: string;
      [key: string]: unknown
    }

- Podemos fazer com que o valor de uma chave não possa ser alterado, adicionando
    readonly antes de criar a chave:

      = {
        readonly chaveA: string;
        chaveB: string;
    }

*/
// Forma 1 (Não indicada): tipar a chave como string e o valor como qualquer coisa.
const objectA = {
    chaveA: "Valor A",
    chaveB: "Valor B",
};
objectA.chaveA = "Outro Valor";
objectA.chaveC = "Valor C";
// Forma 2: Tipando o objeto e adicionando a chaveC como opcional:
const objectB = {
    chaveA: "Valor A",
    chaveB: "Valor B",
};
// Forma 3: Tipando o objeto e adicionando a chaveC como string e o valor como qualquer um.
const objectC = {
    chaveA: "Valor A",
    chaveB: "Valor B",
};
