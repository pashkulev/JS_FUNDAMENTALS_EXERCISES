function findMax(matrix) {
    let max = -Infinity;
    for (let i = 0; i < matrix.length; i++) {
        let rowMax = matrix[i].sort((a, b) => b - a)[0];
        if (rowMax > max) max = rowMax;
    }

    console.log(max);
}

function biggestElement(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(r => r.forEach(c => biggestNum = Math.max(biggestNum, c)));
    console.log(biggestNum);
}

// function concat(matrix) {
//     let result = [];
//     matrix.forEach(row => result = result.concat(row));
//     console.log(result.sort((a, b) => b - a)[0]);
// }

let reduce = matrix => matrix.reduce((a, b) => a.concat(b)).sort((a,b) => b - a)[0];
// findMax([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]);
// biggestElement([[20, 50, 10], [8, 33, 145]]);
console.log(reduce([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));;