/*
Aprendendo tipo enum:
- Usamos para enumerar algo, ele vai atribuir um valor número que cresce
    em ordem crescente aos váriaveis dentro dele.

- Devemos inicia-lo com letra maiúscula.

- No exemplo das cores, ao criar um enum com o nome Colors, e definir dentro
    dele o nome das cores, cada cor definida ganhará um número de forma crescente
    começando do zero.

- Podemos alterar de onde ele começa, fazendo atribuição dentro dele:
    
    enum Colors {
        RED = 1,
        BLUE,
        GREEN
    }

    Agora o red é o valor 1, blue 2 e green 3.


- Podemos utilizar a denotação por ponto '.' para acessar o valor dentro
    do enum:

    Colors.RED -> 0 ele vai retornar o número que foi atribuido a esse valor.

- Podemos acessar pelo indice, e ele retornará o campo ao invés do valor:

    Colors[0] -> RED ele vai retornar o campo, ao invés do valor.

- Podemos atribuir string ao valor do campo, assim ao acessar o o campo ele vai
    retornar a string definida e não um número.

- Podemos fazer merge de um enum e com isso ele vai juntar os dois 
    ou mais enum em um só, para isso devemos criar outro eneum com o mesmo
    nome do enum que queremos fazer merge.


    */

enum Colors {
  RED, // -> 0
  BLUE, // -> 1
  YELLOW, // -> 2
}

console.log(Colors);

// Retornando string ao vez de número ao acessar um campo:
enum Familly {
  ISABEL = "Mãe",
  JOSE = "Pai",
  IARLEN = "Filho",
}

// Fazendo merge de enum: Deve criar o eneum com o mesmo nome que o outro.
enum Colors {
  PURPLE = 4,
  PINK,
  GRAY,
}

// Usando enum para tipar uma função:
function selectAColor(color: Colors): void {
  console.log(Colors[color]);
}

selectAColor(Colors.PURPLE);
