let arr = [3,15,25,6,8,12];

console.log(arr);

//for ([initialization];[condition];[increment])

for (let i = 0 ; i < arr.length; i++) {
    arr[i] = arr[i] * 5;
}

console.log(arr);