function orbit(input) {
    let [row, col, x, y] = input;
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = [];
        matrix[i] = '0'.repeat(col).split('').map(Number);
    }

    let num = 1;
    matrix[x][y] = num;
    let counter = 1;
    let currentRow = x;
    let currentCol = y;

    while (true) {
        num++;
        let isFilled = true;
        let startRow = Math.max(0, currentRow - counter);
        let endRow = Math.min(matrix.length - 1, currentRow + counter);
        let startCol = Math.max(0, currentCol - counter);
        let endCol = Math.min(matrix[0].length - 1, currentCol + counter);

        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][col] = num;
                    isFilled = false;
                }
            }
        }

        if (isFilled) {
            break;
        }

        counter++;
    }

    console.log(matrix.map(row => row.join(" ")).join('\n'));
}

orbit([5, 5, 2, 2]);