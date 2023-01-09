function getMax(arr) {
    return Math.max.apply(null, arr);
}

function getMin(arr) {
    return Math.min.apply(null, arr);
}

function getSecondLargest(arr) {
    arr.sort(function (a, b) { return b - a });
    console.log(arr);
    return arr[1];
}

function getSecondSmallest(arr) {
    arr.sort(function (a, b) { return a - b });
    console.log(arr);
    return arr[1];
}

let numberArr = new Array(10);

for (let i = 0; i < numberArr.length; i++) {
    let random = Math.floor(100 + Math.random() * 900);
    numberArr[i] = random;
}

console.log(numberArr);
let largest = getMax(numberArr);
let smallest = getMin(numberArr);
let secondLargest = getSecondLargest(numberArr);
let secondSmallest = getSecondSmallest(numberArr);
console.log("Largest = " + largest);
console.log("Smallest = " + smallest);
console.log("Second largest = " + secondLargest);
console.log("Second Smallest = " + secondSmallest);