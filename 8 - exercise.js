
let arr = [];

arr.push(0,1,2,3,4,);
console.log(arr.length);

console.log(arr)

//hard way
// let multiplyArray = arr[3]* 10
// arr[3] = multiplyArray;

//easy way
arr[3] = arr[3]* 10;

console.log(arr)


const addItem = function(value) {
    arr.push(value);
};

const getItem = function(){
    return arr.shift();
};


addItem(90);
console.log(arr)

let num = getItem();
console.log(num)