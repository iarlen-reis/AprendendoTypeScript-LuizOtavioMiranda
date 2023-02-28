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
exports.__esModule = true;
exports.Collaborator = exports.Company = void 0;
// Criando classe da forma longa:
var Company = /** @class */ (function () {
    function Company(name, cnpj) {
        var _this = this;
        this.collaborators = [];
        // criando um metódo para adicionar colaborador:
        this.addCollaborator = function (collaborator) {
            _this.collaborators.push(collaborator);
        };
        this.showCollaborators = function () {
            _this.collaborators.forEach(function (collaborator) {
                return console.log(collaborator.name, collaborator.surname);
            });
        };
        this.name = name;
        this.cnpj = cnpj;
    }
    return Company;
}());
exports.Company = Company;
// Criando classe de forma rápida:
var Collaborator = /** @class */ (function () {
    function Collaborator(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    return Collaborator;
}());
exports.Collaborator = Collaborator;
// Criando instancia da empresa:
var company = new Company("Udemy", "11.111.111/0001-11");
// Criando colaboradores:
var collaborator1 = new Collaborator("Iarlen", "Reis");
var collaborator2 = new Collaborator("Klay", "Thompson");
// adicionando colaborador:
company.addCollaborator(collaborator1);
company.addCollaborator(collaborator2);
console.log(company);
console.log();
company.showCollaborators();
