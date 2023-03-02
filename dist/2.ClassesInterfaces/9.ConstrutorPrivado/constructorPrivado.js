"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBase = void 0;
class DataBase {
    constructor(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
    }
    connect() {
        console.log(`Conectado: ${this.host} ${this.user} ${this.password}`);
    }
    static getDataBase(host, user, password) {
        if (DataBase.database)
            return DataBase.database;
        DataBase.database = new DataBase(host, user, password);
        return DataBase.database;
    }
}
exports.DataBase = DataBase;
const database1 = DataBase.getDataBase("localhost", "root", "12345");
database1.connect();
const database2 = DataBase.getDataBase("localhost", "root", "12345");
database2.connect();
console.log(database1 === database2);
