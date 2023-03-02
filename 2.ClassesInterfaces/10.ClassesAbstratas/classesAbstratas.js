"use strict";
/*
Aprendendo classes. metódos e atributos abstratos:
- Usamos classes abstratas para termos um tipo e garantir que todas
    as classes que extenderem a classe abstrata tenha metódos ou atributos
    pré-definido.

- Classes abstratas só podem ser instânciadas por subClasses dela e que seja
    concreta.

- Metódos abstratos são um contrato que obrigam as subClasses dela a implementarem
    o metódo.

- Metódo abstrato não pode ter corpo, ele é apenas uma regra de contrato.

- Assim como os metódo abtratos, também podemos criar atributos abstratos que
    sequem o mesmo conceito dos metódos, será obrigado em todas subClasses e ao
    defini-lo na classe abstrata não deve ter corpo.

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
exports.Monster = exports.Warrior = exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character(name, attack, life) {
        this.name = name;
        this.attack = attack;
        this.life = life;
    }
    Character.prototype.attacked = function (character) {
        this.staff();
        character.lostLife(this.attack);
    };
    Character.prototype.lostLife = function (hit) {
        this.life -= hit;
        console.log("".concat(this.emoji, " - ").concat(this.name, " agora tem ").concat(this.life, " de vida..."));
    };
    return Character;
}());
exports.Character = Character;
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emoji = "\uD83E\uDDDD";
        return _this;
    }
    Warrior.prototype.staff = function () {
        console.log(this.emoji + " GUERREIRA ATACARRRRRRR!");
    };
    return Warrior;
}(Character));
exports.Warrior = Warrior;
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    function Monster() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.emoji = "\uD83E\uDDDF";
        return _this;
    }
    Monster.prototype.staff = function () {
        console.log(this.emoji + " MOSNTRO AOO ATAQUEEE!!!");
    };
    return Monster;
}(Character));
exports.Monster = Monster;
var warrior = new Warrior("Diana", 100, 1000);
var monster = new Monster("Minotauro", 87, 1000);
warrior.attacked(monster);
warrior.attacked(monster);
monster.attacked(warrior);
monster.attacked(warrior);
warrior.attacked(monster);
