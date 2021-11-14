let arr1 = [1,2,3,4,true,"array", {one:1},[3,5]];


console.log(arr1.length);

delete arr1[3];

console.log(arr1[3]);

console.log(arr1);

console.log("\nAo observarmos aprendemos que ao deletar ele deixa um espaço em branco, pois só deleta o valor\n");
console.log("\nOu seja, o delete não modifica o lengt do Array\n");