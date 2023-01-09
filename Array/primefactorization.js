function primeFactors(num) {
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    const primeFactorsArr = [];
    for (let i = 2; i <= num; i++) {
        while (isPrime(i) && num % i === 0) {
            if (!primeFactorsArr.includes(i)) primeFactorsArr.push(i);
            num /= i;
        }
    }
    return primeFactorsArr;
}

let num = prompt("Enter a number");
console.log(primeFactors(num));