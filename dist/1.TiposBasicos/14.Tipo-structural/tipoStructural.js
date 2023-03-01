"use strict";
/*
Aprendendo tipagem estuturada:
- Para o typescript a indentidade do tipo não importa muito
    e sim a restrição.

- Desde que as restrições sejam cumpridas, o typescript não vai se reclamar.
*/
// Criando a função que vai receber a tipagem da função:
const verifyUser = (user, sentValue) => {
    return (user.username === sentValue.username && user.password === sentValue.password);
};
/*
Criando os objetos que serão passados nos argumentos da função:

- Nenhum dos objetos tem tipagem, eles atendem a restrição do tipo da função e
    por isso o typescript não reclama.

- Os objetos poderiam ter mais campos, desde que os campos solicidados pela tipagem
    esteja nele, o typecript não vai reclamar.
*/
const bdUser = { username: "Iarlen", password: "1234" };
const sentUser = { username: "Iarlen", password: "1234" };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
