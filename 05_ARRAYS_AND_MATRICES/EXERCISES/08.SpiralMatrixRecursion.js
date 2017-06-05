function spiralMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(cols);
    }

    let n = 1;
    let offSet = 0;
    let lastNumber = rows * cols;
    matrix = fill(matrix, n, offSet, lastNumber);
    console.log(matrix.map(row => row.join(" ")).join('\n'));

    function fill(matrix, n, offset, lastNum) {
        if (n > lastNum) {
            return matrix;
        }

        let currentRow = offset;
        let currentCol = offset;

        if (currentCol === matrix[0].length - 1 - offset) {
            matrix[currentRow][currentCol] = n++;
        }

        for (let col = currentCol; col < matrix[0].length - 1 - offset && n <= lastNum; col++) {
            matrix[currentRow][col] = n++;
        }
        currentCol = matrix[0].length - 1 - offset;

        for (let row = currentRow; row < matrix.length - 1 - offset && n <= lastNum; row++) {
            matrix[row][currentCol] = n++;
        }
        currentRow = matrix.length - 1 - offset;

        for (let col = currentCol; col > offset && n <= lastNum; col--) {
            matrix[currentRow][col] = n++;
        }
        currentCol = offset;

        for (let row = matrix.length - 1 - offset; row > offset && n <= lastNum; row--) {
            matrix[row][currentCol] = n++;
        }

        return fill(matrix, n, ++offset, lastNum);
    }
}

spiralMatrix(2, 2);