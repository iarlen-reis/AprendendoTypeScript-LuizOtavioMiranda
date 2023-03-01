/*
Aprendendo o modificador de acesso protected:
- Permite que atributo de uma classeSuper seja compartilha para suas
    subClasses e mesmo assim o encapsulamento seja mantido.
*/

export class Company {
  public readonly name: string;
  protected readonly collaborators: Collaborator[] = [];
  private readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator = (collaborator: Collaborator): void => {
    this.collaborators.push(collaborator);
  };

  showCollaborators = (): void => {
    this.collaborators.forEach((collaborator) =>
      console.log(collaborator.name, collaborator.surname)
    );
  };
}

export class Collaborator {
  constructor(public readonly name: string, public readonly surname: string) {}
}

export class Udemy extends Company {
  constructor() {
    super("Udemy", "11.111.111/0001-11");
  }

  popCollaborator(): Collaborator | null {
    const collaborator = this.collaborators.pop();

    return collaborator ? collaborator : null;
  }
}

const company = new Udemy();

const collaborator1 = new Collaborator("Iarlen", "Reis");
const collaborator2 = new Collaborator("Klay", "Thompson");

company.addCollaborator(collaborator1);
company.addCollaborator(collaborator2);

// Remove um colaborador
const removeCollaborator = company.popCollaborator();
