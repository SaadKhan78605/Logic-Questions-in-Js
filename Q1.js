// Write a program to reverse an array or string using loop
// input: [ 1, 2, 3 ]
// output: [ 3, 2, 1 ]

let arr = [1, 2, 3];
let arr1 = [];

for (let i=arr.length-1; i>=0; i--){
    arr1.push(arr[i]);
}
console.log(arr1);
