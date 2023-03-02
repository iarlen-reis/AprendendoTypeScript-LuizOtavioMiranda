"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collaborator = exports.Company = void 0;
class Company {
    constructor(name, cnpj) {
        this.collaborators = [];
        this.addCollaborator = (collaborator) => {
            this.collaborators.push(collaborator);
        };
        this.showCollaborators = () => {
            this.collaborators.forEach((collaborator) => console.log(collaborator.name, collaborator.surname));
        };
        this.name = name;
        this.cnpj = cnpj;
    }
}
exports.Company = Company;
class Collaborator {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
exports.Collaborator = Collaborator;
const company = new Company("Udemy", "11.111.111/0001-11");
const collaborator1 = new Collaborator("Iarlen", "Reis");
const collaborator2 = new Collaborator("Klay", "Thompson");
company.addCollaborator(collaborator1);
company.addCollaborator(collaborator2);
console.log(company);
console.log();
company.showCollaborators();
