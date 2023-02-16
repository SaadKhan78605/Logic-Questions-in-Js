// Question 5
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.

let arr = [3,6,-2,-5,7,3];

function myFunction(inputArray){
    let newArray = [];
    for(let i=0; i<inputArray.length-1; i++){
        let multiple = inputArray[i]*inputArray[i+1]
        newArray.push(multiple);
    }
    let max =  Math.max(...newArray);
    return max;
}
let result = myFunction(arr);
console.log(result);
