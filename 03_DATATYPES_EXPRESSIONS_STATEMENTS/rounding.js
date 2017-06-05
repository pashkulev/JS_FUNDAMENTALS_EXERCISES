function round(array) {
    "use strict";
    let [number, precision] = [array[0], array[1] > 15 ? 15 : array[1]];
    let strNum = number.toFixed(precision);
    number = Number(strNum);
    console.log(number);
}

round([10.5, 3]);