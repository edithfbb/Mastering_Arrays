let arr = [1, 2, 3];

// let obj = {
//     1: 'one',
//     2: 'two',
//     3: 'three'
// };

/*for (let val of obj) {
    console.log(val);
};*/

//iterable

let map = new Map();
map.set(1, 'one');
map.set(2, 'two');
map.set(3, 'three');

/*for (let val of map) {
    console.log(val);
};*/

let divs = document.querySelectorAll('div');

// for (let val of divs) {
//     console.log(val);
// };

//FIRST WAY TO CONVERT IN ARRAY
//Use spread to convert to array

let mapArray = [...map];
let divsArray = [...divs];


//SECOND WAY TO CONVERT IN ARRAY
//Use spread to convert to array

// let mapArray2 = Array.from(map);
// let divsArray2 = Array.from(divs);


//TRYING TO CONVERT A OBJECT

// let objArray = [...obj]; // not possible, don`t work in objects
// let objArray2 = Array.from(obj); // not receive an error but is empty. Works for objects


// If I have an object like the first line will not transform into an array as we saw,
// But if you inser and lenght = the size you want, he will transform what is enumrable 

let obj = {
    length: 4,
    1: 'one',
    2: 'two',
    3: 'three'
};

let objArrayy = Array.from(obj);