let arr = ["One", "Two", "Three", "Four", "Five"];

//standard for loop - loops over elements

for (let i=0; i<arr.length; i++){
 console.log(arr[i]);
}
//for in loop - loops over indexes NOT GOOD IDEA TO USE IT, the net one is better

for (let num in arr){
 console.log(num);    
}
//for of loop - loops over elements - same as standard for loop

for (let num of arr){
 console.log(num);    
}