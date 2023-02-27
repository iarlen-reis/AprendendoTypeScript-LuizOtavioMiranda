/*
Aprendendo tipo enum:
- Usamos para enumerar algo, ele vai atribuir um valor número que cresce
    em ordem crescente aos váriaveis dentro dele.

- Devemos inicia-lo com letra maiúscula.

- No exemplo das cores, ao criar um enum com o nome Colors, e definir dentro
    dele o nome das cores, cada cor definida ganhará um número de forma crescente
    começando do zero.


*/
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLUE"] = 1] = "BLUE";
    Colors[Colors["YELLOW"] = 2] = "YELLOW";
})(Colors || (Colors = {}));
console.log(Colors);
