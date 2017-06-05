function countEqualNeighbours(matrix) {
    let pairsCounter = 0;

    // check vertically
    for (let col = 0; col < matrix[0].length; col++) {
        for (let row = 1; row < matrix.length; row++) {
            if (matrix[row][col] === matrix[row - 1][col]) {
                pairsCounter++;
            }
        }
    }

    // check horizontally
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 1; col < matrix[row].length; col++) {
            if (matrix[row][col] === matrix[row][col - 1]) {
                pairsCounter++;
            }
        }
    }

    console.log(pairsCounter);
}

countEqualNeighbours([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
);
countEqualNeighbours([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);