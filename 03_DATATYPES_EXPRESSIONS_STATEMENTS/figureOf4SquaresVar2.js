function printFigure(n) {
    "use strict";
    let lines = n % 2 === 0 ? n - 1 : n;
    let middleLineIndex = Math.floor(lines / 2);
    let innerSpaces = n - 2;
    let dashes = '-'.repeat(innerSpaces);
    let spaces = ' '.repeat(innerSpaces);

    for (let i = 0; i < lines; i++) {
        if (i === 0 || i === middleLineIndex || i === lines - 1) {
            console.log(`+${dashes}+${dashes}+`);
        } else {
            console.log(`|${spaces}|${spaces}|`);
        }
    }
}

printFigure(7);
