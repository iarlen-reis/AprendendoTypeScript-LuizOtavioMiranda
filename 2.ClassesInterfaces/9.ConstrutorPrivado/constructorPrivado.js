"use strict";
/*
Aprendendo construtor privado e singleton:
- Em alguns casos será necessário criar uma classe que retona uma instância já
    existente ou criar uma instância e nós retorna ela, com isso existirá apenas
    uma instância da classe.

- Geralmente muito utilizado para criar conexões com banco de dados.

- Para isso utilizamos o padrão de projeto singleton.

- Para fazer isso no typescript utilizado um construtor privado:
    
    private constructor() {}

- Ao utilizar um construtor privado não poderemos mais ter instância da classe e
    com isso, para manipular a classe criamos um metodo estático.


*/
exports.__esModule = true;
exports.DataBase = void 0;
var DataBase = /** @class */ (function () {
    function DataBase(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    DataBase.prototype.connect = function () {
        console.log("Conectado: ".concat(this.host, " ").concat(this.user, " ").concat(this.password));
    };
    // Criando um metódo estático que retorna uma instância se existir ou criar uma nova.
    DataBase.getDataBase = function (host, user, password) {
        if (DataBase.database)
            return DataBase.database;
        DataBase.database = new DataBase(host, user, password);
        return DataBase.database;
    };
    return DataBase;
}());
exports.DataBase = DataBase;
var database1 = DataBase.getDataBase("localhost", "root", "12345");
database1.connect();
var database2 = DataBase.getDataBase("localhost", "root", "12345");
database2.connect();
console.log(database1 === database2);
