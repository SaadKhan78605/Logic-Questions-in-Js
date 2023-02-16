// Question 7
// Given the string, check if it is a palindrome.
// Example
// For inputString = "aabaa", the output should be = true; For inputString = "abac", the output should be = false; For inputString = "a", the output should be = true.

let myStr = "aabaa";

function myFun(string){
    for (let i=0; i<string.length/2; i++) {
        if (string[i] !== string[string.length-1-i]) {
            return "It is not Palindrome";
        }
    }
    return "It is a palindrome";
}
let result = myFun(myStr);
console.log(result);