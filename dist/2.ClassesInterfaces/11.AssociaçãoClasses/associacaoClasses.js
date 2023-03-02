"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeWiriter = exports.Pen = exports.Tool = exports.Writer = void 0;
class Writer {
    constructor(_name) {
        this._name = _name;
        this._tool = null;
    }
    get tool() {
        return this._tool;
    }
    set tool(tool) {
        this._tool = tool;
    }
    write() {
        if (this.tool === null) {
            console.log("Você não tem nenhuma ferramenta disponivel.");
            return;
        }
        this.tool.write();
    }
}
exports.Writer = Writer;
class Tool {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
}
exports.Tool = Tool;
class Pen extends Tool {
    write() {
        console.log(`${this.name} está escrevendo...`);
    }
}
exports.Pen = Pen;
class TypeWiriter extends Tool {
    write() {
        console.log(`${this.name} está digitando...`);
    }
}
exports.TypeWiriter = TypeWiriter;
const escritor = new Writer("Machado de Assis");
const caneta = new Pen("Bic 2019");
const maquinaEscrever = new TypeWiriter("datilográfica");
escritor.write();
