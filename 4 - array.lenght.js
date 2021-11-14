let arr1 = [1,2,3,4,true,"array", {one:1},[3,5]];

console.log(arr1.length); //tell us the lenght

console.log("\nE se eu quiser adicionar algo usando o lenght do Array?\n");

arr1[arr1.length] = 20;

console.log(arr1); //adiciona um valor extra depois do último elemento do array
console.log(arr1.length);

console.log("\nE se eu quiser mudar diretamente o tamanho do Array?\n");
arr1.length = 20;
console.log(arr1); // vai criar Sparses Array

//O CERTO É NÃO CRIAR SPARES

