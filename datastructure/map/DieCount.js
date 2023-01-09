let dieMap = new Map();
for (let i = 1; i < 7; i++) {
    dieMap.set(i, 0);
}

let count = 0;
while (count < 10) {
    let num = 1 + Math.floor(Math.random() * 6);
    dieMap.set(num, dieMap.get(num) + 1);
    count = Math.max(...dieMap.values())
}

dieMap.forEach(function (value, key) {
    console.log(key + ' = ' + value);
})

function getKeyHavingMaxValue(value) {
    return [...dieMap].find(([key, val]) => val == value)[0]
}

function getKeyHavingMinValue(value) {
    return [...dieMap].find(([key, val]) => val == value)[0]
}

console.log(dieMap)
console.log("Key of Maximum value = " + getKeyHavingMaxValue(Math.max(...dieMap.values())));
console.log("Key of Minimum value = " + getKeyHavingMinValue(Math.min(...dieMap.values())));

