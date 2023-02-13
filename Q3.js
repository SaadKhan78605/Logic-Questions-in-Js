// Given an array, rotate the array to the right by k steps, where k is non-negative.

const input = [1,2,3,4,5,6,7];
const k = 3;
function rotate(arr, steps){
    for (let i = 0; i<steps; i++){
        arr.unshift(arr.pop());
    }
    return arr;
}
let result = rotate(input,k);
console.log(result);
