let arr = [1,2,3,4,5,6,7,8]

//uso do push
console.log(arr);
arr.push(55);
console.log("\nPUSH INSERE O NOVO VALOR NO FINAL DO ARRAY\n");
console.log(arr);

console.log("\nPOSSO INSERIR MAIS DE UM VALOR USANDO , \n");
arr.push(66, 100);
console.log(arr);



//Uso do pop
console.log("\n O POP VAI EXCLUIR O ÚLTIMO NÚMERO DA LISTA E RETORNAR ELE, ENTÃO INSERIMOS EM UMA VARIÁVEL E ELE TERÁ O NOVO VALOR\n");
let deletedLast = arr.pop();
console.log(arr);
console.log(deletedLast);



