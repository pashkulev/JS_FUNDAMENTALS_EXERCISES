function spiralMatrix(rows, cols) {
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix[row] = [];
    }
    let lastNumber = rows * cols;
    let currentNumber = 1;
    let currentRow = 0;
    let currentCol = 0;
    let steps = cols - 1;

    while (currentNumber <= lastNumber) {
        steps = steps === 0 ? 1 : steps;

        for (let col = currentCol; col < currentCol + steps && currentNumber <= lastNumber; col++) {
            matrix[currentRow][col] = currentNumber++;
        }
        currentCol += steps;

        for (let row = currentRow; row < currentRow + steps && currentNumber <= lastNumber; row++) {
            matrix[row][currentCol] = currentNumber++;
        }
        currentRow += steps;

        for (let col = currentCol; col > currentCol - steps && currentNumber <= lastNumber; col--) {
            matrix[currentRow][col] = currentNumber++;
        }
        currentCol -= steps;

        for (let row = currentRow; row > currentRow - steps && currentNumber <= lastNumber; row--) {
            matrix[row][currentCol] = currentNumber++;
        }
        currentRow -= steps - 1;
        currentCol++;

        steps -= 2;
    }

    console.log(matrix.map(r => r.join(' ')).join('\n'));
}

spiralMatrix(4, 4);