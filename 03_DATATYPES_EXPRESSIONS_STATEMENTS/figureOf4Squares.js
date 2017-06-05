function print4Squares(size) {
    let rowsCount = size % 2 == 0 ? size - 1 : size;
    let middleRowsCount = (rowsCount - 3) / 2;
    let rowsLength = (size * 2) - 1;
    let innerSpace = (rowsLength - 3) / 2;
    let dashes = '-'.repeat(innerSpace);
    let spaces = ' '.repeat(innerSpace);

    let result = "";
    for (let i = 0; i < rowsCount; i++) {
        result += `+${dashes}+${dashes}+\n`;
        if (i == 2) break;
        for (let j = 0; j < middleRowsCount; j++) {
            result += `|${spaces}|${spaces}|\n`;
        }
    }

    console.log(result);
}

print4Squares(3);