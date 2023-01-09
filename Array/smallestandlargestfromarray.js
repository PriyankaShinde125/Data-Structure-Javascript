function getMax(arr) {
    return Math.max.apply(null, arr);
}

function getMin(arr) {
    return Math.min.apply(null, arr);
}

let numberArr = new Array(10);

for (let i = 0; i < numberArr.length; i++) {
    let random = Math.floor(100 + Math.random() * 900);
    numberArr[i] = random;
}

console.log(numberArr);
let largest = getMax(numberArr);
let smallest = getMin(numberArr);
console.log("Largest = " + largest);
console.log("Smallest = " + smallest);