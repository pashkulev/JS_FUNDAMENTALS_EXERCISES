function modifyAverage(number) {
    while (getAverage(number) <= 5) {
        number = Number(number.toString() + 9);
    }

    console.log(number);

    function getAverage(num) {
        let digitsCount = 0;
        let digitsSum = 0;

        while (num > 0) {
            digitsCount++;
            digitsSum += num % 10;
            num = Math.floor(num / 10);
        }

        return digitsSum / digitsCount;
    }
}

modifyAverage(101);