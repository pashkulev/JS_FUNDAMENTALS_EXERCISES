function spiralMatrix(rows, cols) {
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
    }
    let lastNumber = rows * cols;
    let currentNumber = 1;
    let currentRow = 0;
    let currentCol = 0;

    let horizontalSteps = cols - 1;
    let verticalSteps = rows - 1;

    while (currentNumber <= lastNumber) {
        if (cols === 1) {
            matrix[currentRow++][0] = currentNumber++;
            continue;
        }

        if (verticalSteps === 0) {
            verticalSteps = 1;
        }

        if (horizontalSteps === 0) {
            horizontalSteps = 1;
        }

        for (let col = currentCol; col < currentCol + horizontalSteps && currentNumber <= lastNumber; col++) {
            matrix[currentRow][col] = currentNumber++;
        }
        currentCol += horizontalSteps;

        for (let row = currentRow; row < currentRow + verticalSteps && currentNumber <= lastNumber; row++) {
            matrix[row][currentCol] = currentNumber++;
        }
        currentRow += verticalSteps;

        for (let col = currentCol; col > currentCol - horizontalSteps && currentNumber <= lastNumber; col--) {
            matrix[currentRow][col] = currentNumber++;
        }
        currentCol -= horizontalSteps;

        for (let row = currentRow; row > currentRow - verticalSteps && currentNumber <= lastNumber; row--) {
            matrix[row][currentCol] = currentNumber++;
        }
        currentRow -= verticalSteps - 1;
        currentCol++;

        horizontalSteps -= 2;
        verticalSteps -= 2;
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

spiralMatrix(9, 9);
