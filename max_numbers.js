function findMax(arr) {
    if (arr.length == 0){
        return null;
    }
let max = arr[0];
for (let index = 1; index < arr.length; index++) {
    if (arr[index] > max) {
        max = arr[index]
    }
  }
  return max;
}
var numbers = [10,5,20,50,70];
var maxNumber = findMax(numbers);
console.log("Maximum number is : ", + maxNumber);