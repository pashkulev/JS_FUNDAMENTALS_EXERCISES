function calcDiagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
        mainDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][j];
    }

    console.log(mainDiagonalSum + ' ' + secondaryDiagonalSum);
}

calcDiagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);