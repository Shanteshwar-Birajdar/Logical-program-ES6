console.log("======== Using Recursion ========");
function factorial(n) {
    if (n < 0) {
        return - 1;
    }
    if (n === 0 || n === 1) {
         return 1;
    }
    return n * factorial(n - 1);
}
var number = 5;
var result = factorial(number);
console.log("The factorial of " + number + " is " + result + ".");

console.log("======== Without Recursion ========");
function factorial(n) {
    if (n < 0) {
        return - 1; 
    }
    if (n == 0) {
        return 1;
    }
    let result = 1;
    for (let index = 2; index <= n; index++) {
       result = result * index 
    }
    return result;
}
var number = 5;
var result = factorial(number);
console.log("The factorial of " + number + " is " + result + ".");
