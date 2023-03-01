"use strict";
/*
Aprendendo moldes para objetos:
- Passo a passo (forma longa):
    - Escolhe o nome da classe e exporta lá se necessário.
    
    - Definir os modificadores:
        - Se for necessário acessar fora da classe: public
        - Se não for necessário acessar fora da classe: private
        - Se não for escolhido nenhum dos dois, o atributo será publico.

    - Definir se será readonly ou não.

    - Definir o nome do atributo e tipo dele.

    - Inicializar os valores (constructor).

- Curiosidades:
    - Podemos definir uma classe com tipo, o objeto criado só aceitará
        valores que forem criado pela classe que representa o tipo.

    - Podemos inicializar o atributo da classe tanto pelo construtor, quanto por
        uma classe externa.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collaborator = exports.Company = void 0;
// Criando classe da forma longa:
class Company {
    constructor(name, cnpj) {
        this.collaborators = [];
        // criando um metódo para adicionar colaborador:
        this.addCollaborator = (collaborator) => {
            this.collaborators.push(collaborator);
        };
        // Criando metódo para exibir todos colaboradores dá empresa:
        this.showCollaborators = () => {
            this.collaborators.forEach((collaborator) => console.log(collaborator.name, collaborator.surname));
        };
        this.name = name;
        this.cnpj = cnpj;
    }
}
exports.Company = Company;
// Criando classe de forma rápida:
class Collaborator {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
exports.Collaborator = Collaborator;
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
