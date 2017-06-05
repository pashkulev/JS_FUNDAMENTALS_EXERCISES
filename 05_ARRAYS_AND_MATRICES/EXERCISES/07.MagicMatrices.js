function isMagical(matrix) {
    let sum = (a, b) => a + b;
    let targetSum = matrix[0].reduce(sum);
    for (let row = 1; row < matrix.length; row++) {
        if (matrix[row].reduce(sum) !== targetSum) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }

        if (colSum !== targetSum) {
            return false;
        }
    }

    return true;
}

// console.log(isMagical([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
// console.log(isMagical([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));
console.log(isMagical([[1, 0, 0], [0, 0, 1], [0, 1, 0]]));;