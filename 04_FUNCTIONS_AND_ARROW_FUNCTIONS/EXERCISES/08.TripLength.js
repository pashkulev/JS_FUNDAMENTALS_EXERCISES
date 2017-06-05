function evaluateTripLength(coordinates) {
    let [x1, y1, x2, y2, x3, y3] = coordinates;
    let sideA = calculateHypotenuse(x1, y1, x2, y2);
    let sideB = calculateHypotenuse(x2, y2, x3, y3);
    let sideC = calculateHypotenuse(x3, y3, x1, y1);
    return evaluateTripLength(sideA, sideB, sideC);

    function calculateHypotenuse(x1, y1, x2, y2) {
        let sideA = Math.abs(x1 - x2);
        let sideB = Math.abs(y1 - y2);
        return Math.sqrt(sideA * sideA + sideB * sideB);
    }

    function evaluateTripLength(a, b, c) {
        "use strict";
        let shortestDistance = Math.min(a + b, b + c, a + c);
        if (a + b <= b + c && a + b === shortestDistance) {
            return `1->2->3: ${shortestDistance}`;
        } else if (c + b <= a + b && c + b === shortestDistance) {
            return `1->3->2: ${shortestDistance}`;
        } else if (a + c <= b + c && a + c === shortestDistance) {
            return `2->1->3: ${shortestDistance}`;
        } else {
            return `2->3->1: ${shortestDistance}`;
        }
    }
}

console.log(evaluateTripLength([-1, -2, 3.5, 0, 0, 2]));;