function checkValidity(coordinates) {
    let [x1, y1, x2, y2] = coordinates;

    processValidation(x1, y1);
    processValidation(x2, y2);
    processValidation(x1, y1, x2, y2);

    function processValidation(x1, y1, x2 = 0, y2 = 0) {
        if (isValidDistance(x1, y1, x2, y2)) {
            printResult(true, x1, y1, x2, y2);
        } else {
            printResult(false, x1, y1, x2, y2);
        }
    }

    function isValidDistance(x1, y1, x2, y2) {
        let hypotenuse = calculateHypotenuse(x1, y1, x2, y2);
        return Math.floor(hypotenuse) === hypotenuse;
    }

    function calculateHypotenuse(x1, y1, x2, y2) {
        let sideA = Math.abs(x1 - x2);
        let sideB = Math.abs(y1 - y2);
        return Math.sqrt(sideA * sideA + sideB * sideB);
    }

    function printResult(isValid, x1, y1, x2, y2) {
        let result = `{${x1}, ${y1}} to {${x2}, ${y2}} `;
        result += isValid ? `is valid` : `is invalid`;
        console.log(result);
    }
}

checkValidity([2, 1, 1, 1]);