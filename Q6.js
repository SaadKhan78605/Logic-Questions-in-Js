// Question 6
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// Example n= 1, output = 1; For n = 2, the output should be output= 5; For n = 3, the output should be output= 13. For n = 4, the output should be output = 25.


// METHOD NO.1

function myFunction(n) {
       if(n<0){
        return false;
       }
    return (n ** 2 + (n - 1) ** 2);
}
let result = myFunction(4);
console.log(result);


// METHOD NO.2

let n = 4;

if(n<0){
    console.log(false) ;
}
else{
    console.log (n**2+(n-1)**2);
}