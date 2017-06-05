function calcInterest(array) {
    let principalSum = array[0];
    let interestRate = array[1] / 100;
    let compoundingPeriod = 12 / array[2];
    let timespan = array[3];

    let result = principalSum * Math.pow(1 + (interestRate / compoundingPeriod), compoundingPeriod * timespan);
    console.log(result.toFixed(2));
}

calcInterest([1500, 4.3, 3, 6]);