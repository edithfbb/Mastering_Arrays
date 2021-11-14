let arr1 = [1,2,3,4,true,"array", {one:1},[3,5]];


console.log(arr1)
console.log(arr1[6]);
console.log(arr1[20]); // -> return undefined

console.log("\nHOW TO ASSIGN A VALUE TO AN ARROW?\n")

console.log(arr1[6]);
arr1[6] = "Edith" // << 
console.log(arr1);

console.log("\n AND IF I ADD ONE MORE ARRAY IN THE END?  LENGHT + 1\n")
arr1[8] = false;
console.log(arr1);

console.log("\n AND IF I ADD ONE MORE ARRAY BEYOND THE END?  1\n")
arr1[20] = 5; 
console.log(arr1);
// he will enter empty values





