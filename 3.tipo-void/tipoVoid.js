/*
Aprendendo tipo Void:
- Quer dizer que uma função ou metodo não retorna nada.
*/
// tipando o args da função, informando que será um array de string.
var semRetorno = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args.join(" "));
};
semRetorno("Iarlen", "Santos", "Reis");
// tipando o retorno da função para void
var Person = {
    username: "Iarlen",
    surname: "Reis",
    showName: function () {
        console.log(this.username + " " + this.surname);
    }
};
Person.showName();
// tipando retorno de classe para void:
var Dog = /** @class */ (function () {
    function Dog(name) {
        var _this = this;
        this.sayHello = function () {
            console.log("".concat(_this.name, " est\u00E1 falando Hello!"));
        };
        this.name = name;
    }
    return Dog;
}());
var dog = new Dog("Lili");
dog.sayHello();
