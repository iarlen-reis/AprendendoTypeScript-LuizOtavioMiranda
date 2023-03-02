/*
Aprendendo associação entre classes:
- Assosiação é do tipo TEM UM, é a ligação entre um objeto a outro
    objeto, sem que um dependa do outro.

- 
*/

// Criando uma escritor com um atributo privado chamado ferramenta:
export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get tool(): Tool | null {
    return this._tool;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  write(): void {
    if (this.tool === null) {
      console.log("Você não tem nenhuma ferramenta disponivel.");
      return;
    }
    this.tool.write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  write(): void {
    console.log(`${this.name} está escrevendo...`);
  }
}

export class TypeWiriter extends Tool {
  write(): void {
    console.log(`${this.name} está digitando...`);
  }
}

const escritor = new Writer("Machado de Assis");

const caneta = new Pen("Bic 2019");
const maquinaEscrever = new TypeWiriter("datilográfica");

// escritor.tool = caneta;
escritor.write();
