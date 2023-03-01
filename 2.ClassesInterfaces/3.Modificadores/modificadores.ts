/*
Aprendendo modificadores de acesso:
- public: É acessivel dentro da classe, fora da classe e nas subClasses.

- private: É acessivel apenas dentro da classe, é excelente para encapsulamento.

- Para diponibilizar um atributo privado para fora da classe devemos utilizar um
    metódo para isso.
*/

export class Company {
  public readonly name: string;
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  // criando um metódo para adicionar colaborador:
  addCollaborator = (collaborator: Collaborator): void => {
    this.collaborators.push(collaborator);
  };

  // Criando metódo para exibir todos colaboradores dá empresa:
  showCollaborators = (): void => {
    this.collaborators.forEach((collaborator) =>
      console.log(collaborator.name, collaborator.surname)
    );
  };
}

// Criando classe de forma rápida:
export class Collaborator {
  constructor(public readonly name: string, public readonly surname: string) {}
}

// Criando instancia da empresa:
const company = new Company("Udemy", "11.111.111/0001-11");

// Criando colaboradores:
const collaborator1 = new Collaborator("Iarlen", "Reis");
const collaborator2 = new Collaborator("Klay", "Thompson");

// adicionando colaborador:

company.addCollaborator(collaborator1);
company.addCollaborator(collaborator2);

console.log(company);
console.log();
company.showCollaborators();
