
function getStringOfNumbers(strNum) {
    let n = Number(strNum);
    let result = "";

    for (let i = 1; i <= n; i++) {
        result += i;
    }

    console.log(result);
}

getStringOfNumbers('11');