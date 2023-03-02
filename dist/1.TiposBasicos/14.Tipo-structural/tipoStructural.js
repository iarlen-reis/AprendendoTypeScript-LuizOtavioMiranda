"use strict";
const verifyUser = (user, sentValue) => {
    return (user.username === sentValue.username && user.password === sentValue.password);
};
const bdUser = { username: "Iarlen", password: "1234" };
const sentUser = { username: "Iarlen", password: "1234" };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
