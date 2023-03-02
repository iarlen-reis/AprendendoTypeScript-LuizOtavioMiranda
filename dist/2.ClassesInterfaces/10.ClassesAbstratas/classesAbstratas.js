"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = exports.Warrior = exports.Character = void 0;
class Character {
    constructor(name, attack, life) {
        this.name = name;
        this.attack = attack;
        this.life = life;
    }
    attacked(character) {
        this.staff();
        character.lostLife(this.attack);
    }
    lostLife(hit) {
        this.life -= hit;
        console.log(`${this.emoji} - ${this.name} agora tem ${this.life} de vida...`);
    }
}
exports.Character = Character;
class Warrior extends Character {
    constructor() {
        super(...arguments);
        this.emoji = "\u{1F9DD}";
    }
    staff() {
        console.log(this.emoji + ` GUERREIRA ATACARRRRRRR!`);
    }
}
exports.Warrior = Warrior;
class Monster extends Character {
    constructor() {
        super(...arguments);
        this.emoji = "\u{1F9DF}";
    }
    staff() {
        console.log(this.emoji + ` MOSNTRO AOO ATAQUEEE!!!`);
    }
}
exports.Monster = Monster;
const warrior = new Warrior("Diana", 100, 1000);
const monster = new Monster("Minotauro", 87, 1000);
warrior.attacked(monster);
warrior.attacked(monster);
monster.attacked(warrior);
monster.attacked(warrior);
warrior.attacked(monster);
