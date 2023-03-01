/*
Aprendendo construtor privado e singleton:
- Em alguns casos será necessário criar uma classe que retona uma instância já
    existente ou criar uma instância e nós retorna ela, com isso existirá apenas
    uma instância da classe.

- Geralmente muito utilizado para criar conexões com banco de dados.

- Para isso utilizamos o padrão de projeto singleton.

- Para fazer isso no typescript utilizado um construtor privado:
    
    private constructor() {}

- Ao utilizar um construtor privado não poderemos mais ter instância da classe e
    com isso, para manipular a classe criamos um metodo estático.


*/

export class DataBase {
  // Criando um atributo estático para sustentar a instância da classe se existir..
  private static database: DataBase;

  private constructor(
    private readonly host: string,
    private readonly user: string,
    private readonly password: string
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host} ${this.user} ${this.password}`);
  }

  // Criando um metódo estático que retorna uma instância se existir ou criar uma nova.
  static getDataBase(host: string, user: string, password: string): DataBase {
    // Verifica se existe uma instância já criada, se sim, retorna a instância.
    if (DataBase.database) return DataBase.database;

    // Cria uma instância da classe se não existir ainda.
    DataBase.database = new DataBase(host, user, password);

    // Retorna a instância da classe ao acessar o .getDataBase()
    return DataBase.database;
  }
}

const database1 = DataBase.getDataBase("localhost", "root", "12345");
database1.connect();

const database2 = DataBase.getDataBase("localhost", "root", "12345");
database2.connect();

console.log(database1 === database2);
