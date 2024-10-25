console.log("======== Method 1 ========");
const number = 6;
let n1 = 0, n2 = 1, nextTerm;
console.log("Fibonacci Series : ");
console.log(n1);
console.log(n2);
nextTerm = n1 + n2;
while (nextTerm <= number) {
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}

console.log("======== Method 2 ========");
function fibonacciSeries(start, end) {
    let n1 = 0, n2 = 1, nextTerm;
    let fibonacci = [];
    while (n1 <= end) {
        if (n1 >= start) {
            fibonacci.push(n1)
        }
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return fibonacci
}
const startNumber = 10;
const endNumber = 100;
const fibonacciSequence = fibonacciSeries(startNumber, endNumber);
console.log(" Fibonacci series between " + startNumber + " and " + endNumber + 
    " : " + fibonacciSequence.join(" , ")
);
