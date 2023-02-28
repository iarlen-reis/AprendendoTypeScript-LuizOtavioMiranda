/*
Aprendendo tipagem estuturada:
- Para o typescript a indentidade do tipo não importa muito
    e sim a restrição.

-


*/
var verifyUser = function (user, sentValue) {
    return (user.username === sentValue.username && user.password === sentValue.password);
};
var bdUser = { username: "Iarlen", password: "1234" };
var sentUser = { username: "Iarlen", password: "1234" };
var loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
