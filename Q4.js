// Question 4
// Create a nested Create a nested for loops produce the loops produce the
// following output.
// ....1
// ...22
// ..333
// .4444
// 55555

let rows = 5;
let nums = "";

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
        nums += ".";
    } 
    for (let k = 1; k <= i; k++) {
        nums += i;
    }
    nums += "\n";
}
console.log(nums);