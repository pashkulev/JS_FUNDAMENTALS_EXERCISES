function printMatrix(matrix) {
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

printMatrix([
    ['0,0', '0,1', '0,2'],
    ['1,0', '1,1', '1,2'],
    ['2,0', '2,1', '2,2']
]);