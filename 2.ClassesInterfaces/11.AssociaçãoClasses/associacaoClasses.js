"use strict";
/*
Aprendendo associação entre classes:
- Assosiação é do tipo TEM UM, é a ligação entre um objeto a outro
    objeto, sem que um dependa do outro.

-
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TypeWiriter = exports.Pen = exports.Tool = exports.Writer = void 0;
// Criando uma escritor com um atributo privado chamado ferramenta:
var Writer = /** @class */ (function () {
    function Writer(_name) {
        this._name = _name;
        this._tool = null;
    }
    Object.defineProperty(Writer.prototype, "tool", {
        get: function () {
            return this._tool;
        },
        set: function (tool) {
            this._tool = tool;
        },
        enumerable: false,
        configurable: true
    });
    Writer.prototype.write = function () {
        if (this.tool === null) {
            console.log("Você não tem nenhuma ferramenta disponivel.");
            return;
        }
        this.tool.write();
    };
    return Writer;
}());
exports.Writer = Writer;
var Tool = /** @class */ (function () {
    function Tool(_name) {
        this._name = _name;
    }
    Object.defineProperty(Tool.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Tool;
}());
exports.Tool = Tool;
var Pen = /** @class */ (function (_super) {
    __extends(Pen, _super);
    function Pen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pen.prototype.write = function () {
        console.log("".concat(this.name, " est\u00E1 escrevendo..."));
    };
    return Pen;
}(Tool));
exports.Pen = Pen;
var TypeWiriter = /** @class */ (function (_super) {
    __extends(TypeWiriter, _super);
    function TypeWiriter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TypeWiriter.prototype.write = function () {
        console.log("".concat(this.name, " est\u00E1 digitando..."));
    };
    return TypeWiriter;
}(Tool));
exports.TypeWiriter = TypeWiriter;
var escritor = new Writer("Machado de Assis");
var caneta = new Pen("Bic 2019");
var maquinaEscrever = new TypeWiriter("datilográfica");
// escritor.tool = caneta;
escritor.write();
