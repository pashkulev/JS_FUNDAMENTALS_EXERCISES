function orbit(input) {
    let [width, height, starRow, starCol] = input;
    let matrix = initializeMatrix(width, height, starRow, starCol);

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            let horizontalDistanceFromStar = Math.abs(col - starCol);
            let verticalDistanceFromStar = Math.abs(row - starRow);
            let distanceFromStar = Math.max(horizontalDistanceFromStar, verticalDistanceFromStar);
            matrix[row][col] = matrix[starRow][starCol] + distanceFromStar;
        }
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));

    function initializeMatrix(width, height, row, col) {
        let matrix = new Array(height);
        for (let i = 0; i < height; i++) {
            matrix[i] = new Array(width);
        }

        matrix[row][col] = 1;
        return matrix;
    }
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);