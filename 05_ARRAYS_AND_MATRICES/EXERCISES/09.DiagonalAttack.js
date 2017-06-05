function diagonalAttack(array) {
    let matrix = array.map(row => row.split(' ').map(Number));
    let sum = isEqualSum(matrix);
    if (!sum) {
        print(matrix);
    } else {
        fillMatrixWithSum(matrix, sum);
        print(matrix);
    }

    function print(matrix) {
        console.log(matrix.map(row => row.join(' ')).join('\n'));
    }

    function isEqualSum(matrix) {
        let firstDiagonalSum = 0;
        let secondDiagonalSum = 0;

        for (let i = 0; i < matrix.length; i++) {
            firstDiagonalSum += matrix[i][i];
            secondDiagonalSum += matrix[i][matrix.length - i - 1];
        }

        if (firstDiagonalSum === secondDiagonalSum) {
            return firstDiagonalSum;
        }

        return false;
    }

    function fillMatrixWithSum(matrix, sum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row !== col && row + col !== matrix.length - 1) {
                    matrix[row][col] = sum;
                }
            }
        }
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);