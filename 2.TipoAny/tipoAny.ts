// Ele representa uma falta de tipo ou o tipo é qualquer coisa.
// Devemos evitar ao maximo esse tipo de dado.

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
