let arr = [1,2,3,4,5,6,7,8]

//INSERINDO NO COMEÇO COM O "UNSHIFT"
//toda vez que insiro algo no começo, ele vai mudar o index
console.log(arr);

console.log("\nINSERINDO ALGO NO COMEÇO DO ARRAY\n");
arr.unshift(55);
console.log(arr);

console.log("\nPOSOS INSERIR MAIS DE UM VALOR ELE VAI ALTERAR O INDEX E O LENGHT\n");
arr.unshift(100, 23);
console.log(arr);

//REMOVENDO DO COMEÇO COM O "SHIFT"

console.log("\nREMOVENDO DO COMEÇO COM O 'SHIFT'\n");
arr.shift();
console.log(arr);




