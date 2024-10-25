console.log("======== Method 1 ========")
function isPrime(num) {
if (num <= 1) {
    return false;
}
if (num == 2) {
    return true;
}
if (num % 2 == 0) {
    return false;
}
for (let index = 3; index < Math.sqrt(num); index = index + 2) {
    if (num % index == 0) {
        return false;
    }
  }
  return true;
}
var number = 29;
if (isPrime(number)) {
    console.log(number + " is a prime number. ");
} else {
    console.log(number + " is not a prime number. ");
}

console.log("======== Method 2 ========")
function isPrime(num) {
if (num <= 1) {
    return false;
  }
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
        return false;
    }
  }
  return true;
}
var number = 21;
if (isPrime(number)) {
    console.log(number + " is a prime number. ");
} else {
    console.log(number + " is not a prime number. ");  
}

console.log("======== Method 3 ========")
function findPrimesInRange(start, end){
    const primes = [];
    for (let num = start; num <= end; num++) {
        let isPrime = num > 1;
        for (let index = 2; index <= Math.sqrt(num); index++) {
           if (num % index == 0) {
            isPrime = false
            break;
           } 
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}
const start = 10;
const end = 50;
const primeNumbers = findPrimesInRange(start, end);
console.log("Prime number between " + start + " and " + end + " : " + primeNumbers.join(",") + ".");