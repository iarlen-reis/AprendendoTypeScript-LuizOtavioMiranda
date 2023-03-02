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

export abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number
  ) {}

  attacked(character: Character): void {
    this.staff();
    character.lostLife(this.attack);
  }

  lostLife(hit: number): void {
    this.life -= hit;
    console.log(
      `${this.emoji} - ${this.name} agora tem ${this.life} de vida...`
    );
  }

  abstract staff(): void;
}

export class Warrior extends Character {
  protected emoji = "\u{1F9DD}";

  staff(): void {
    console.log(this.emoji + ` GUERREIRA ATACARRRRRRR!`);
  }
}

export class Monster extends Character {
  protected emoji = "\u{1F9DF}";

  staff(): void {
    console.log(this.emoji + ` MOSNTRO AOO ATAQUEEE!!!`);
  }
}

const warrior = new Warrior("Diana", 100, 1000);
const monster = new Monster("Minotauro", 87, 1000);

warrior.attacked(monster);
warrior.attacked(monster);
monster.attacked(warrior);
monster.attacked(warrior);
warrior.attacked(monster);
