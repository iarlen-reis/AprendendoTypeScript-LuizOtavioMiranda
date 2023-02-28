/*
Aprendendo tipo assertions:
- É praticamente converter de um tipo para outro.

- Recomendados:
    Condicional
    tipo assertion
*/

// Verificando se o body existe antes de fazer a ação:
const body = document.querySelector("body");
if (body) body.style.background = "red";

/*
- Podemos remover a verifição ao adicionar uma exclamação no elemento:
    isso vai dizer que o elemento não pode ser nulo.

- É chamado de non-null assertion (!).

- Não é indicado fazer dessa forma.
*/
const body2 = document.querySelector("body")!;
body2.style.background = "red";

/*
- Forma mais utilizada é utilizar type assertion:

- Utilizamos a plavra (as) no final da seleção e passamos o tipo que
    queremos.

- Só devemos fazer isso quando tivermos a certeza que o elemento existe e
    vai retornar o tipo informado.
*/

const body3 = document.querySelector("body") as HTMLBodyElement;
body3.style.background = "red";
