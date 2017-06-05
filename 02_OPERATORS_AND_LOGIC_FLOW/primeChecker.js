function checkIfPrime(n) {
    let result = n == 2;
    if (n > 2) {
        result = !result;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                result = false;
                break;
            }
        }
    }

    console.log(result);
}

checkIfPrime(31);